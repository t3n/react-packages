import React from 'react';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  size,
  space,
  SpaceProps,
  WidthProps,
} from 'styled-system';

import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';

export interface CardSplitContentProps {
  variant?: ThemeBackgroundColor;
}

const Wrapper = styled.div<SpaceProps | LayoutProps | ColorProps | WidthProps>`
  ${space}
  ${layout}
  ${color}
  ${size}
`;

const CardSplitContent: React.FC<CardSplitContentProps> = ({
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

export default CardSplitContent;
