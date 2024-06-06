import { ImageResponse } from 'next/og'

export async function GET() {
  const geistMono = fetch(
    'https://utfs.io/f/3ec0a59a-af4c-42e0-9791-c1090b0b0359-uxnmu9.ttf'
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div tw="bg-[#09090b] text-[#fafafa] flex w-full h-full items-end p-32 justify-between">
        <div tw="flex flex-col">
          <h1 tw="text-5xl">misho shubitidze</h1>
          <p tw="text-4xl">front-end developer</p>
        </div>
        <p tw="text-5xl">mshub.dev</p>
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
