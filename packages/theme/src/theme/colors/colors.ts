// PALETTE
export const red = '#f9423a';
// export const redDark = '#d7322b';

export const black = '#000';
export const grey42 = '#2a2a2a';
export const grey143 = '#8F8F8F';
export const grey204 = '#cccccc';
export const grey232 = '#e8e8e8';
export const grey244 = '#f4f4f4';
export const white = '#fff';

export type ThemeBrandColor = 'red' | 'black' | 'white';

export interface ThemeBrandColors {
  red: string;
  black: string;
  white: string;
}

export const brandColors = {
  red,
  black,
  white,
};

export type ThemeShadeColor =
  | 'black'
  | 'grey42'
  | 'grey143'
  | 'grey204'
  | 'grey232'
  | 'grey244'
  | 'white';

export interface ThemeShadeColors {
  black: string;
  grey42: string;
  grey143: string;
  grey204: string;
  grey232: string;
  grey244: string;
  white: string;
}

export const shadesColors = {
  black,
  grey42,
  grey143,
  grey204,
  grey232,
  grey244,
  white,
};

// BACKGROUND
export const backgroundPrimary = white;
export const backgroundSecondary = grey244;
export const backgroundInverse = grey42;
export const backgroundHighlight = red;

export type ThemeBackgroundColor =
  | 'primary'
  | 'secondary'
  | 'inverse'
  | 'highlight';

export interface ThemeBackgroundColors {
  primary: string;
  secondary: string;
  inverse: string;
  highlight: string;
}

export const backgroundColors = {
  primary: backgroundPrimary,
  secondary: backgroundSecondary,
  inverse: backgroundInverse,
  highlight: backgroundHighlight,
};

// TEXT
export const textPrimary = grey42;
export const textSecondary = grey143;
export const textInverse = white;
export const textHighlight = red;

export type ThemeTextColor = 'primary' | 'secondary' | 'inverse' | 'highlight';

export interface ThemeTextColors {
  primary: string;
  secondary: string;
  inverse: string;
  highlight: string;
}

export const textColors = {
  primary: textPrimary,
  secondary: textSecondary,
  inverse: textInverse,
  highlight: textHighlight,
};

// SOCIAL
export const comment = red;
export const email = grey143;
export const facebook = '#6175b5';
export const flipboard = '#f9261a';
export const github = '#24292e';
export const google = '#d44132';
export const instagram = '#d448c5';
export const linkedin = '#008cc9';
export const pocket = '#ec4259';
export const podcast = red;
export const slack = '#611f69';
export const twitter = '#5bc6f8';
export const whatsapp = '#64d448';
export const xing = '#338383';
export const youtube = '#ff0000';

export type ThemeSocialColor =
  | 'comment'
  | 'email'
  | 'facebook'
  | 'flipboard'
  | 'github'
  | 'google'
  | 'instagram'
  | 'linkedin'
  | 'pocket'
  | 'podcast'
  | 'slack'
  | 'twitter'
  | 'whatsapp'
  | 'xing'
  | 'youtube';

export interface ThemeSocialColors {
  comment: string;
  email: string;
  facebook: string;
  flipboard: string;
  github: string;
  google: string;
  instagram: string;
  linkedin: string;
  pocket: string;
  podcast: string;
  slack: string;
  twitter: string;
  whatsapp: string;
  xing: string;
  youtube: string;
}

export const socialColors = {
  comment,
  email,
  facebook,
  flipboard,
  github,
  google,
  instagram,
  linkedin,
  pocket,
  podcast,
  slack,
  twitter,
  whatsapp,
  xing,
  youtube,
};

// FEEDBACK
export const success = '#34e88f';
export const notice = '#5bd6ff';
export const warn = '#ffef4f';
export const error = red;

export type ThemeFeedbackColor = 'success' | 'notice' | 'warn' | 'error';

export interface ThemeFeedbackColors {
  success: string;
  notice: string;
  warn: string;
  error: string;
}

export const feedbackColors = {
  success,
  notice,
  warn,
  error,
};

export interface ThemeColors {
  brand: ThemeBrandColors;
  shades: ThemeShadeColors;
  background: ThemeBackgroundColors;
  text: ThemeTextColors;
  social: ThemeSocialColors;
  feedback: ThemeFeedbackColors;
}

const colors = {
  brand: brandColors,
  shades: shadesColors,
  background: backgroundColors,
  text: textColors,
  social: socialColors,
  feedback: feedbackColors,
};

export default colors;
