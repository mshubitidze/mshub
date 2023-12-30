import { ExternalLinkIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-4">
      <a
        className="flex items-center px-4 py-2 border border-r-4 border-b-4 border-slate-600 hover:bg-slate-900 rounded-lg"
        href="https://github.com/mshubitidze"
        target="_blank"
        rel="noreferrer"
      >
        github
        <ExternalLinkIcon className="ml-2 h-[1.2rem] w-[1.2rem]" />
      </a>
      <a
        className="flex items-center px-4 py-2 border border-r-4 border-b-4 border-slate-600 hover:bg-slate-900 rounded-lg"
        href="https://x.com/_mshub"
        target="_blank"
        rel="noreferrer"
      >
        x
        <ExternalLinkIcon className="ml-2 h-[1.2rem] w-[1.2rem]" />
      </a>
    </main>
  );
}
