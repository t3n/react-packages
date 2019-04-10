import styled from 'styled-components';
import {
  color,
  space,
  width,
  ColorProps,
  SpaceProps,
  WidthProps
} from 'styled-system';
import { ThemeProps, composeTextStyle } from '@t3n/styles';

interface TextProps extends ColorProps, SpaceProps, WidthProps, ThemeProps {
  as?: 'p' | 'span';
}

const font = ({ theme }: TextProps) =>
  composeTextStyle({ textStyle: 'regular', theme });

const Text = styled.div<TextProps>`
  ${font}
  ${color}
  ${space}
  ${width}
`;

Text.displayName = 'Text';

Text.defaultProps = {
  as: 'p',
  color: 'brand.anthracite',
  width: 1
};

export default Text;
