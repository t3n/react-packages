import { TextColorProps } from 'styled-system';
export interface LinkStateStyle extends TextColorProps {
    underlineColor: string;
}
export interface LinkStyle {
    default: LinkStateStyle;
    hover: LinkStateStyle;
    focus: LinkStateStyle;
    visited: LinkStateStyle;
}
export interface ThemeLinkStyles {
    primary: LinkStyle;
    secondary: LinkStyle;
    inverse: LinkStyle;
    highlight: LinkStyle;
}
declare const linkStyles: {
    primary: LinkStyle;
    secondary: LinkStyle;
    highlight: LinkStyle;
    inverse: LinkStyle;
};
export default linkStyles;
