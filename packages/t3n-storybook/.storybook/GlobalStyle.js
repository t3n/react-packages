import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: 16px;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  .storybook-readme-story > div {
    margin: 0 !important;
  }
`;

export default GlobalStyle;
