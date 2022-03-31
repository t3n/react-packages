import { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { Theme } from '@t3n/theme';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);
  const [initialFontSize, setIntitialFontSize] = useState('16');

  const theme: Theme = useContext(ThemeContext);
  const fontSize = initialFontSize;

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
    setIntitialFontSize(
      window
        .getComputedStyle(window.document.body)
        .getPropertyValue('font-size')
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
