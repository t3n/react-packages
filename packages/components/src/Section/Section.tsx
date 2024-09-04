import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Content from '../Content';

export type SectionVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';

export interface SectionProps {
  variant?: SectionVariants;
  wide?: boolean;
  small?: boolean;
  innerGap?: SpaceProps['py'];
  children?: ReactNode;
}

const SectionOuter = styled.div<SectionProps>`
  background-color: ${({
    variant = 'primary',
    theme,
  }: SectionProps & ThemeProps) => theme.colors.background[variant]};
  color: ${({ variant = 'primary', theme }: SectionProps & ThemeProps) => {
    switch (variant) {
      case 'inverse':
      case 'highlight':
        return theme.colors.text.inverse;
      case 'secondary':
      default:
        return theme.colors.text.primary;
    }
  }};
  ${({ innerGap, theme }: SectionProps & ThemeProps) =>
    space({ py: innerGap, theme })}
`;

const Section: React.FC<SectionProps> = ({
  variant,
  wide,
  small,
  children,
  innerGap = 6,
}) => (
  <SectionOuter variant={variant} innerGap={innerGap}>
    <Content wide={wide} small={small}>
      {children}
    </Content>
  </SectionOuter>
);

Section.displayName = 'Section';

export default Section;
