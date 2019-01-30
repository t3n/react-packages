import styled from 'styled-components';
import { space } from 'styled-system';

export default styled.div`
  ${({ theme }) => space({ p: [4], theme })}
`;
