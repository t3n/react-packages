declare module 'clean-tag';
declare module '@t3n/styles';

interface Theme {
  [propName: string]: any;
}

interface ThemeProps {
  theme: Theme;
}

declare module '*.md' {
  const content: string;
  export default content;
}
