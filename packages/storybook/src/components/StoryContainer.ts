import { css, styled } from 'styled-components';
import { color, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

export interface StoryContainerProps extends ThemeProps {
  secondary?: boolean;
}

const padding = ({ theme }: StoryContainerProps) => space({ p: [4], theme });

const backgroundColor = css<StoryContainerProps>`
  background-color: ${({ secondary, theme }) =>
    secondary
      ? theme.colors.background.secondary
      : theme.colors.background.primary};
`;

const StoryContainer = styled.div<StoryContainerProps>`
  ${padding}
  ${backgroundColor}
  ${color}
`;

export default StoryContainer;
