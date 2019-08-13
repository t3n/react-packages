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
  WidthProps
} from 'styled-system';
import { ThemeBackgroundColors } from '@t3n/theme/src/theme/colors/colors';

const Wrapper = styled.div<SpaceProps | LayoutProps | ColorProps | WidthProps>`
  ${space}
  ${layout}
  ${color}
  ${size}
`;

interface CardSplitContentProps {
  bgColor?: ThemeBackgroundColors;
}

const CardSplitContent: React.FC<CardSplitContentProps> = ({
  children,
  bgColor
}) => {
  const backgroundColor = bgColor
    ? `background.${bgColor}`
    : 'background.primary';

  return (
    <Wrapper width={[1, 1, 1 / 2]} p={3} backgroundColor={backgroundColor}>
      {children}
    </Wrapper>
  );
};

export default CardSplitContent;
