import React from 'react';
import styled from 'styled-components';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  size,
  WidthProps,
} from 'styled-system';
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';

const Wrapper = styled.div<SpaceProps | LayoutProps | ColorProps | WidthProps>`
  ${space}
  ${layout}
  ${color}
  ${size}
`;

interface CardSplitContentProps {
  variant?: ThemeBackgroundColor;
}

export const CardSplitContent: React.FC<CardSplitContentProps> = ({
  children,
  variant,
}) => {
  const backgroundColor = variant
    ? `background.${variant}`
    : 'background.primary';

  return (
    <Wrapper width={[1, 1, 1 / 2]} p={4} backgroundColor={backgroundColor}>
      {children}
    </Wrapper>
  );
};
