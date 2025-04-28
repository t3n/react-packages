import { PaddingProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export interface ContentProps extends ThemeProps, PaddingProps {
    wide?: boolean;
    small?: boolean;
}
declare const Content: import("styled-components").StyledComponent<"div", any, Partial<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLDivElement> | null | undefined;
} & ContentProps> & {
    [others: string]: any;
} & ContentProps, string | number>;
export default Content;
