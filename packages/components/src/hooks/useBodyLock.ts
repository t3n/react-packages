import { useLayoutEffect } from 'react';

function useBodyLock(isLocked: boolean) {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = isLocked ? 'hidden' : originalStyle;
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
}

export default useBodyLock;
