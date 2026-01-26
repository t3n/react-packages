import { BorderRadiusProps, LayoutProps, SpaceProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export interface PlaceholderProps extends SpaceProps, LayoutProps, BorderRadiusProps {
}
declare const Placeholder: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PlaceholderProps & ThemeProps>> & string;
export default Placeholder;
