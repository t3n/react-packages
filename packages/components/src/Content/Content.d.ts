import { PaddingProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export interface ContentProps extends ThemeProps, PaddingProps {
    wide?: boolean;
    small?: boolean;
}
declare const Content: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>, never>, ContentProps>> & string;
export default Content;
