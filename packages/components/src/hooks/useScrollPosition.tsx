import { useEffect, useState } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

const isBrowser = typeof window !== `undefined`;

function getScrollPosition(): ScrollPosition {
  return isBrowser ? { x: window.scrollX, y: window.scrollY } : { x: 0, y: 0 };
}

function useScrollPosition(): ScrollPosition {
  const [position, setScrollPosition] =
    useState<ScrollPosition>(getScrollPosition());

  useEffect(() => {
    let requestRunning: number | null = null;
    function handleScroll() {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition());
          requestRunning = null;
        });
      }
    }

    if (isBrowser) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

    return () => {};
  }, []);

  return position;
}

export default useScrollPosition;
