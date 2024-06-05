'use client'

import { IconBadge, Nvim } from './icons'
import { useState } from 'react'

export function VimBtw() {
  const [btw, setBtw] = useState(false)
  return (
    <p className="prose prose-neutral mb-8 inline-flex dark:prose-invert">
      {btw ? (
        <span>
          i use{' '}
          <IconBadge href="https://neovim.io" label="neovim" svg={<Nvim />} />,
          btw
        </span>
      ) : (
        <span
          className="cursor-pointer no-underline"
          onClick={() => setBtw(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="square"
            className="h-[30.5px] animate-pulse"
          >
            <rect width="12" height="24" />
          </svg>
        </span>
      )}
    </p>
  )
}
