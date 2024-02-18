import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">mshub.dev</Link>
        <div className="flex space-x-2">
          <a
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            href="https://github.com/mshubitidze"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon className="h-4 w-4" />
          </a>
          <a
            className={buttonVariants({ variant: "ghost", size: "icon" })}
            href="https://x.com/_mshub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.X className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
