export interface ThemeButtonStyle {
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
}
export interface ThemeButtonStyles {
    primary: {
        light: {
            regular: ThemeButtonStyle;
            inverse: ThemeButtonStyle;
        };
        dark: {
            regular: ThemeButtonStyle;
            inverse: ThemeButtonStyle;
        };
    };
    secondary: {
        regular: ThemeButtonStyle;
        inverse: ThemeButtonStyle;
    };
}
declare const buttonStyles: {
    primary: {
        light: {
            regular: {
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
        };
        dark: {
            regular: {
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
        };
    };
    secondary: {
        regular: {
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
    };
};
export default buttonStyles;
