import { useEffect, useState } from "react";

/**
 * Counts a number from 0 to `end` over `duration` ms.
 * Starts when `trigger` becomes true.
 */
export const useCountUp = (end, duration = 1800, trigger = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, end, duration]);

  return count;
};
