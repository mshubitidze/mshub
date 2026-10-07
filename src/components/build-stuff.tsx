import { useState } from "react";

const details = "like web and mobile apps, backends and infrastructure";

/** "stuff" unfolds into examples of what I've built, word by word. */
export function BuildStuff() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="cursor-pointer underline decoration-muted-foreground decoration-dotted underline-offset-4 hover:decoration-foreground"
      >
        stuff
      </button>
      {open &&
        details.split(" ").map((word, index) => (
          <span key={index} className="word-in" style={{ animationDelay: `${index * 25}ms` }}>
            {" "}
            {word}
          </span>
        ))}
    </>
  );
}
