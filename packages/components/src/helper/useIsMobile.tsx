import { Theme } from '@t3n/theme';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  const theme: Theme = useContext(ThemeContext);
  const fontSize = window
    .getComputedStyle(window.document.body)
    .getPropertyValue('font-size');
  const mobileBreakpoint =
    parseInt(theme.breakpoints[1], 10) * parseInt(fontSize, 10);

  const testIsMobile = useCallback(() => {
    if (window.matchMedia(`(max-width: ${mobileBreakpoint}px)`).matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [mobileBreakpoint]);

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
