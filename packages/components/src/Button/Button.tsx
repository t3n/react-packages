import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import {
  space,
  margin,
  width,
  lineHeight,
  MarginProps,
  WidthProps
} from 'styled-system';
import { composeButtonStyle, composeTextStyle, ThemeProps } from '@t3n/theme';

import { Loader } from '../Loader';
import { Icon } from '../Icon';

export type ButtonColors = 'light' | 'dark';

export interface ButtonProps
  extends ButtonHTMLAttributes<any>,
    MarginProps,
    WidthProps {
  rounded?: boolean;
  iconLeft?: React.FunctionComponent<React.SVGProps<SVGElement>>;
  iconRight?: React.FunctionComponent<React.SVGProps<SVGElement>>;
  secondary?: boolean;
  color?: ButtonColors;
  inverse?: boolean;
  loading?: boolean;
  small?: boolean;
  disabled?: boolean;
}

const padding = ({ theme }: ButtonProps & ThemeProps) =>
  space({ px: 2, py: 1, theme });

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
  border: none;
  ${padding}
  ${borderRadius}
  ${textStyle}
  ${cursor}
  ${width}
  ${margin}

  /* We have to provide a value for every breakpoint because of specificity
     of line-height from textStyle */
  ${({ theme }) => lineHeight({ theme, lineHeight: [2, 2, 2, 2] })}
  ${props =>
    composeButtonStyle({
      ...props,
      iconComponent: Icon,
      loaderComponent: Loader
    })}

  ${Icon} {
    transition: fill .1s ease-in-out;
  }
`;

const StyledButton = styled.button<Omit<ButtonProps, 'loading'>>`
  ${buttonStyles}
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  inverse,
  iconLeft,
  iconRight,
  ...rest
}) => (
  <StyledButton {...rest}>
    {loading ? (
      <Loader small />
    ) : (
      <>
        {iconLeft && (
          <Icon component={iconLeft} mr={1} width="auto" height="1.5rem" />
        )}
        {children}
        {iconRight && (
          <Icon component={iconRight} ml={1} width="auto" height="1.5rem" />
        )}
      </>
    )}
  </StyledButton>
);
