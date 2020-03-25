const lineHeights = [1.25, 1.333, 1.5, 1.666];

export type ThemeLineHeights = string[];

export default lineHeights.map((val) => `${val}em`);
