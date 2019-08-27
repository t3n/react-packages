import { createGlobalStyle } from 'styled-components';
import { ThemeProps, getColorForBackground } from '@t3n/theme';
import { ThemeBackgroundColor, ThemeTextColor } from '@t3n/theme/src/theme/colors/colors';

interface GlobalStyleProps extends ThemeProps {
  backgroundColor?: ThemeBackgroundColor;
  bg?: ThemeBackgroundColor;
  color?: ThemeTextColor;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html, body {
    font-family: ${({ theme }) => theme.fonts.default};
    background: ${({ backgroundColor = 'primary', bg = 'primary', theme }) =>
      theme.colors.background[(backgroundColor || bg)]};
    color: ${({ backgroundColor = 'primary', bg = 'primary', color }) =>
      color || getColorForBackground(backgroundColor || bg)};
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
