import { createGlobalStyle } from 'styled-components';
import {
  ThemeShadeColor,
  ThemeBrandColor,
} from '@t3n/theme/src/theme/colors/colors';
import { ThemeProps } from '@t3n/theme';

export const NProgressBarGlobalStyle = createGlobalStyle<
  { barColor?: ThemeShadeColor | ThemeBrandColor } & ThemeProps
>`
  #nprogress {
    pointer-events: none;
  }
  #nprogress .bar {
    background-color: ${({ theme, barColor }) =>
      barColor === 'red'
        ? theme.colors.brand[barColor]
        : theme.colors.shades[barColor || 'grey244']};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }
  #nprogress .spinner {
    display: 'none';
  }
`;
