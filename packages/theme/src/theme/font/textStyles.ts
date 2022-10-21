export interface ThemeTextStyle {
  fontFamily: string;
  fontSize: number[];
  lineHeight: number[];
}

export const textRegular = {
  fontFamily: 'default',
  fontSize: [1],
  lineHeight: [2, 2, 3],
};

export const textSmall = {
  fontFamily: 'default',
  fontSize: [0],
  lineHeight: [2],
};

export const textBig = {
  fontFamily: 'default',
  fontSize: [1, 2, 2, 3, 3],
  lineHeight: [2, 2, 2, 3, 3],
};

export const h1 = {
  fontFamily: 'default',
  fontSize: [4, 5, 6, 7],
  lineHeight: [1, 1, 1, 0],
};

export const h2 = {
  fontFamily: 'default',
  fontSize: [3, 4, 5, 5],
  lineHeight: [1, 1, 1, 1],
};

export const h3 = {
  fontFamily: 'default',
  fontSize: [2, 3, 4, 4],
  lineHeight: [2, 1, 1, 1],
};

export const h4 = {
  fontFamily: 'default',
  fontSize: [2, 2, 3, 3],
  lineHeight: [2, 2, 1, 1],
};

export const h5 = {
  fontFamily: 'default',
  fontSize: [2, 2, 2, 2],
  lineHeight: [2, 2, 2, 2],
};

export const h6 = {
  fontFamily: 'default',
  fontSize: [2],
  lineHeight: [2],
};

export interface ThemeTextStyles {
  regular: ThemeTextStyle;
  small: ThemeTextStyle;
  big: ThemeTextStyle;
  h1: ThemeTextStyle;
  h2: ThemeTextStyle;
  h3: ThemeTextStyle;
  h4: ThemeTextStyle;
  h5: ThemeTextStyle;
  h6: ThemeTextStyle;
}

const textStyles = {
  regular: textRegular,
  small: textSmall,
  big: textBig,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
};

export default textStyles;
