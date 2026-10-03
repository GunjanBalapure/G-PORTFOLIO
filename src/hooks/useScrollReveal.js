import { useEffect, useRef } from 'react';

// This is a custom React hook that uses IntersectionObserver
// to detect when an element scrolls into the viewport.
export function useScrollReveal(threshold = 0.1) {
  // We create a reference to attach to our HTML element
  const elementRef = useRef(null);

  useEffect(() => {
    // The observer checks if the element is visible on the screen
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        // If the element crosses our threshold, add the 'reveal-visible' class
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          
          // Once revealed, we stop observing it so the animation only happens once
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Triggers slightly before the element fully enters
        threshold: threshold,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      // Start watching the element
      observer.observe(currentElement);
    }

    // Cleanup function when the component unmounts
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  // We return the ref so the component can attach it to a div or section
  return elementRef;
}
