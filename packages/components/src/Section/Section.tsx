import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeProps } from '@t3n/theme';
import { space, SpaceProps } from 'styled-system';
import { Content } from '../Content/Content';

export type SectionVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';

export interface SectionProps {
  variant?: SectionVariants;
  wide?: boolean;
  small?: boolean;
  children: ReactNode;
  innerGap?: SpaceProps['py'];
}

const SectionOuter = styled.div<SectionProps>`
  background-color: ${({
    variant = 'primary',
    theme
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

export const Section = ({
  variant,
  wide,
  small,
  children,
  innerGap
}: SectionProps) => (
  <SectionOuter variant={variant} innerGap={innerGap}>
    <Content wide={wide} small={small}>
      {children}
    </Content>
  </SectionOuter>
);

Section.displayName = 'Section';

Section.defaultProps = {
  innerGap: 6
};
