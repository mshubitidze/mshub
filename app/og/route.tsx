import { ImageResponse } from 'next/og'

export async function GET() {
  const geistMono = fetch(
    'https://utfs.io/f/3ec0a59a-af4c-42e0-9791-c1090b0b0359-uxnmu9.ttf'
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div tw="bg-[#0a0a0a] text-[#e5e5e5] text-7xl flex items-center justify-center w-full h-full">
        mshub.dev
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'GeistMono-Black',
          data: await geistMono,
          style: 'normal',
          weight: 900,
        },
      ],
    }
  )
}

export const dynamic = 'force-static'
