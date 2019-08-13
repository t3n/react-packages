declare module 'clean-tag';
declare module 'react-testing-library';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Diff<T, K> = Omit<T, keyof K>;

declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
