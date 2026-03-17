import { createGlobalStyle } from 'styled-components';
import { variant } from 'styled-system';

import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';

type BackgroundColor = ThemeBackgroundColor | ThemeBackgroundColor[];

export interface GlobalStyleProps {
  variant?: BackgroundColor;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html, body {
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: 16px;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${variant({
      variants: {
        primary: {
          bg: 'background.primary',
          color: 'text.primary',
        },
        secondary: {
          bg: 'background.secondary',
          color: 'text.primary',
        },
        highlight: {
          bg: 'background.highlight',
          color: 'text.inverse',
        },
        inverse: {
          bg: 'background.inverse',
          color: 'text.inverse',
        },
      },
    })}
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
