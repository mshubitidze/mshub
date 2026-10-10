import { HeadContent, Link, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "@/styles.css?url";

const description = "Software engineer in Tbilisi. I build stuff, mostly with Effect and React.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Misho Shubitidze",
      },
      { name: "description", content: description },
      // Share previews on X, iMessage, Slack and the like.
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mshub.dev" },
      { property: "og:title", content: "Misho Shubitidze" },
      { property: "og:description", content: description },
      { property: "og:image", content: "https://mshub.dev/og.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <main className="blur-in mx-auto max-w-xl px-6 py-24 text-sm leading-relaxed">
      <h1 className="font-medium">404</h1>
      <p className="text-muted-foreground">Page not found.</p>
      <Link
        to="/"
        className="underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground"
      >
        Go home
      </Link>
    </main>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Catppuccin Latte and Mocha base, so the browser bar matches the page. Written here
            because head() keeps only one meta per name. */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#eff1f5" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1e1e2e" />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-left",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
