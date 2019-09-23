import styled, { keyframes } from 'styled-components';
import {
  SpaceProps,
  LayoutProps,
  layout,
  BorderRadiusProps,
  borderRadius,
  space
} from 'styled-system';
import { ThemeProps } from '@t3n/theme';

export interface PlaceholderProps
  extends SpaceProps,
    LayoutProps,
    BorderRadiusProps {}

const backgroundAnimation = ({ theme }: ThemeProps) => keyframes`
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

export const Placeholder = styled.div<PlaceholderProps>`
  animation: ${backgroundAnimation} 2s linear infinite;
  ${layout};
  ${space};
  ${borderRadius}
`;
