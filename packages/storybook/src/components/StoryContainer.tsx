import React from 'react';
import styled, { css } from 'styled-components';
import { space, color } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

interface StoryContainerProps extends ThemeProps {
  inverse?: boolean;
}

const padding = ({ theme }: StoryContainerProps) => space({ p: [4], theme });

const backgroundColor = css`
  background-color: ${({ inverse, theme }: StoryContainerProps) =>
    inverse
      ? theme.colors.background.inverse
      : theme.colors.background.primary};
`;

const StoryContainer = styled.div<StoryContainerProps>`
  ${padding}
  ${backgroundColor}
  ${color}
`;

export default StoryContainer;

export const storyContainerDecorator = (story: any) => (
  <StoryContainer>{story()}</StoryContainer>
);
