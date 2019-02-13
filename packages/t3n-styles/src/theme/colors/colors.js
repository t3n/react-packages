// BRAND
export const redLight = '#f9423a';
export const red = '#d7322b';
export const black = '#000';
export const anthracite = '#2a2a2a';
export const grey = '#9b9b9b';
export const greyLight = '#e8e8e8';
export const greyLighter = '#f4f4f4';
export const white = '#fff';

export const brandColors = {
  redLight,
  red,
  black,
  anthracite,
  grey,
  greyLight,
  greyLighter,
  white
};

// SOCIAL
export const comment = redLight;
export const podcast = redLight;
export const mail = '#9b9b9b';
export const twitter = '#5bc6f8';
export const facebook = '#6175b5';
export const google = '#d44132';
export const flipboard = '#f9261a';
export const pocket = '#EC4259';
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

// UTIL
export const success = '#34e88f';
export const notice = grey;
export const warn = '#fbbe35';
export const error = '#ff7e00';

export const utilColors = {
  success,
  notice,
  warn,
  error
};

// BACKGROUND
export const background = white;
export const backgroundInverse = anthracite;
export const backgroundLight = greyLight;
export const backgroundLighter = greyLighter;
export const backgroundHighlight = redLight;

export const backgroundColors = {
  primary: background,
  inverse: backgroundInverse,
  light: backgroundLight,
  lighter: backgroundLighter,
  highlight: backgroundHighlight
};

// $primary-color            : $red-light;
// $secondary-color          : $anthracite;
// $tertiary-color           : $grey;

// $mute                     : $tertiary-color;
// $active                   : $primary-color;
// $highlight                : $primary-color;

// $font-color               : $anthracite;
// $font-color-inverse       : $white;
// $font-color-highlight     : $highlight;
// $font-color-mute          : $grey;
// $font-color-hover         : $red;
// $font-color-hover-inverse : scale_color($font-color-inverse, $lightness: -$scale-lightness);

// $link-color               : $font-color-mute;
// $tag-color                : $font-color-mute;

const colors = {
  brand: brandColors,
  social: socialColors,
  util: utilColors,
  background: backgroundColors
};

export default colors;
