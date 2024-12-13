import { ImagePreviewText } from "@/components/image-preview-text";
import { siteConfig } from "@/config/site";
import { Link } from "next-view-transitions";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh mx-auto px-4 max-w-2xl py-20">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="https://utfs.io/f/17cc8327-6b9f-4eb0-b3b9-ac8b8ca8caef-v317j9.png"
            alt={`${siteConfig.name}`}
            width={64}
            height={64}
            className="rounded-full object-cover transition-all hover:scale-105"
          />
        </Link>
        <div>
          <h1 className="font-bold text-lg">{siteConfig.name}</h1>
          <p className="font-semibold text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>
      </div>
      <h2 className="font-bold text-lg mt-16">about me</h2>
      <div className="flex items-center text-muted-foreground">
        <p className="text-balance">
          i build stuff with{" "}
          <ImagePreviewText
            imageUrl="https://react.dev/images/og-home.png"
            altText="React OG"
          >
            <a
              className="underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
              href="https://react.dev"
            >
              react
            </a>
          </ImagePreviewText>{" "}
          and{" "}
          <ImagePreviewText
            imageUrl="https://assets.vercel.com/image/upload/front/nextjs/twitter-card.png"
            altText="Next.js OG"
          >
            <a
              className="underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
              href="https://nextjs.org"
            >
              next.js
            </a>
          </ImagePreviewText>
          , using{" "}
          <ImagePreviewText imageUrl="/neovim.png" altText="Neovim OG">
            <a href="https://neovim.io/" target="_blank" rel="noreferrer">
              <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#16B0ED,45%,#367533,55%,#88C649)] bg-[length:200%_100%] bg-clip-text text-transparent">
                neovim
              </span>
            </a>
          </ImagePreviewText>
          , btw
        </p>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-4 mt-16">
        <a
          href="https://x.com/_mshub"
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap"
        >
          x &rarr;
        </a>
        <a
          href="https://www.linkedin.com/in/mikheil-shubitidze/"
          target="_blank"
          className="whitespace-nowrap"
        >
          linkedin &rarr;
        </a>
        <a
          href="https://github.com/mshubitidze"
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap"
        >
          github &rarr;
        </a>
      </div>
    </main>
  );
}

export const dynamic = "force-static";
