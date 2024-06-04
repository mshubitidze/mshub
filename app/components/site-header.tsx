import Link from 'next/link'

export function SiteHeader() {
  type Slug = `/${string}`

  let slugs: Slug[] = ['/', '/blog']

  return (
    <aside className="pb-16 pt-16">
      <nav className="flex items-center space-x-4">
        {slugs.map((href) => (
          <Link
            key={href}
            className="px-2 py-1 font-medium transition-all hover:text-neutral-400"
            href={href}
          >
            ~{href}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
