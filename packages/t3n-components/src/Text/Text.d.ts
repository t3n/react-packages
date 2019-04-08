import { ColorProps, SpaceProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/styles';
interface TextProps extends ColorProps, SpaceProps, WidthProps, ThemeProps {
    is: 'p' | 'span';
}
declare const Text: import("styled-components").StyledComponent<any, any, TextProps, string | number | symbol>;
export default Text;
