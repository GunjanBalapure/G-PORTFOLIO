import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const revealRef = useRef(null);

  useEffect(() => {
    // We use IntersectionObserver to detect when the element enters the viewport.
    // This is vastly more performant than running a function on every single scroll event.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the 'is-visible' class to trigger our CSS transitions
            entry.target.classList.add('is-visible');
            // We unobserve so the animation only happens once, keeping it clean and performant
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px' // Triggers slightly before it fully enters
      }
    );

    if (revealRef.current) {
      observer.observe(revealRef.current);
    }

    return () => {
      if (revealRef.current) observer.unobserve(revealRef.current);
    };
  }, [threshold]);

  return revealRef;
}
