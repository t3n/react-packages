import { ColorProps, SpaceProps, WidthProps } from 'styled-system';
interface TextProps extends ColorProps, SpaceProps, WidthProps, ThemeProps {
    is: 'p' | 'span';
}
declare const Text: import("styled-components").StyledComponent<any, any, TextProps, string | number | symbol>;
export default Text;
