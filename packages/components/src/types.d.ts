declare module 'clean-tag';
declare module '@styled-system/theme-get';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Diff<T, K> = Omit<T, keyof K>;

declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import React = require('react');
  const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// styled-components v6 Theme Declaration
import 'styled-components';
import { Theme } from '@t3n/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
