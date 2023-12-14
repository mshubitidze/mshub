"use client";

import { useState } from "react";

export default function Home() {
  const [gh, setGh] = useState("https://github.com/mshubitidze");
  const [x, setX] = useState("https://x.com/_mshub");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 text-lg">
      <div className="h-10">
        {x.split("").map((l, idx) => (
          <button
            onClick={() => {
              setX(x.slice(0, idx) + x.slice(idx + 1));
            }}
            key={idx}
          >
            {l}
          </button>
        ))}
        {x.length === 0 && <a href="https://x.com/_mshub">x</a>}
      </div>
      <div className="h-10">
        {gh.split("").map((l, idx) => (
          <button
            onClick={() => {
              setGh(gh.slice(0, idx) + gh.slice(idx + 1));
            }}
            key={idx}
          >
            {l}
          </button>
        ))}
        {gh.length === 0 && <a href="https://github.com/mshubitidze">gh</a>}
      </div>
    </main>
  );
}
