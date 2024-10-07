import { siteConfig } from "@/config/site";
import { ImageResponse } from "next/og";

export async function GET() {
  const geistMono = fetch(
    "https://utfs.io/f/3ec0a59a-af4c-42e0-9791-c1090b0b0359-uxnmu9.ttf",
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div tw="text-[#fafafa] bg-[#171717] flex w-full h-full items-end px-32 py-28 justify-between">
      <div tw="flex items-center justify-between w-full">
        <div tw="flex items-center">
          <img
            src="https://utfs.io/f/17cc8327-6b9f-4eb0-b3b9-ac8b8ca8caef-v317j9.png"
            alt={`${siteConfig.name}'s profile`}
            tw="w-[240px] h-[240px] rounded-full"
          />
          <div tw="flex flex-col ml-16">
            <h1 tw="text-5xl">{siteConfig.name}</h1>
            <p tw="text-4xl">{siteConfig.description}</p>
          </div>
        </div>
        <p tw="text-5xl">mshub.dev</p>
      </div>
    </div>,
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "GeistMono-Black",
          data: await geistMono,
          style: "normal",
          weight: 900,
        },
      ],
    },
  );
}

export const dynamic = "force-static";
