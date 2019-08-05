import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeProps } from '@t3n/theme';
import { space, SpaceProps } from 'styled-system';
import Content from '../Content/Content';

export type SectionVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';

interface SectionProps {
  variant?: SectionVariants;
  wide?: boolean;
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

const Section = ({ variant, wide, children, innerGap }: SectionProps) => (
  <SectionOuter variant={variant} innerGap={innerGap}>
    <Content wide={wide}>{children}</Content>
  </SectionOuter>
);

Section.displayName = 'Section';

Section.defaultProps = {
  innerGap: 5
};

export default Section;
