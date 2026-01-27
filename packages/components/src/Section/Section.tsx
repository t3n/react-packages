import React, { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Content from '../Content';

export type SectionVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';

export interface SectionProps extends PropsWithChildren {
  variant?: SectionVariants;
  wide?: boolean;
  small?: boolean;
  innerGap?: SpaceProps['py'];
}

const SectionOuter = styled.div<SectionProps & ThemeProps>`
  background-color: ${({ variant = 'primary', theme }) =>
    theme.colors.background[variant]};
  color: ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'inverse':
      case 'highlight':
        return theme.colors.text.inverse;
      case 'secondary':
      default:
        return theme.colors.text.primary;
    }
  }};
  ${({ innerGap, theme }) => space({ py: innerGap, theme })}
`;

const Section = ({
  variant,
  wide,
  small,
  children,
  innerGap = 6,
}: SectionProps) => (
  <SectionOuter variant={variant} innerGap={innerGap}>
    <Content wide={wide} small={small}>
      {children}
    </Content>
  </SectionOuter>
);

Section.displayName = 'Section';

export default Section;
