import { SpaceProps, WidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/styles';
interface ItemProps extends SpaceProps, WidthProps, ThemeProps {
}
declare const Item: import("styled-components").StyledComponent<"div", any, ItemProps, never>;
export default Item;
