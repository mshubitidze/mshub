import { VimBtw } from './components/vim-btw'
import { IconBadge, NextjsSvg, ReactSvg } from './components/icons'

export default function Home() {
  return (
    <main className="flex min-w-0 flex-auto flex-col px-2">
      <section>
        <h1 className="mb-2 text-2xl font-medium tracking-tighter">
          hi, i&apos;m misho
        </h1>
        <VimBtw />
        <p className="prose prose-stone max-w-2xl dark:prose-invert">
          i&apos;m a <span className="animate-pulse">fullstack</span> developer
          mainly working with{' '}
          <IconBadge
            href="https://nextjs.org"
            label="Next.js"
            svg={<NextjsSvg />}
          />{' '}
          and{' '}
          <IconBadge
            href="https://react.dev"
            label="React"
            svg={<ReactSvg />}
          />
        </p>
      </section>
    </main>
  )
}
