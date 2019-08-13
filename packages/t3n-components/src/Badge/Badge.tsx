import styled from 'styled-components';
import { ThemeBackgroundColors } from '@t3n/theme/src/theme/colors/colors';
import { ThemeProps } from '@t3n/theme';
import { getColorForBackground } from '@t3n/theme/src/utils/color';
import { space, typography } from 'styled-system';

interface BadgeProps extends ThemeProps {
  bgColor: ThemeBackgroundColors;
  small?: boolean;
  rounded?: boolean;
}

const background = ({ bgColor, theme }: BadgeProps) => `
  background-color:  ${theme.colors.background[bgColor]};
`;

const padding = ({ theme, small }: BadgeProps) =>
  space({ p: small ? '0 2px' : 0, theme });

const fontSize = ({ small, theme }: BadgeProps) =>
  typography({ fontSize: small ? 0 : 1, theme });

const borderRadius = ({ rounded, theme }: BadgeProps) =>
  `border-radius: ${rounded ? theme.border.radii[1] : 0};`;

const Badge = styled.span<BadgeProps>`
  font-weight: bold;
  color: ${props => getColorForBackground(props.bgColor)};
  ${background};
  ${padding};
  ${fontSize};
  ${borderRadius};
`;

Badge.defaultProps = {
  small: false,
  rounded: false
};

export default Badge;
