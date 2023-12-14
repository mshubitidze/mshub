import { ImageResponse } from "next/og";

export const alt = "mshub";
export const size = {
  width: 1200,
  height: 630,
};

export const runtime = "edge";

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="flex items-center justify-center text-5xl bg-black w-full h-full text-white">
        mshub
      </div>
    ),
    {
      ...size,
    },
  );
}
