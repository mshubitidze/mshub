import { createFileRoute } from "@tanstack/react-router";

import { fetchContributions } from "@/github.server";

/** Public JSON for the `npx mshub` terminal card, which can't hold a GitHub token. */
export const Route = createFileRoute("/api/contributions")({
  server: {
    handlers: {
      GET: async () => {
        const contributions = await fetchContributions();
        if (!contributions) return new Response(null, { status: 503 });
        return Response.json(contributions, {
          headers: { "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
