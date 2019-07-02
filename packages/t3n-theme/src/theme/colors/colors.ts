// PALETTE
export const red = '#f9423a';
// export const redDark = '#d7322b';

export const black = '#000';
export const grey42 = '#2a2a2a';
export const grey155 = '#9b9b9b';
export const grey232 = '#e8e8e8';
export const grey244 = '#f4f4f4';
export const white = '#fff';

export const brandColors = {
  red,
  black,
  white
};

export const shadesColors = {
  black,
  grey42,
  grey155,
  grey232,
  grey244,
  white
};

// BACKGROUND
export const backgroundPrimary = white;
export const backgroundSecondary = grey244;
export const backgroundInverse = grey42;
export const backgroundHighlight = red;

export const backgroundColors = {
  primary: backgroundPrimary,
  secondary: backgroundSecondary,
  inverse: backgroundInverse,
  highlight: backgroundHighlight
};

// TEXT
export const textPrimary = grey42;
export const textSecondary = grey232;
export const textInverse = grey42;
export const textHighlight = red;

export const textColors = {
  primary: textPrimary,
  secondary: textSecondary,
  inverse: textInverse,
  highlight: textHighlight
};

// SOCIAL
export const comment = red;
export const podcast = red;
export const mail = grey155;
export const twitter = '#5bc6f8';
export const facebook = '#6175b5';
export const google = '#d44132';
export const flipboard = '#f9261a';
export const pocket = '#ec4259';
export const instagram = '#d448c5';
export const linkedin = '#008cc9';
export const whatsapp = '#64d448';
export const xing = '#338383';

export const socialColors = {
  comment,
  podcast,
  mail,
  twitter,
  facebook,
  google,
  flipboard,
  pocket,
  instagram,
  linkedin,
  whatsapp,
  xing
};

// FEEDBACK
export const success = '#34e88f';
export const notice = grey155;
export const warn = '#fbbe35';
export const error = '#ff7e00';

export const feedbackColors = {
  success,
  notice,
  warn,
  error
};

// $primary-color            : $red-light;
// $secondary-color          : $grey42;
// $tertiary-color           : $grey;

// $mute                     : $tertiary-color;
// $active                   : $primary-color;
// $highlight                : $primary-color;

// $font-color               : $grey42;
// $font-color-inverse       : $white;
// $font-color-highlight     : $highlight;
// $font-color-mute          : $grey;
// $font-color-hover         : $red;
// $font-color-hover-inverse : scale_color($font-color-inverse, $lightness: -$scale-lightness);

// $link-color               : $font-color-mute;
// $tag-color                : $font-color-mute;

const colors = {
  brand: brandColors,
  shades: shadesColors,
  background: backgroundColors,
  text: textColors,
  social: socialColors,
  feedback: feedbackColors
};

export default colors;
