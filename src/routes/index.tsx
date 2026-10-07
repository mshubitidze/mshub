import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

type Project = {
  name: string;
  href: string;
  soon?: boolean;
};

const values: Array<string> = [
  "I like code that is simple and easy to change.",
  "I sweat the small details in an interface.",
  "I use AI coding agents a lot, and review their work as carefully as a teammate’s.",
];

const projects: Array<Project> = [
  { name: "Agrolab", href: "https://myagrolab.ge" },
  { name: "Herio", href: "https://herio.audio" },
  { name: "STOK", href: "https://stok.design", soon: true },
  { name: "TBC Business Award", href: "https://tbcbusinessaward.ge" },
];

const links = [
  { label: "Email", href: "mailto:misho@mshub.dev" },
  { label: "GitHub", href: "https://github.com/mshubitidze" },
  { label: "X", href: "https://x.com/_mshub" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mikheil-shubitidze" },
];

function Home() {
  return (
    <main className="blur-in mx-auto max-w-xl px-6 py-24 text-sm leading-relaxed">
      <header>
        <h1 className="font-medium">Misho Shubitidze</h1>
        <p className="text-muted-foreground">Software engineer in Tbilisi</p>
      </header>

      <p className="mt-10">
        I build websites and apps, mostly with <s>TypeScript</s>{" "}
        <a href="https://effect.website">Effect</a> and React. Alongside my full-time work, I take
        on freelance projects for teams and companies in Georgia.
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
            <li key={project.name} className="flex items-baseline justify-between gap-4">
              <span>
                {project.name}
                {project.soon && <span className="text-muted-foreground"> (soon)</span>}
              </span>
              {project.soon ? (
                <span className="text-muted-foreground/50">{new URL(project.href).hostname}</span>
              ) : (
                <a
                  href={project.href}
                  className="text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground"
                >
                  {new URL(project.href).hostname}
                </a>
              )}
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
                className="underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>
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
