import { useEffect, useLayoutEffect } from 'react';

function useBodyLock(isLocked: boolean) {
  const canUseDOM = typeof window !== 'undefined';
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = isLocked ? 'hidden' : originalStyle;
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
}

export default useBodyLock;
