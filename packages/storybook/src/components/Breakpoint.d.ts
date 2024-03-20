import { ColorProps, SpaceProps } from 'styled-system';
export interface BreakpointProps extends ColorProps, SpaceProps {
    width: string;
}
declare const Breakpoint: import("styled-components").StyledComponent<"div", any, BreakpointProps, never>;
export default Breakpoint;
