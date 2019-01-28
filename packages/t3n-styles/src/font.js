import colors from './colors';

export const fontFamily = '"adelle-sans", sans-serif';
// [12px, 14px, 16px, 18px, 20px, 24px, 28px, 32px, 36px]
export const fontSizes = [0.75, 0.875, 1, 1.125, 1.25, 1.5, 1.75, 2, 2.25].map(
  n => n + 'rem'
);
export const fontLineHeights = [1.5];
export const fontWeights = [];

const font = {
  family: fontFamily,
  sizes: fontSizes,
  lineHeights: fontLineHeights,
  weights: fontWeights
};

export default font;
