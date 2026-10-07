import { useId, useState } from "react";

import type { Contributions as Data } from "@/github.functions";

/** An accordion row that opens last year's contribution graph. */
export function Contributions({ total, weeks }: Data) {
  const [open, setOpen] = useState(false);
  const graphId = useId();

  return (
    <div className="mt-4">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={graphId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-muted-foreground hover:text-foreground"
      >
        {total.toLocaleString("en-US")} contributions on GitHub in the last year
        <svg
          viewBox="0 0 16 16"
          aria-hidden
          className={`size-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
          <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <div id={graphId} className="contributions" data-open={open}>
        <div className="overflow-hidden">
          <div
            role="img"
            aria-label={`Contribution graph: ${total.toLocaleString("en-US")} contributions in the last year`}
            className="grid grid-flow-col grid-rows-7 gap-0.5 pt-4"
          >
            {weeks.map((days, week) =>
              days.map((level, day) => (
                <span
                  key={`${week}-${day}`}
                  data-level={level}
                  className="contributions-day aspect-square rounded-[2px]"
                  style={{ gridColumn: week + 1, gridRow: day + 1 }}
                />
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
