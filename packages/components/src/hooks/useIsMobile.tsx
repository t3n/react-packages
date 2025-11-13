import { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { Theme } from '@t3n/theme';

// try to avoid using this hook for everything that happens serverside
const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(true);
  const [fontSize, setFontSize] = useState(16);

  const theme = useContext(ThemeContext) as Theme;

  const mobileBreakpoint = parseInt(theme.breakpoints[1], 10) * fontSize;

  const testIsMobile = useCallback(() => {
    if (window.matchMedia(`(max-width: ${mobileBreakpoint}px)`).matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [mobileBreakpoint]);

  useEffect(() => {
    setFontSize(
      parseInt(
        window
          .getComputedStyle(window.document.body)
          .getPropertyValue('font-size'),
        10,
      ),
    );
  }, []);

  useEffect(() => {
    testIsMobile();
    window.addEventListener('resize', testIsMobile);

    return () => {
      window.removeEventListener('resize', testIsMobile);
    };
  }, [testIsMobile]);

  return isMobile;
};

export default useIsMobile;
