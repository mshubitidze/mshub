import { ModeToggle } from "./mode-toggle";

export function SiteFooter() {
  return (
    <footer className="bg-background sticky bottom-0 z-40 w-full">
      <div className="container flex h-16 items-center justify-end">
        <ModeToggle />
      </div>
    </footer>
  );
}
