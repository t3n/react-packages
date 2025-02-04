import styled from 'styled-components';
import {
  borderRadius,
  BorderRadiusProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

import backgroundAnimation from '../helper/animation';

export interface PlaceholderProps
  extends SpaceProps,
    LayoutProps,
    BorderRadiusProps {}

const Placeholder = styled.div<PlaceholderProps>`
  ${backgroundAnimation}
  ${layout};
  ${space};
  ${borderRadius}
`;

export default Placeholder;
