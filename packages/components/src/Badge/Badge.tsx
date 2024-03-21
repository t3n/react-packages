import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { border, space } from 'styled-system';

import { getColorForBackground, getThemeColor, ThemeProps } from '@t3n/theme';

export interface BadgeProps {
  variant: 'inverse' | 'highlight' | 'light';
  children?: ReactNode;
}

const background = ({
  variant = 'highlight',
  theme,
}: BadgeProps & ThemeProps) => `
  background-color: ${
    variant === 'light'
      ? theme.colors.shades.grey232
      : theme.colors.background[variant]
  };
`;

const StyledBadge = styled.span<BadgeProps>`
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  ${({ theme }) => border({ theme, borderRadius: '2px' })};
  ${({ theme }) => space({ theme, px: 1, py: '2px' })};
  color: ${(props) =>
    props.variant === 'light'
      ? getThemeColor('text.primary')
      : getColorForBackground(props.variant || 'highlight')};
  ${background};
`;

const Badge: React.FC<BadgeProps> = (props) => <StyledBadge {...props} />;

export default Badge;
