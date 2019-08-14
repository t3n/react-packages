import { ReactNode } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import { ThemeProps, composeButtonStyle, composeTextStyle } from '@t3n/theme';

// import { Text } from '../Text';

export type ButtonColors = 'light' | 'dark';
export type ButtonAsType = 'div' | 'span' | 'a' | 'button';

export interface ButtonProps extends ThemeProps {
  as?: ButtonAsType;
  rounded?: boolean;
  icon?: ReactNode; // TODO: Implement icon
  secondary?: boolean;
  color?: ButtonColors;
  inverse?: boolean;
  disabled?: boolean;
  small?: boolean;
  wide?: boolean;
  children?: ReactNode;
}

const padding = ({ theme }: ButtonProps) => space({ px: 2, theme });

const textStyle = ({ small, theme }: ButtonProps) =>
  composeTextStyle({ textStyle: small ? 'small' : 'regular', theme });

const borderRadius = ({ rounded }: ButtonProps) => `
  border-radius: ${rounded ? '50%' : '4px'};
`;

const width = ({ wide }: ButtonProps) => `
  width: ${wide ? '100%' : 'auto'};
`;

const Button = styled.a.attrs(({ as, disabled }: ButtonProps) => ({
  disabled: as === 'button' ? disabled : null,
  role: 'button'
}))<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: all .1s ease-out;
  height: 38px;
  ${width}
  ${padding}
  ${borderRadius}
  ${textStyle}

  ${composeButtonStyle}
`;

export default Button;
