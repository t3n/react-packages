import styled from 'styled-components';
import { space } from 'styled-system';
import { stripUnit } from 'polished';
import PropTypes from 'prop-types';

const flexDirection = ({ column, reverse }) =>
  `flex-direction: ${column ? 'column' : 'row'}${reverse ? '-reverse' : ''};`;

const indent = ({ theme }) =>
  space({ mx: [0, stripUnit(theme.space[5]) * -0.5 + 'rem'], theme });

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${flexDirection}
  ${indent}
`;

Grid.propTypes = {
  column: PropTypes.bool,
  reverse: PropTypes.bool
};

Grid.defaultProps = {
  column: false,
  reverse: false
};

export default Grid;
