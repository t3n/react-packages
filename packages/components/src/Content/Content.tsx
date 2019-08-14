import styled from 'styled-components';
import {
  maxWidth as styledMaxWidth,
  padding,
  PaddingProps
} from 'styled-system';
import { rem } from 'polished';
import { ThemeProps } from '@t3n/theme';

export interface ContentProps extends ThemeProps, PaddingProps {
  wide?: boolean;
}

const maxWidth = ({ wide, theme }: ContentProps): string =>
  wide ? '100%' : styledMaxWidth({ maxWidth: [rem(1150)], theme });

const Content = styled.div<ContentProps>`
  width: 100%;
  margin: 0 auto;
  ${maxWidth};
  ${padding};
`;

Content.displayName = 'Content';

Content.defaultProps = {
  wide: false,
  px: [2]
};

export default Content;
