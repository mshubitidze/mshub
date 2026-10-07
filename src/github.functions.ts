import { createServerFn } from "@tanstack/react-start";
import { env } from "cloudflare:workers";

export type Contributions = {
  total: number;
  /** One entry per week, each holding the 0–4 intensity of its days. */
  weeks: Array<Array<number>>;
};

const query = `query {
  user(login: "mshubitidze") {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { contributionLevel } }
      }
    }
  }
}`;

const levels: Record<string, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

type CalendarResponse = {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Array<{ contributionDays: Array<{ contributionLevel: string }> }>;
        };
      };
    };
  };
};

/** Fetching from GitHub on every visit is unnecessary; the calendar barely moves within hours. */
const cacheKey = new Request("https://mshub.dev/_cache/github-contributions");
const cacheSeconds = 6 * 60 * 60;

/** Last year's GitHub contribution calendar, or `null` when GitHub can't be reached. */
export const getContributions = createServerFn({ method: "GET" }).handler(
  async (): Promise<Contributions | null> => {
    const cache = await caches.open("github");
    const cached = await cache.match(cacheKey);
    if (cached) return cached.json();

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${env.GITHUB_TOKEN}`,
        "User-Agent": "mshub.dev",
      },
      body: JSON.stringify({ query }),
    });
    if (!response.ok) return null;

    const { data } = await response.json<CalendarResponse>();
    const calendar = data.user.contributionsCollection.contributionCalendar;
    const contributions: Contributions = {
      total: calendar.totalContributions,
      weeks: calendar.weeks.map((week) =>
        week.contributionDays.map((day) => levels[day.contributionLevel] ?? 0),
      ),
    };

    await cache.put(
      cacheKey,
      Response.json(contributions, {
        headers: { "Cache-Control": `public, max-age=${cacheSeconds}` },
      }),
    );
    return contributions;
  },
);
