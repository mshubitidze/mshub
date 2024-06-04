'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { IconBadge, Nvim } from './icons'

export function VimBtw() {
  const searchParams = useSearchParams()
  const btw = searchParams.get('vim')
  return (
    <p className="prose prose-neutral mb-8 dark:prose-invert">
      {btw === 'btw' ? (
        <>
          i use{' '}
          <IconBadge href="https://neovim.io" label="neovim" svg={<Nvim />} />,
          btw
        </>
      ) : (
        <Link
          className="no-underline"
          href={{
            query: {
              vim: 'btw',
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            className="h-[30.5px] animate-pulse"
          >
            <rect width="12" height="20" x="6" y="2" />
          </svg>
        </Link>
      )}
    </p>
  )
}
