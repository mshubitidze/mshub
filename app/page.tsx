import { siteConfig } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'
// import { Onlyfans } from '../components/onlyfans'

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-screen-sm flex-1 flex-col gap-16 px-4 pt-20 font-mono">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            src="https://utfs.io/f/17cc8327-6b9f-4eb0-b3b9-ac8b8ca8caef-v317j9.png"
            alt={`${siteConfig.name}'s profile picture`}
            width={64}
            height={64}
            className="rounded-full object-cover transition-all hover:scale-105"
          />
        </Link>
        <div>
          <h1 className="text-lg font-bold">{siteConfig.name}</h1>
          <p className="font-semibold text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold">about me</h2>
        <div className="flex items-center text-muted-foreground">
          <p>
            i build stuff with{' '}
            <a
              className="underline underline-offset-4"
              target="_blank"
              href="https://react.dev"
            >
              react
            </a>{' '}
            and{' '}
            <a
              className="underline underline-offset-4"
              target="_blank"
              href="https://nextjs.org"
            >
              next.js
            </a>
            , using{' '}
            <a href="https://neovim.io/" target="_blank">
              <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#16B0ED,45%,#367533,55%,#88C649)] bg-[length:200%_100%] bg-clip-text text-transparent">
                neovim
              </span>
            </a>
            , btw
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
        <a
          href="https://x.com/_mshub"
          target="_blank"
          className="whitespace-nowrap"
        >
          x(twitter) &rarr;
        </a>
        <a
          href="https://github.com/mshubitidze"
          target="_blank"
          className="whitespace-nowrap"
        >
          github &rarr;
        </a>
        {/* <Onlyfans /> */}
      </div>
    </main>
  )
}

export const dynamic = 'force-static'
