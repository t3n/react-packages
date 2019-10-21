import styled from 'styled-components';
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';
import { ThemeProps } from '@t3n/theme';
import { getColorForBackground } from '@t3n/theme/src/utils/color';
import { space, typography } from 'styled-system';

export interface BadgeProps {
  variant?: ThemeBackgroundColor;
  small?: boolean;
  rounded?: boolean;
}

const background = ({
  variant = 'highlight',
  theme
}: BadgeProps & ThemeProps) => `
  background-color: ${theme.colors.background[variant]};
`;

const padding = ({ theme, small }: BadgeProps & ThemeProps) =>
  space({ p: small ? '0 2px' : 0, theme });

const fontSize = ({ small, theme }: BadgeProps & ThemeProps) =>
  typography({ fontSize: small ? 0 : 1, theme });

const borderRadius = ({ rounded, theme }: BadgeProps & ThemeProps) =>
  `border-radius: ${rounded ? theme.border.radii[1] : 0};`;

export const Badge = styled.span<BadgeProps>`
  font-weight: bold;
  color: ${props => getColorForBackground(props.variant || 'highlight')};
  ${background};
  ${padding};
  ${fontSize};
  ${borderRadius};
`;
