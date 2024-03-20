import { rem } from 'polished';
import styled from 'styled-components';
import {
  maxWidth as styledMaxWidth,
  padding,
  PaddingProps,
} from 'styled-system';

import { ThemeProps } from '@t3n/theme';

export interface ContentProps extends ThemeProps, PaddingProps {
  wide?: boolean;
  small?: boolean;
}

const maxWidth = ({ wide, small, theme }: ContentProps): string =>
  // eslint-disable-next-line no-nested-ternary
  wide
    ? 'max-width: 100%'
    : small
      ? styledMaxWidth({ maxWidth: [rem(770)], theme })
      : styledMaxWidth({ maxWidth: [rem(1150)], theme });

const Content = styled.div<ContentProps>`
  width: 100%;
  margin: 0 auto;
  ${maxWidth};
  ${padding};
`;

Content.displayName = 'Content';

Content.defaultProps = {
  wide: false,
  small: false,
  px: [3],
};

export default Content;
