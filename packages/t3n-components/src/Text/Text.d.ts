import { ColorProps, SpaceProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/styles';
interface TextProps extends ColorProps, SpaceProps, WidthProps, ThemeProps {
    as?: 'p' | 'span';
}
declare const Text: import("styled-components").StyledComponent<"div", any, TextProps, never>;
export default Text;
