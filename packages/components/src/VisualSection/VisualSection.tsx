import React, { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Content from '../Content';
import backgroundSVGData from './backgroundSVGData';

export type VisualSectionVariants = 'primary' | 'highlight' | 'inverse';

export interface VisualSectionProps extends PropsWithChildren {
  variant: VisualSectionVariants;
  innerGap?: SpaceProps['py'];
  wide?: boolean;
}

const VisualSectionOuter = styled.div<VisualSectionProps & ThemeProps>`
  background-image: ${`url("data:image/svg+xml;base64,${backgroundSVGData}")`};
  background-size: 2000px;
  background-position: top left;
  background-color: ${({ variant, theme }) =>
    variant ? theme.colors.background[variant] : 'white'};
  ${({ innerGap, theme }) => space({ py: innerGap, theme })};

  color: ${({ variant, theme }) =>
    variant && (variant === 'highlight' || variant === 'inverse')
      ? theme.colors.shades.white
      : theme.colors.text.primary};
`;

const VisualSection = ({
  variant,
  innerGap = 6,
  wide = true,
  children,
}: VisualSectionProps) => (
  <VisualSectionOuter variant={variant} innerGap={innerGap}>
    <Content wide={wide}>{children}</Content>
  </VisualSectionOuter>
);

VisualSection.displayName = 'VisualSection';

export default VisualSection;
