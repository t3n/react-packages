import { styled } from 'styled-components';
import {
  alignItems,
  AlignItemsProps,
  HeightProps,
  justifyContent,
  JustifyContentProps,
  layout,
  space,
  SpaceProps,
} from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import GridItem from '../GridItem';

export interface GridProps
  extends JustifyContentProps, AlignItemsProps, HeightProps, SpaceProps {
  vertical?: boolean;
  reverse?: boolean;
  wide?: boolean;
  noGap?: boolean;
}

const flexDirection = ({ vertical, reverse }: GridProps) =>
  `flex-direction: ${vertical ? 'column' : 'row'}${reverse ? '-reverse' : ''};`;

const indent = ({ noGap, wide, theme }: GridProps & ThemeProps) => {
  if (noGap) return space({ mx: 0 });

  if (wide)
    return space({
      mx: [0, -4],
      theme,
    });

  return space({
    mx: [0, -2],
    theme,
  });
};

const itemGap = ({ noGap, wide, theme }: GridProps & ThemeProps): string => {
  if (noGap) return space({ px: 0, theme });

  if (wide) return space({ px: 4, theme });

  return '';
};

const Grid = styled.div.attrs<GridProps>((props: GridProps) => ({
  vertical: false,
  reverse: false,
  wide: false,
  noGap: false,
  justifyContent: 'flex-start',
  ...props,
}))`
  display: flex;
  flex-wrap: wrap;
  ${flexDirection}
  ${justifyContent}
  ${alignItems}
  ${indent}
  ${space}
  ${layout}

  ${GridItem} {
    ${itemGap}
  }
`;

Grid.displayName = 'Grid';

export default Grid;
