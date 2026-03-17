import { BackgroundColorProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export interface RatioProps extends ThemeProps, BackgroundColorProps {
    ratio?: 'auto' | number;
}
declare const Ratio: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>, never>, RatioProps>> & string;
export default Ratio;
