import styled from 'styled-components';
import { space, color } from 'styled-system';

export default styled.div`
  min-height: 100vh;
  ${({ theme }) => space({ p: [4], theme })}
  ${color}
`;
