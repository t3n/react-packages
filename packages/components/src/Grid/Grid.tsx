import styled from 'styled-components';
import {
  space,
  justifyContent,
  alignItems,
  JustifyContentProps,
  SpaceProps,
  AlignItemsProps,
  HeightProps,
  layout
} from 'styled-system';

import { ThemeProps } from '@t3n/theme';
import { GridItem } from '../GridItem';

export interface GridProps
  extends JustifyContentProps,
    AlignItemsProps,
    HeightProps,
    SpaceProps {
  vertical?: boolean;
  reverse?: boolean;
  wide?: boolean;
  noGap?: boolean;
}

const flexDirection = ({ vertical, reverse }: GridProps) =>
  `flex-direction: ${vertical ? 'column' : 'row'}${reverse ? '-reverse' : ''};`;

const indent = ({ noGap, wide, theme }: GridProps & ThemeProps) =>
  noGap
    ? space({ mx: 0 })
    : wide
    ? space({
        mx: [0, -3],
        theme
      })
    : space({
        mx: [0, -1],
        theme
      });

const itemGap = ({ noGap, wide, theme }: GridProps & ThemeProps): string =>
  noGap ? space({ px: 0, theme }) : wide ? space({ px: 3, theme }) : '';

export const Grid = styled.div<GridProps>`
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

Grid.defaultProps = {
  vertical: false,
  reverse: false,
  wide: false,
  noGap: false,
  justifyContent: 'flex-start'
};
