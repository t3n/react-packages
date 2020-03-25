// [14px, 16px, 18px, 20px, 24px, 28px, 32px, 36px, 40px]
export const fontSizes = [0.875, 1, 1.125, 1.25, 1.5, 1.75, 2, 2.25, 2.5];

export type ThemeFontSizes = string[];

export default fontSizes.map((val) => `${val}rem`);
