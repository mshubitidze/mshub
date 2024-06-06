import { ArrowUpRight } from './icons'
export function SiteFooter() {
  return (
    <footer className="my-16 flex items-center gap-4">
      <a
        className="inline-flex items-center px-2 py-1"
        href="https://x.com/_mshub"
        target="_blank"
      >
        follow me <ArrowUpRight />
      </a>
      <a
        className="inline-flex items-center px-2 py-1"
        href="https://github.com/mshubitidze"
        target="_blank"
      >
        github <ArrowUpRight />
      </a>
    </footer>
  )
}
