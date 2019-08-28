export interface ThemeLinkStyle {
    default: string;
    hover: string;
    focus: string;
}
export interface ThemeLinkStyles {
    primary: ThemeLinkStyle;
    secondary: ThemeLinkStyle;
    highlight: ThemeLinkStyle;
    inverse: ThemeLinkStyle;
}
declare const linkStyles: {
    primary: {
        default: string;
        hover: string;
        focus: string;
    };
    secondary: {
        default: string;
        hover: string;
        focus: string;
    };
    highlight: {
        default: string;
        hover: string;
        focus: string;
    };
    inverse: {
        default: string;
        hover: string;
        focus: string;
    };
};
export default linkStyles;
