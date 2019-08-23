import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from '@t3n/theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: ${({ theme }: ThemeProps) => theme.fonts.default};
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
