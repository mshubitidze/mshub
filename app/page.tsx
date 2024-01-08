import { ExternalLinkIcon } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-4">
      <a
        className="flex items-center rounded-lg border border-b-4 border-r-4 border-slate-600 px-4 py-2 transition-all hover:border-slate-900 hover:bg-slate-600 hover:text-white dark:hover:border-slate-600 dark:hover:bg-slate-900"
        href="https://github.com/mshubitidze"
        target="_blank"
        rel="noreferrer"
      >
        github
        <ExternalLinkIcon className="ml-2 h-[1.2rem] w-[1.2rem]" />
      </a>
      <a
        className="flex items-center rounded-lg border border-b-4 border-r-4 border-slate-600 px-4 py-2 transition-all hover:border-slate-900 hover:bg-slate-600 hover:text-white dark:hover:border-slate-600 dark:hover:bg-slate-900"
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
