export declare const red = "#f9423a";
export declare const black = "#000";
export declare const grey42 = "#2a2a2a";
export declare const grey95 = "#5f5f5f";
export declare const grey204 = "#cccccc";
export declare const grey232 = "#e8e8e8";
export declare const grey244 = "#f4f4f4";
export declare const white = "#fff";
export type ThemeBrandColor = 'red' | 'black' | 'white';
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
export type ThemeShadeColor = 'black' | 'grey42' | 'grey95' | 'grey95' | 'grey204' | 'grey232' | 'grey244' | 'white';
export interface ThemeShadeColors {
    black: string;
    grey42: string;
    grey95: string;
    grey204: string;
    grey232: string;
    grey244: string;
    white: string;
}
export declare const shadesColors: {
    black: string;
    grey42: string;
    grey95: string;
    grey204: string;
    grey232: string;
    grey244: string;
    white: string;
};
export declare const backgroundPrimary = "#fff";
export declare const backgroundSecondary = "#f4f4f4";
export declare const backgroundInverse = "#2a2a2a";
export declare const backgroundHighlight = "#f9423a";
export type ThemeBackgroundColor = 'primary' | 'secondary' | 'inverse' | 'highlight';
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
export declare const textSecondary = "#5f5f5f";
export declare const textInverse = "#fff";
export declare const textHighlight = "#f9423a";
export type ThemeTextColor = 'primary' | 'secondary' | 'inverse' | 'highlight';
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
export declare const email = "#5f5f5f";
export declare const facebook = "#1877f2";
export declare const flipboard = "#f9261a";
export declare const github = "#24292e";
export declare const google = "#d44132";
export declare const instagram = "#d448c5";
export declare const linkedin = "#008cc9";
export declare const podcast = "#f9423a";
export declare const slack = "#611f69";
export declare const twitter = "#000000";
export declare const whatsapp = "#64d448";
export declare const xing = "#338383";
export declare const youtube = "#ff0000";
export declare const rssfeed = "#f90";
export declare const socialmedia = "#2a2a2a";
export declare const newsletter = "#2a2a2a";
export declare const notifications = "#2a2a2a";
export type ThemeSocialColor = 'comment' | 'email' | 'facebook' | 'flipboard' | 'github' | 'google' | 'instagram' | 'linkedin' | 'podcast' | 'slack' | 'twitter' | 'whatsapp' | 'xing' | 'youtube' | 'rssfeed' | 'socialmedia' | 'newsletter' | 'notifications';
export interface ThemeSocialColors {
    comment: string;
    email: string;
    facebook: string;
    flipboard: string;
    github: string;
    google: string;
    instagram: string;
    linkedin: string;
    podcast: string;
    slack: string;
    twitter: string;
    whatsapp: string;
    xing: string;
    youtube: string;
    rssfeed: string;
    socialmedia: string;
    newsletter: string;
    notifications: string;
}
export declare const socialColors: {
    comment: string;
    email: string;
    facebook: string;
    flipboard: string;
    github: string;
    google: string;
    instagram: string;
    linkedin: string;
    podcast: string;
    slack: string;
    twitter: string;
    whatsapp: string;
    xing: string;
    youtube: string;
    rssfeed: string;
    socialmedia: string;
    newsletter: string;
    notifications: string;
};
export declare const success = "#3DFF9F";
export declare const notice = "#56FEFF";
export declare const warn = "#ffef4f";
export declare const error = "#f9423a";
export type ThemeFeedbackColor = 'success' | 'notice' | 'warn' | 'error';
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
        grey95: string;
        grey204: string;
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
        email: string;
        facebook: string;
        flipboard: string;
        github: string;
        google: string;
        instagram: string;
        linkedin: string;
        podcast: string;
        slack: string;
        twitter: string;
        whatsapp: string;
        xing: string;
        youtube: string;
        rssfeed: string;
        socialmedia: string;
        newsletter: string;
        notifications: string;
    };
    feedback: {
        success: string;
        notice: string;
        warn: string;
        error: string;
    };
};
export default colors;
