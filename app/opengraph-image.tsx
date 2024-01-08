import { ImageResponse } from 'next/og';

export const alt = 'mshub';
export const size = {
  width: 1200,
  height: 630,
};

export const runtime = 'edge';

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="flex bg-black w-full h-full text-white">
        <div tw="flex justify-between flex-col m-10">
          <p tw="text-5xl">mshub.dev</p>
          <div tw="flex flex-col">
            <p tw="text-slate-600 text-3xl">github.com/mshubitidze</p>
            <p tw="text-slate-600 text-3xl">x.com/_mshub</p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
