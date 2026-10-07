import { createFileRoute } from "@tanstack/react-router";

import { BuildStuff } from "@/components/build-stuff";
import { LinkHints } from "@/components/link-hints";

export const Route = createFileRoute("/")({ component: Home });

type Project = {
  name: string;
  href: string;
  /** Brand color; its hue and chroma tint the link on hover. */
  brand?: string;
  soon?: boolean;
};

const values: Array<string> = [
  "I sweat the small details, in the interface and in the code.",
  "I like getting the shape of things right, how the pieces fit together.",
  "I love refactoring. Rewriting something until it’s simpler is my favourite kind of work.",
  "When something goes wrong, I fix why it happened so it can’t happen again. In code, with AI agents, and most things in life.",
];

const projects: Array<Project> = [
  {
    name: "Agrolab",
    href: "https://myagrolab.ge",
    brand: "oklch(0.6 0.15 164)",
  },
  {
    name: "Herio",
    href: "https://herio.audio",
    brand: "oklch(0.572 0.21 29.5)",
  },
  { name: "STOK", href: "https://stok.design", soon: true },
  {
    name: "TBC Business Award",
    href: "https://tbcbusinessaward.ge",
    brand: "oklch(0.705 0.149 234.5)",
  },
];

const links = [
  { label: "Email", href: "mailto:misho@mshub.dev" },
  { label: "GitHub", href: "https://github.com/mshubitidze" },
  { label: "X", href: "https://x.com/_mshub" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mikheil-shubitidze" },
];

const newTab = { target: "_blank", rel: "noreferrer" };

function Home() {
  return (
    <main className="blur-in mx-auto max-w-xl px-6 py-24 text-sm leading-relaxed">
      <LinkHints />

      <header>
        <h1 className="font-medium">Misho Shubitidze</h1>
        <p className="text-muted-foreground">Software engineer in Tbilisi</p>
      </header>

      <p className="mt-10">
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

      <Section title="What I care about">
        <ul className="flex flex-col gap-2">
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </Section>

      <Section title="Freelance">
        <ul className="flex flex-col gap-2">
          {projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
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

      <p className="mt-14 hidden text-muted-foreground pointer-fine:block">
        Press <kbd className="font-sans font-medium text-foreground">f</kbd> to open links from your
        keyboard.
      </p>
    </main>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const hostname = new URL(project.href).hostname;

  return (
    <li
      className="flex items-baseline justify-between gap-4"
      style={project.brand ? ({ "--brand": project.brand } as React.CSSProperties) : undefined}
    >
      <span>
        {project.name}
        {project.soon && <span className="text-muted-foreground"> (soon)</span>}
      </span>
      {project.soon ? (
        <span className="text-muted-foreground/50">{hostname}</span>
      ) : (
        <a
          href={project.href}
          {...newTab}
          className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-brand hover:decoration-brand"
        >
          {hostname}
        </a>
      )}
    </li>
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
