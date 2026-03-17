import { useEffect, useRef, useState } from 'react';

interface InViewportState {
  inViewport: boolean;
  wasInViewport: boolean;
}

const useInViewport: <E extends HTMLElement>(
  element: E | null,
) => InViewportState = (element) => {
  const [inViewport, setInViewport] = useState(false);
  const [wasInViewport, setWasInViewport] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const testInViewport: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;

        if (isIntersecting && !wasInViewport) setWasInViewport(true);

        setInViewport(isIntersecting);
      });
    };

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(testInViewport, {});
    }

    if (element) observerRef.current.observe(element);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [element, wasInViewport]);

  return {
    inViewport,
    wasInViewport,
  };
};

export default useInViewport;
