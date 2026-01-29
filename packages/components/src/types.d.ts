import 'styled-components';

import { Theme } from '@t3n/theme';
declare module '@styled-system/theme-get';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}

declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  import React = require('react');
  const ReactComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
