import { createFileRoute } from "@tanstack/react-router";

import { BuildStuff } from "@/components/build-stuff";
import { Contributions } from "@/components/contributions";
import { LinkHints } from "@/components/link-hints";
import { getContributions } from "@/github.functions";

export const Route = createFileRoute("/")({
  loader: () => getContributions(),
  component: Home,
});

type Project = {
  href: string;
  /** Brand color; its hue and chroma tint the link on hover. */
  brand: string;
};

const values: Array<string> = [
  "I sweat the small details, in the interface and in the code.",
  "I like getting the shape of things right, how the pieces fit together.",
  "I love refactoring. Rewriting something until it’s simpler is my favourite kind of work.",
];

const projects: Array<Project> = [
  { href: "https://myagrolab.ge", brand: "oklch(0.6 0.15 164)" },
  { href: "https://herio.audio", brand: "oklch(0.572 0.21 29.5)" },
  { href: "https://tbcbusinessaward.ge", brand: "oklch(0.705 0.149 234.5)" },
];

const links = [
  { label: "Email", href: "mailto:misho@mshub.dev" },
  { label: "GitHub", href: "https://github.com/mshubitidze" },
  { label: "X", href: "https://x.com/_mshub" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mikheil-shubitidze" },
];

const newTab = { target: "_blank", rel: "noreferrer" };

function Home() {
  const contributions = Route.useLoaderData();

  return (
    <main className="blur-in mx-auto max-w-xl px-6 py-24 text-sm leading-relaxed">
      <LinkHints />

      <header>
        <h1 className="font-medium">Misho Shubitidze</h1>
        <p className="text-muted-foreground">Software engineer in Tbilisi</p>
        <p className="text-muted-foreground">
          Currently at{" "}
          <a
            href="https://travlrd.com"
            {...newTab}
            className="underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground"
          >
            TRAVLRD
          </a>
        </p>
      </header>

      <div className="mt-10">
        <p>
          I build <BuildStuff />, mostly with <s>TypeScript</s>{" "}
          <a
            href="https://effect.website"
            {...newTab}
            className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
          >
            Effect
          </a>{" "}
          and React. I write code mostly by talking to my laptop now.
        </p>
        {contributions && <Contributions {...contributions} />}
      </div>

      <Section title="What I care about">
        <ul className="flex flex-col gap-2">
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </Section>

      <Section title="Some of my work">
        <ul className="flex flex-wrap gap-x-2 gap-y-1">
          {projects.map((project, index) => (
            <li
              key={project.href}
              className="flex gap-2"
              style={{ "--brand": project.brand } as React.CSSProperties}
            >
              {index > 0 && (
                <span className="text-muted-foreground/50" aria-hidden>
                  ·
                </span>
              )}
              <a
                href={project.href}
                {...newTab}
                className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-brand hover:decoration-brand"
              >
                {new URL(project.href).hostname}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Elsewhere">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith("mailto:") ? {} : newTab)}
                className="underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <p className="fixed right-6 bottom-6 hidden text-muted-foreground lg:pointer-fine:block">
        Press{" "}
        <kbd className="mx-0.5 inline-flex min-w-5 items-center justify-center rounded border border-b-2 border-border px-1 font-sans text-xs font-medium text-foreground">
          f
        </kbd>{" "}
        to open links
      </p>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="mb-4 text-muted-foreground">{title}</h2>
      {children}
    </section>
  );
}
