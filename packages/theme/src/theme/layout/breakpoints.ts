import { rem } from 'polished';

export const breakpointExtraSmall = 480;
export const breakpointSmall = 768;
export const breakpointMedium = 980;
export const breakpointLarge = 1440;

export type ThemeBreakpoints = [string, string, string, string];

export const breakpoints = [
  breakpointExtraSmall,
  breakpointSmall,
  breakpointMedium,
  breakpointLarge
];

export default breakpoints.map(bp => rem(bp));
