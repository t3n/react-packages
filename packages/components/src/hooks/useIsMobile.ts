import { use, useCallback, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { Theme } from '@t3n/theme';

// TODO: Fix ESLint set state in use effect issues

// try to avoid using this hook for everything that happens serverside
const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(true);
  const [fontSize, setFontSize] = useState(16);

  const theme = use(ThemeContext) as Theme;

  const mobileBreakpoint = parseInt(theme.breakpoints[1], 10) * fontSize;

  const testIsMobile = useCallback(() => {
    if (window.matchMedia(`(max-width: ${mobileBreakpoint}px)`).matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [mobileBreakpoint]);

  if (typeof window !== 'undefined') {
    setFontSize(
      parseInt(
        window
          .getComputedStyle(window.document.body)
          .getPropertyValue('font-size'),
        10,
      ),
    );
    testIsMobile();
  }

  useEffect(() => {
    window.addEventListener('resize', testIsMobile);

    return () => {
      window.removeEventListener('resize', testIsMobile);
    };
  }, [testIsMobile]);

  return isMobile;
};

export default useIsMobile;
