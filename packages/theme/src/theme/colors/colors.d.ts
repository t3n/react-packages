export declare const red = "#f9423a";
export declare const black = "#000";
export declare const grey42 = "#2a2a2a";
export declare const grey155 = "#9b9b9b";
export declare const grey232 = "#e8e8e8";
export declare const grey244 = "#f4f4f4";
export declare const white = "#fff";
export declare type ThemeBrandColor = 'red' | 'black' | 'white';
export interface ThemeBrandColors {
    red: string;
    black: string;
    white: string;
}
export declare const brandColors: {
    red: string;
    black: string;
    white: string;
};
export declare type ThemeShadeColor = 'black' | 'grey42' | 'grey155' | 'grey232' | 'grey244' | 'white';
export interface ThemeShadeColors {
    black: string;
    grey42: string;
    grey155: string;
    grey232: string;
    grey244: string;
    white: string;
}
export declare const shadesColors: {
    black: string;
    grey42: string;
    grey155: string;
    grey232: string;
    grey244: string;
    white: string;
};
export declare const backgroundPrimary = "#fff";
export declare const backgroundSecondary = "#f4f4f4";
export declare const backgroundInverse = "#2a2a2a";
export declare const backgroundHighlight = "#f9423a";
export declare type ThemeBackgroundColor = 'primary' | 'secondary' | 'inverse' | 'highlight';
export interface ThemeBackgroundColors {
    primary: string;
    secondary: string;
    inverse: string;
    highlight: string;
}
export declare const backgroundColors: {
    primary: string;
    secondary: string;
    inverse: string;
    highlight: string;
};
export declare const textPrimary = "#2a2a2a";
export declare const textSecondary = "#9b9b9b";
export declare const textInverse = "#fff";
export declare const textHighlight = "#f9423a";
export declare type ThemeTextColor = 'primary' | 'secondary' | 'inverse' | 'highlight';
export interface ThemeTextColors {
    primary: string;
    secondary: string;
    inverse: string;
    highlight: string;
}
export declare const textColors: {
    primary: string;
    secondary: string;
    inverse: string;
    highlight: string;
};
export declare const comment = "#f9423a";
export declare const podcast = "#f9423a";
export declare const mail = "#9b9b9b";
export declare const twitter = "#5bc6f8";
export declare const facebook = "#6175b5";
export declare const google = "#d44132";
export declare const flipboard = "#f9261a";
export declare const pocket = "#ec4259";
export declare const instagram = "#d448c5";
export declare const linkedin = "#008cc9";
export declare const whatsapp = "#64d448";
export declare const xing = "#338383";
export declare type ThemeSocialColor = 'comment' | 'podcast' | 'mail' | 'twitter' | 'facebook' | 'google' | 'flipboard' | 'pocket' | 'instagram' | 'linkedin' | 'whatsapp' | 'xing';
export interface ThemeSocialColors {
    comment: string;
    podcast: string;
    mail: string;
    twitter: string;
    facebook: string;
    google: string;
    flipboard: string;
    pocket: string;
    instagram: string;
    linkedin: string;
    whatsapp: string;
    xing: string;
}
export declare const socialColors: {
    comment: string;
    podcast: string;
    mail: string;
    twitter: string;
    facebook: string;
    google: string;
    flipboard: string;
    pocket: string;
    instagram: string;
    linkedin: string;
    whatsapp: string;
    xing: string;
};
export declare const success = "#34e88f";
export declare const notice = "#9b9b9b";
export declare const warn = "#fbbe35";
export declare const error = "#ff7e00";
export declare type ThemeFeedbackColor = 'success' | 'notice' | 'warn' | 'error';
export interface ThemeFeedbackColors {
    success: string;
    notice: string;
    warn: string;
    error: string;
}
export declare const feedbackColors: {
    success: string;
    notice: string;
    warn: string;
    error: string;
};
export interface ThemeColors {
    brand: ThemeBrandColors;
    shades: ThemeShadeColors;
    background: ThemeBackgroundColors;
    text: ThemeTextColors;
    social: ThemeSocialColors;
    feedback: ThemeFeedbackColors;
}
declare const colors: {
    brand: {
        red: string;
        black: string;
        white: string;
    };
    shades: {
        black: string;
        grey42: string;
        grey155: string;
        grey232: string;
        grey244: string;
        white: string;
    };
    background: {
        primary: string;
        secondary: string;
        inverse: string;
        highlight: string;
    };
    text: {
        primary: string;
        secondary: string;
        inverse: string;
        highlight: string;
    };
    social: {
        comment: string;
        podcast: string;
        mail: string;
        twitter: string;
        facebook: string;
        google: string;
        flipboard: string;
        pocket: string;
        instagram: string;
        linkedin: string;
        whatsapp: string;
        xing: string;
    };
    feedback: {
        success: string;
        notice: string;
        warn: string;
        error: string;
    };
};
export default colors;
