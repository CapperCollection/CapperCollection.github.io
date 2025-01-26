import { useEffect, useRef } from "react";

const debounce = (fn: () => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, delay);
  };
};

export const useObserver = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const callbackRef = useRef<() => void>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const id = entry.target.id;
          history.pushState(null, "", `#${id}`);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    observerRef.current = observer;

    callbackRef.current = debounce(() => {
      document
        .querySelectorAll("#events .event")
        .forEach((event) => observerRef?.current?.observe(event));
    }, 1000);

    window.addEventListener("scroll", callbackRef.current);
    return () => {
      if (callbackRef.current) {
        window.removeEventListener("scroll", callbackRef.current);
      }
      observer.disconnect();
    };
  }, []);
};
