import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps } from 'styled-system';

export interface BreakpointProps extends ColorProps, SpaceProps {
  width: string;
}

const Breakpoint = styled.div<BreakpointProps>`
  height: 2rem;
  width: ${({ width }) => width};
  display: flex;
  justify-content: center;
  align-items: center;
  ${color};
  ${space};
`;

Breakpoint.defaultProps = {
  bg: 'background.secondary',
  mb: 1,
};

export default Breakpoint;
