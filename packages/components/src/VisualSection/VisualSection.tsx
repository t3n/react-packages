import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Content from '../Content';
import backgroundSVGData from './backgroundSVGData';

export type VisualSectionVariants = 'primary' | 'highlight';

export interface VisualSectionProps {
  variant: VisualSectionVariants;
  innerGap?: SpaceProps['py'];
  wide?: boolean;
  children?: ReactNode;
}

const VisualSectionOuter = styled.div<VisualSectionProps>`
  background-image: ${`url("data:image/svg+xml;base64,${backgroundSVGData}")`};
  background-size: 2000px;
  background-position: top left;
  background-color: ${({ variant, theme }) =>
    variant ? theme.colors.background[variant] : 'white'};
  ${({ innerGap, theme }: VisualSectionProps & ThemeProps) =>
    space({ py: innerGap, theme })};

  color: ${({ variant, theme }: VisualSectionProps & ThemeProps) =>
    variant && variant === 'highlight'
      ? theme.colors.shades.white
      : theme.colors.text.primary};
`;

const VisualSection: React.FC<VisualSectionProps> = ({
  variant,
  innerGap = 6,
  wide = true,
  children,
}) => (
  <VisualSectionOuter variant={variant} innerGap={innerGap}>
    <Content wide={wide}>{children}</Content>
  </VisualSectionOuter>
);

VisualSection.displayName = 'VisualSection';

export default VisualSection;
