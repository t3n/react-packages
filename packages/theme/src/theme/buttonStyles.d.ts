export interface ThemeButtonColorSet {
    color: string;
    bg: string;
    borderColor: string;
}
export interface ThemeButtonStyle {
    default: ThemeButtonColorSet;
    hover: ThemeButtonColorSet;
}
export interface ThemeButtonStyles {
    color: {
        default: ThemeButtonStyle;
        inverse: ThemeButtonStyle;
        highlight: ThemeButtonStyle;
        signal: ThemeButtonStyle;
    };
}
declare const buttonStyles: {
    color: {
        default: {
            default: {
                color: string;
                bg: string;
                borderColor: string;
            };
            hover: {
                color: string;
                bg: string;
                borderColor: string;
            };
        };
        inverse: {
            default: {
                color: string;
                bg: string;
                borderColor: string;
            };
            hover: {
                color: string;
                bg: string;
                borderColor: string;
            };
        };
        highlight: {
            default: {
                color: string;
                bg: string;
                borderColor: string;
            };
            hover: {
                color: string;
                bg: string;
                borderColor: string;
            };
        };
        signal: {
            default: {
                color: string;
                bg: string;
                borderColor: string;
            };
            hover: {
                color: string;
                bg: string;
                borderColor: string;
            };
        };
    };
};
export default buttonStyles;
