import { styled } from 'styled-components';
import {
  borderRadius,
  BorderRadiusProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import backgroundAnimation from '../helper/animation';

export interface PlaceholderProps
  extends SpaceProps, LayoutProps, BorderRadiusProps {}

const Placeholder = styled.div<PlaceholderProps & ThemeProps>`
  ${backgroundAnimation}
  ${layout};
  ${space};
  ${borderRadius}
`;

export default Placeholder;
