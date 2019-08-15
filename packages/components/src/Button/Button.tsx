import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';

import { composeButtonStyle, composeTextStyle, ThemeProps } from '@t3n/theme';

export type ButtonColors = 'light' | 'dark';

export interface ButtonProps {
  rounded?: boolean;
  icon?: ReactNode; // TODO: Implement icon
  secondary?: boolean;
  color?: ButtonColors;
  inverse?: boolean;
  small?: boolean;
  wide?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}

const padding = ({ theme }: ButtonProps & ThemeProps) =>
  space({ px: 2, theme });

const textStyle = ({ small, theme }: ButtonProps & ThemeProps) =>
  composeTextStyle({ textStyle: small ? 'small' : 'regular', theme });

const borderRadius = ({ rounded }: ButtonProps) => `
  border-radius: ${rounded ? '50%' : '4px'};
`;

const width = ({ wide }: ButtonProps) => `
  width: ${wide ? '100%' : 'auto'};
`;

const cursor = ({ disabled }: ButtonProps) =>
  `cursor: ${disabled ? 'cursor' : 'pointer'};`;

export const buttonStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all .1s ease-out;
  height: 38px;
  border: none;
  ${width}
  ${padding}
  ${borderRadius}
  ${textStyle}
  ${cursor}

  ${composeButtonStyle}
`;

const Button = styled.button<ButtonProps>`
  ${buttonStyles}
`;

export default Button;
