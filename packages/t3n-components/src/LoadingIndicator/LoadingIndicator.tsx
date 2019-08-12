import styled, { keyframes } from 'styled-components';
import {
  SpaceProps,
  LayoutProps,
  layout,
  BorderRadiusProps,
  borderRadius
} from 'styled-system';
import { ThemeProps } from '@t3n/theme';
import { space } from '@t3n/theme/src/theme';

const backgroundAnimation = ({ theme }: ThemeProps) => keyframes`
  0% {
    background-color: ${theme.colors.shades.grey232}
  }

  50% {
    background-color: ${theme.colors.shades.grey244}
  }

  100% {
    background-color: ${theme.colors.shades.grey232}
  }
`;

const LoadingIndicator = styled.div<
  SpaceProps | LayoutProps | BorderRadiusProps
>`
  animation: ${backgroundAnimation} 2s linear infinite;
  ${layout};
  ${space};
  ${borderRadius}
`;

export default LoadingIndicator;
