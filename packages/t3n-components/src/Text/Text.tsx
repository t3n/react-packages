import styled from 'styled-components';
import {
  color,
  space,
  width,
  ColorProps,
  SpaceProps,
  WidthProps
} from 'styled-system';
import tag from 'clean-tag';
import { ThemeProps, composeTextStyle } from '@t3n/styles';

interface TextProps extends ColorProps, SpaceProps, WidthProps, ThemeProps {
  is: 'p' | 'span';
}

const font = ({ theme }: TextProps): string =>
  composeTextStyle({ textStyle: 'regular', theme });

const Text = styled(tag)<TextProps>`
  ${font}
  ${color}
  ${space}
  ${width}
`;

Text.displayName = 'Text';

Text.defaultProps = {
  is: 'p',
  color: 'brand.anthracite',
  width: 1
};

export default Text;
