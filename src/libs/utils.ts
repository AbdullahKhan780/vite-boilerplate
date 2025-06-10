import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import gsap from "gsap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Configuration accepted by `horizontalLoop`.
 * Every property is optional and mirrors the JS version.
 */
export interface HorizontalLoopConfig {
  /** How many times to repeat the timeline (GSAP’s `repeat` option). */
  repeat?: number;
  /** Start the timeline in a paused state. */
  paused?: boolean;
  /** Pixels-per-second playback speed multiplier (default = 1). */
  speed?: number;
  /**
   * Snap-to behaviour:
   *  • `false` → no snapping
   *  • `number` → snap to that increment
   *  • custom function → fully custom snap logic
   */
  snap?: number | ((value: number) => number) | false;
  /** Extra padding added to the far right of the track (in px). */
  paddingRight?: number;
  /** Start with the timeline playing in reverse. */
  reversed?: boolean;
}

/**
 * Timeline returned by `horizontalLoop` – it’s a normal GSAP timeline
 * augmented with some convenience helpers (`next`, `previous`, …).
 */
export interface HorizontalLoopTimeline extends gsap.core.Timeline {
  next(vars?: gsap.TweenVars): gsap.core.Tween;
  previous(vars?: gsap.TweenVars): gsap.core.Tween;
  current(): number;
  toIndex(index: number, vars?: gsap.TweenVars): gsap.core.Tween;
  /** Playhead times (in seconds) that correspond to each element’s “home”. */
  times: number[];
}

/**
 * Creates a seamlessly looping, swipeable horizontal carousel.
 * Ported from the GSAP helper at https://codepen.io/GreenSock/pen/rNmQPpa
 *
 * @param items   A selector, element, or collection of elements to loop.
 * @param config  Optional fine-tuning options (see `HorizontalLoopConfig`).
 *
 * @returns A GSAP timeline extended with carousel helpers.
 */
export function horizontalLoop(
  items: gsap.DOMTarget | gsap.DOMTarget[],
  config: HorizontalLoopConfig = {}
): HorizontalLoopTimeline {
  const targets = gsap.utils.toArray<HTMLElement>(items); // solid HTMLElement[]
  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    // jump far ahead when we reach the start while reversing, so the
    // playhead never actually stops (keeps things perfectly fluid)
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100);
    },
  }) as HorizontalLoopTimeline;

  // ------------------------------------------------------------------
  // Pre-calculate measurements & percentages
  // ------------------------------------------------------------------
  const length = targets.length;
  const startX = targets[0].offsetLeft;
  const times: number[] = []; // playhead positions for each slide
  const widths: number[] = []; // pixel width of each slide
  const xPercents: number[] = []; // each slide's "home" xPercent
  let curIndex = 0;

  // speed in px/s (default 100 px/s = 1 * 100)
  const pixelsPerSecond = (config.speed ?? 1) * 100;

  const snap =
    config.snap === false
      ? (v: number) => v
      : typeof config.snap === "function"
      ? config.snap
      : gsap.utils.snap(config.snap ?? 1);

  // populate xPercent & width lookup tables
  gsap.set(targets, {
    xPercent: (_i, el) => {
      const widthValue = gsap.getProperty(el, "width", "px");
      const w = Number.parseFloat(
        typeof widthValue === "number" ? widthValue.toString() : widthValue
      );
      widths[_i] = w;
      xPercents[_i] = snap(
        (Number.parseFloat(String(gsap.getProperty(el, "x", "px"))) / w) * 100 +
          Number(gsap.getProperty(el, "xPercent"))
      );
      return xPercents[_i];
    },
  });
  gsap.set(targets, { x: 0 });

  const totalWidth =
    targets[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    targets[length - 1].offsetWidth *
      Number(gsap.getProperty(targets[length - 1], "scaleX")) +
    (config.paddingRight ?? 0);

  // ------------------------------------------------------------------
  // Build the master timeline
  // ------------------------------------------------------------------
  for (let i = 0; i < length; i++) {
    const item = targets[i];
    const curX = (xPercents[i] / 100) * widths[i];
    const distanceToStart = item.offsetLeft + curX - startX;
    const scaleX = Number(gsap.getProperty(item, "scaleX"));
    const distanceToLoop =
      distanceToStart + widths[i] * scaleX;

    // Slide from its “home” to just past the left edge…
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      // …then wrap around (jump to far right) and slide back to “home”.
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add(`label ${i}`, distanceToStart / pixelsPerSecond);

    times[i] = distanceToStart / pixelsPerSecond;
  }

  // ------------------------------------------------------------------
  // Helper that tweens to the slide at `index`
  // ------------------------------------------------------------------
  function toIndex(index: number, vars: gsap.TweenVars = {}): gsap.core.Tween {
    // always choose the shorter direction (for endless feel)
    let targetIndex = index;
    if (Math.abs(targetIndex - curIndex) > length / 2) {
      targetIndex += targetIndex > curIndex ? -length : length;
    }

    const newIndex = gsap.utils.wrap(0, length, targetIndex);
    let time = times[newIndex];

    // If we wrapped around the timeline’s end, keep playhead moving
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }

    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  // ------------------------------------------------------------------
  // Public helpers – added directly onto the timeline
  // ------------------------------------------------------------------
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;

  // prerender for instant responsiveness
  tl.progress(1, true).progress(0, true);

  if (config.reversed) {
    tl.vars.onReverseComplete?.();
    tl.reverse();
  }

  return tl;
}
