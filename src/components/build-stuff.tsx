import { Fragment, useEffect, useRef, useState } from "react";

const details = "like web and mobile apps, backends and infrastructure";

/** One wave period, in px. The path is drawn a few periods wider than the word so it can slide. */
const wavelength = 6;
const periods = 14;
const height = 5;
/** Quadratic segments peak at half their control point, so this gives about 3px peak to trough. */
const wave = `M0 ${height / 2}q${wavelength / 4} -3 ${wavelength / 2} 0${` t${wavelength / 2} 0`.repeat(periods * 2 - 1)}`;

/** Time for the wave to travel one period while looping on hover. */
const period = 220;

/** "stuff" unfolds into examples of what I've built, word by word. */
export function BuildStuff() {
  const [open, setOpen] = useState(false);
  const waveRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const element = waveRef.current;
    if (!element || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Ripple once after the page's blur-in has settled. A sine ease-in-out peaks at about 1.6× its
    // average speed, so this duration tops out at the same speed as the hover loop.
    element.animate(
      [{ transform: "translateX(0)" }, { transform: `translateX(-${wavelength * 2}px)` }],
      {
        duration: 1.6 * period * 2,
        delay: 1500,
        easing: "cubic-bezier(0.37, 0, 0.63, 1)",
      },
    );
  }, []);

  /** Restart the wave from wherever it is now, so switching animations never jumps. */
  const animateFromCurrentPhase = (
    build: (phase: number) => [Array<Keyframe>, KeyframeAnimationOptions],
  ) => {
    const element = waveRef.current;
    if (!element) return;
    const offset = -new DOMMatrix(getComputedStyle(element).transform).m41;
    const phase = (((offset % wavelength) + wavelength) % wavelength) / wavelength;
    for (const animation of element.getAnimations()) animation.cancel();
    element.animate(...build(phase));
  };

  const ripple = () =>
    animateFromCurrentPhase((phase) => [
      [{ transform: "translateX(0)" }, { transform: `translateX(-${wavelength}px)` }],
      { duration: period, iterations: Infinity, iterationStart: phase },
    ]);

  /** Coast to the end of the current period, starting at the loop's speed and slowing to rest. */
  const settle = () =>
    animateFromCurrentPhase((phase) => [
      [
        { transform: `translateX(-${phase * wavelength}px)` },
        { transform: `translateX(-${wavelength}px)` },
      ],
      { duration: (1 - phase) * period * 2, easing: "cubic-bezier(0.5, 1, 0.89, 1)" },
    ]);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onPointerEnter={(event) => event.pointerType === "mouse" && ripple()}
        onPointerLeave={(event) => event.pointerType === "mouse" && settle()}
        className="group relative cursor-pointer"
      >
        stuff
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-[5px] overflow-hidden">
          <svg
            ref={waveRef}
            width={wavelength * periods}
            height={height}
            className="block text-muted-foreground transition-[color] duration-200 ease-[ease] group-hover:text-foreground"
          >
            <path
              d={wave}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.2}
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      {open &&
        details.split(" ").map((word, index) => (
          <Fragment key={index}>
            {" "}
            <span className="word-in inline-block" style={{ animationDelay: `${index * 25}ms` }}>
              {word}
            </span>
          </Fragment>
        ))}
    </>
  );
}
