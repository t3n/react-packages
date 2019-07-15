import styled from 'styled-components';
import {
  space,
  justifyContent,
  alignItems,
  JustifyContentProps,
  SpaceProps
} from 'styled-system';
import { stripUnit } from 'polished';

import { ThemeProps } from '@t3n/theme';
import { GridItem } from '../GridItem';

interface GridProps extends ThemeProps, JustifyContentProps, SpaceProps {
  vertical?: boolean;
  reverse?: boolean;
  wide?: boolean;
  noGap?: boolean;
}

const flexDirection = ({ vertical, reverse }: GridProps) =>
  `flex-direction: ${vertical ? 'column' : 'row'}${reverse ? '-reverse' : ''};`;

const indent = ({ noGap, wide, theme }: GridProps) =>
  noGap
    ? space({ mx: 0 })
    : wide
    ? space({
        mx: [0, `${Number(stripUnit(theme.space[3])) * -1.0}rem`],
        theme
      })
    : space({
        mx: [0, `${Number(stripUnit(theme.space[1])) * -1.0}rem`],
        theme
      });

const itemGap = ({ noGap, wide, theme }: GridProps): string =>
  noGap ? space({ px: 0 }) : wide ? space({ px: theme.space[3], theme }) : '';

const Grid = styled.div<GridProps>`
  display: flex;
  flex-wrap: wrap;
  ${flexDirection}
  ${justifyContent}
  ${alignItems}
  ${indent}
  ${space}

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

export default Grid;
