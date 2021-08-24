export const fontDefault =
  '-apple-system,system-UI,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif';

export type ThemeDefaultFont = '-apple-system,system-UI,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;';

export interface ThemeFonts {
  default: ThemeDefaultFont;
}

const fonts = {
  default: fontDefault,
};

export default fonts;
