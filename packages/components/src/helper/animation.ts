import { css, keyframes } from 'styled-components';

import { ThemeProps } from '@t3n/theme';

const backgroundAnimationKeyframes = ({ theme }: ThemeProps) => keyframes`
  0% {
    background-color: ${theme.colors.shades.grey204}
  }

  50% {
    background-color: ${theme.colors.shades.grey244}
  }

  100% {
    background-color: ${theme.colors.shades.grey204}
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const backgroundAnimation = css`
  animation: ${backgroundAnimationKeyframes} 2s linear infinite;
`;
