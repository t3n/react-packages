import styled from 'styled-components';
import { space, justifyContent, alignItems } from 'styled-system';
import { stripUnit } from 'polished';
import PropTypes from 'prop-types';
import Item from './Item';

const flexDirection = ({ vertical, reverse }) =>
  `flex-direction: ${vertical ? 'column' : 'row'}${reverse ? '-reverse' : ''};`;

const indent = ({ noGap, wide, theme }) =>
  noGap
    ? space({ mx: 0 })
    : wide
    ? space({ mx: [0, stripUnit(theme.space[3]) * -1.0 + 'rem'], theme })
    : space({ mx: [0, stripUnit(theme.space[1]) * -1.0 + 'rem'], theme });

const itemGap = ({ noGap, wide, theme }) =>
  noGap ? space({ px: 0 }) : wide ? space({ px: theme.space[3], theme }) : '';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flexDirection}
  ${justifyContent}
  ${alignItems}
  ${indent}
  ${space}

  ${Item} {
    ${itemGap}
  }
`;

Grid.displayName = 'Grid';

Grid.propTypes = {
  vertical: PropTypes.bool,
  reverse: PropTypes.bool,
  wide: PropTypes.bool,
  noGap: PropTypes.bool,
  ...justifyContent.propTypes
};

Grid.defaultProps = {
  vertical: false,
  reverse: false,
  wide: false,
  noGap: false,
  justifyContent: 'flex-start'
};

export default Grid;
