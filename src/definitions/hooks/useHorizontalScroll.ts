import { useRef, useEffect, useCallback } from "react";

import { useSmoothScroll } from "./useSmoothScroll";
import useWindowSize from "./useWindowSize";

/**
 * A hook that can be used to control horizontal scroll position of an element
 * @param scrollDuration How long it takes to scroll to the next click (transition)
 * @returns A ref to pass to the container
 */
type T_UseHorizontalScrollArg = {
  scrollDuration?: number;
  maxWidth?: number;
  disableWidth?: number;
};
export function useHorizontalScroll<T extends HTMLElement = HTMLElement>(
  arg?: T_UseHorizontalScrollArg,
) {
  const { scrollDuration = 200, maxWidth = 1440, disableWidth = 0 } = arg || {};
  const elRef = useRef<T | null>(null);
  const {
    width,
    height, // eslint-disable-line @typescript-eslint/no-unused-vars
  } = useWindowSize();
  const [scrollRef, scrollTo] = useSmoothScroll();
  const setRef = useCallback((el: T | null) => {
    scrollRef(el);
    elRef.current = el;
  }, []);

  useEffect(() => {
    const el = elRef.current;
    // console.log("scrollDuration", scrollDuration, "maxWidth", maxWidth);
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY == 0) return;
      if (el && width && width < maxWidth) {
        if (disableWidth && width <= disableWidth) return;
        e.preventDefault();
        scrollTo({ addLeft: e.deltaY }, scrollDuration);
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [width]);
  return setRef;
}
