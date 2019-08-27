import { createGlobalStyle } from 'styled-components';
import { ThemeProps, theme, getColorForBackground } from '@t3n/theme';
import {
  ThemeBackgroundColor,
  ThemeTextColor
} from '@t3n/theme/src/theme/colors/colors';

interface GlobalStyleProps extends ThemeProps {
  backgroundColor: ThemeBackgroundColor;
  color?: ThemeTextColor;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html, body {
    font-family: ${({ theme }: ThemeProps) => theme.fonts.default};
    background: ${({ backgroundColor }) =>
      theme.colors.background[backgroundColor]};
    color: ${({ backgroundColor, color }) =>
      color || getColorForBackground(backgroundColor)};
    font-size: 16px;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
