import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { space, margin, width, MarginProps, WidthProps } from 'styled-system';
import { composeButtonStyle, composeTextStyle, ThemeProps } from '@t3n/theme';
import { Loader } from '../Loader';

export type ButtonColors = 'light' | 'dark';

export interface ButtonProps
  extends ButtonHTMLAttributes<any>,
    MarginProps,
    WidthProps {
  rounded?: boolean;
  icon?: ReactNode; // TODO: Implement icon
  secondary?: boolean;
  color?: ButtonColors;
  inverse?: boolean;
  loading?: boolean;
  small?: boolean;
  disabled?: boolean;
}

const padding = ({ theme }: ButtonProps & ThemeProps) =>
  space({ px: 2, theme });

const textStyle = ({ small, theme }: ButtonProps & ThemeProps) =>
  composeTextStyle({ textStyle: small ? 'small' : 'regular', theme });

const borderRadius = ({ rounded, theme }: ButtonProps & ThemeProps) => `
  border-radius: ${rounded ? '50%' : theme.border.radii[1]};
`;

const cursor = ({ disabled }: ButtonProps) =>
  `cursor: ${disabled ? 'cursor' : 'pointer'};`;

export const buttonStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all .1s ease-out;
  height: 2.5rem;
  border: none;
  ${padding}
  ${borderRadius}
  ${textStyle}
  ${cursor}
  ${width}
  ${margin}

  ${props => composeButtonStyle({ ...props, loaderComponent: Loader })}
`;

const StyledButton = styled.button<Omit<ButtonProps, 'loading'>>`
  ${buttonStyles}
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  inverse,
  ...rest
}) => (
  <StyledButton {...rest}>{loading ? <Loader small /> : children}</StyledButton>
);
