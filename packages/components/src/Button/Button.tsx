import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import {
  space,
  margin,
  width,
  lineHeight,
  MarginProps,
  WidthProps,
  variant
} from 'styled-system';
import { composeTextStyle, ThemeProps, Theme } from '@t3n/theme';

import { Loader } from '../Loader';
import { Icon } from '../Icon';

export type ButtonAsType = 'button' | 'a';
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonColorVariant = 'default' | 'inverse' | 'highlight';
export type ButtonSizeVariant = 'small' | 'regular' | 'big';

export interface ButtonProps
  extends ButtonHTMLAttributes<any>,
    Omit<AnchorHTMLAttributes<any>, 'type'>,
    MarginProps,
    WidthProps {
  variant?: ButtonVariant;
  color?: ButtonColorVariant;
  size?: ButtonSizeVariant;

  iconLeft?: React.FunctionComponent<React.SVGProps<SVGElement>>;
  iconRight?: React.FunctionComponent<React.SVGProps<SVGElement>>;

  loading?: boolean;
  as?: ButtonAsType;
}

const buildColorVariants = (
  variantProp: ButtonVariant,
  type: 'default' | 'hover',
  theme: Theme
) => {
  const allVariants: ButtonColorVariant[] = ['default', 'highlight', 'inverse'];
  const buildConfig: any = {};

  allVariants.forEach(el => {
    buildConfig[el] = {
      color:
        variantProp === 'primary'
          ? theme.buttonStyles.color[el][type].color
          : type === 'hover'
          ? theme.buttonStyles.color[el].hover.color
          : theme.buttonStyles.color[el][type].bg,
      bg:
        variantProp === 'primary'
          ? theme.buttonStyles.color[el][type].bg
          : type === 'hover'
          ? theme.buttonStyles.color[el].hover.bg
          : 'transparent',
      borderColor:
        variantProp === 'primary'
          ? theme.buttonStyles.color[el][type].borderColor
          : theme.buttonStyles.color[el][type].bg
    };
  });
  return buildConfig;
};

export const buttonStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.05s ease-in-out;
  border: 2px solid;
  ${width};
  ${margin};

  ${({ theme }: ThemeProps) => `border-radius: ${theme.border.radii[1]}`};
  ${({ theme, size }) =>
    space({ px: 3, py: size && size === 'small' ? 1 : 2, theme })}
  ${({ theme, size }: ButtonProps & ThemeProps) =>
    composeTextStyle({
      textStyle: size === 'big' ? 'big' : 'regular',
      theme
    })};

  ${({ disabled, loading }: ButtonProps) =>
    disabled || loading ? 'cursor: no-drop' : 'cursor: pointer'};

  /* We have to provide a value for every breakpoint because of specificity
     of line-height from textStyle */
  ${lineHeight({
    lineHeight: [
      'calc(1.5em - 4px)',
      'calc(1.5em - 4px)',
      'calc(1.5em - 4px)',
      'calc(1.5em - 4px)'
    ]
  })}
  ${({ theme, variant: variantProp = 'primary' }: ButtonProps & ThemeProps) =>
    variant({
      prop: 'color',
      variants: buildColorVariants(variantProp, 'default', theme)
    })}

  &:hover :not(:disabled), &:focus :not(:disabled) {
    ${({ theme, variant: variantProp = 'primary' }: ButtonProps & ThemeProps) =>
      variant({
        prop: 'color',
        variants: buildColorVariants(variantProp, 'hover', theme)
      })}

    ${Loader} {
      > div {
        background-color: white;
      }
    }

    ${Icon}${Icon} {
      fill: white;
    }
  }

  ${Loader} {
    > div {
      ${({
        theme,
        color: colorProp,
        variant: variantProp = 'primary'
      }: ButtonProps & ThemeProps) =>
        `background-color: ${
          variantProp === 'secondary'
            ? colorProp === 'highlight' || colorProp === 'inverse'
              ? theme.colors.text.inverse
              : theme.colors.text.primary
            : colorProp === 'highlight' || colorProp === 'inverse'
            ? theme.colors.text.primary
            : theme.colors.text.inverse
        }`};
    }
  }

  ${Icon} {
    transition: fill 0.1s ease-in-out;
    ${({
      variant: variantProp,
      color: colorProp,
      theme
    }: ThemeProps & ButtonProps) =>
      `fill: ${
        variantProp === 'secondary'
          ? colorProp === 'highlight' || colorProp === 'inverse'
            ? theme.colors.text.inverse
            : theme.colors.text.primary
          : colorProp === 'highlight' || colorProp === 'inverse'
          ? theme.colors.text.primary
          : theme.colors.text.inverse
      }`};
  }

  ${({ loading }) =>
    !loading &&
    css`
      &:disabled {
        opacity: 0.6;

        ${({ color, variant: variantProp, theme }: ThemeProps & ButtonProps) =>
          color &&
          color === 'highlight' &&
          variantProp === 'primary' &&
          css`
            color: ${theme.colors.text.highlight};
          `}
      }
    `}


`;

const StyledButton = styled(
  // eslint-disable-next-line react/button-has-type
  ({ loading, ...rest }: ButtonProps) => <button {...rest} />
)<ButtonProps>`
  ${buttonStyles}
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  iconLeft,
  iconRight,
  size,
  href,
  as,
  onClick,
  disabled,
  ...rest
}) => (
  <StyledButton
    href={href}
    as={href ? 'a' : as}
    size={size}
    loading={loading}
    disabled={loading || disabled}
    onClick={(e: any) => !loading && onClick && onClick(e)}
    {...rest}
  >
    {loading ? (
      <Loader small my={2} />
    ) : (
      <>
        {iconLeft && (
          <Icon
            component={iconLeft}
            mr={2}
            width="auto"
            height={
              size === 'big'
                ? '1.75rem'
                : size === 'small'
                ? '1.25rem'
                : '1.5rem'
            }
          />
        )}
        {children}
        {iconRight && (
          <Icon component={iconRight} ml={2} width="auto" height="1.5rem" />
        )}
      </>
    )}
  </StyledButton>
);

Button.defaultProps = {
  size: 'regular',
  color: 'default',
  variant: 'primary'
};
