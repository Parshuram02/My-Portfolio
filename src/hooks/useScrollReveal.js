import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref to attach to any element.
 * `isVisible` becomes true once the element enters the viewport.
 */
export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire only once
        }
      },
      { threshold: options.threshold ?? 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};
