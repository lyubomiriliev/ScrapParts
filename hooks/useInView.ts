import { useEffect, useState } from "react";

export const useInView = (ref: React.RefObject<HTMLElement>, options = {}) => {
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenInView) {
        setHasBeenInView(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, hasBeenInView]);

  return hasBeenInView;
};
