import Link from 'next/link'
import { slugify } from '../lib/utils'
import { titles } from './data'

export default function Home() {
  return (
    <main className="flex min-w-0 flex-auto flex-col">
      <section className="flex flex-col gap-2">
        {titles.map((title, idx) => {
          return (
            <Link
              href={`/blog/${slugify(title)}`}
              key={idx}
              className="flex items-center gap-4 px-2 transition-all hover:bg-stone-200 dark:hover:bg-stone-800"
            >
              {title}
            </Link>
          )
        })}
      </section>
    </main>
  )
}
