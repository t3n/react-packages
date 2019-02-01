import styled from 'styled-components';
import { space, justifyContent, alignItems } from 'styled-system';
import { stripUnit } from 'polished';
import PropTypes from 'prop-types';
import Item from './Item';

const flexDirection = ({ vertical, reverse }) =>
  `flex-direction: ${vertical ? 'column' : 'row'}${reverse ? '-reverse' : ''};`;

const indent = ({ noGap, narrow, theme }) =>
  noGap
    ? space({ mx: 0 })
    : narrow
    ? space({ mx: [0, stripUnit(theme.space[4]) * -0.5 + 'rem'], theme })
    : space({ mx: [0, stripUnit(theme.space[5]) * -0.5 + 'rem'], theme });

const itemGap = ({ noGap, narrow, theme }) =>
  noGap ? space({ px: 0 }) : narrow ? space({ px: theme.space[4], theme }) : '';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flexDirection}
  ${justifyContent}
  ${alignItems}
  ${indent}

  ${Item} {
    ${itemGap}
  }
`;

Grid.displayName = 'Grid';

Grid.propTypes = {
  vertical: PropTypes.bool,
  reverse: PropTypes.bool,
  narrow: PropTypes.bool,
  noGap: PropTypes.bool,
  ...justifyContent.propTypes
};

Grid.defaultProps = {
  vertical: false,
  reverse: false,
  narrow: false,
  noGap: false,
  justifyContent: 'flex-start'
};

export default Grid;
