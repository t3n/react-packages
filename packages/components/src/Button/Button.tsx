/* eslint-disable no-nested-ternary */
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react';
import { css, styled } from 'styled-components';
import {
  lineHeight,
  margin,
  MarginProps,
  space,
  variant as styledVariant,
  width,
  WidthProps,
} from 'styled-system';

import { composeTextStyle, Theme } from '@t3n/theme';

import Icon from '../Icon';
import Loader from '../Loader';

export type ButtonAsType = 'button' | 'a';
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonColorVariant = 'default' | 'inverse' | 'highlight' | 'accent';
export type ButtonSizeVariant = 'small' | 'regular' | 'big';

interface BaseButtonProps extends MarginProps, WidthProps, PropsWithChildren {
  variant?: ButtonVariant;
  color?: ButtonColorVariant;
  size?: ButtonSizeVariant;

  iconLeft?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconRight?: React.ComponentType<React.SVGProps<SVGSVGElement>>;

  loading?: boolean;
  disabled?: boolean;
}

interface AnchorButtonProps
  extends
    BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  as?: 'a';
  href: string;
}

interface ButtonButtonProps
  extends
    BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  as?: 'button';
  href?: never;
}

export type ButtonProps = AnchorButtonProps | ButtonButtonProps;

const buildColorVariants = (
  variantProp: ButtonVariant,
  type: 'default' | 'hover',
  theme: Theme,
) => {
  const allVariants: ButtonColorVariant[] = [
    'default',
    'highlight',
    'inverse',
    'accent',
  ];
  const buildConfig: Record<string, Record<string, string>> = {};

  allVariants.forEach((el) => {
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
          : theme.buttonStyles.color[el][type].bg,
    };
  });
  return buildConfig;
};

export const buttonStyles = css<BaseButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.05s ease-in-out;
  border: 2px solid;
  font-weight: 600;
  ${width};
  ${margin};

  ${({ theme }) => `border-radius: ${theme.border.radii[1]}`};
  ${({ theme, size }) =>
    space({ px: 3, py: size && size === 'small' ? 1 : 2, theme })}
  ${({ theme, size }) =>
    composeTextStyle({
      textStyle: size === 'big' ? 'big' : 'regular',
      theme,
    })};

  ${({ disabled, loading }) =>
    disabled || loading ? 'cursor: no-drop' : 'cursor: pointer'};

  /* We have to provide a value for every breakpoint because of specificity
     of line-height from textStyle */
  ${lineHeight({
    lineHeight: ['1.25rem', '1.25rem', '1.25rem', '1.25rem'],
  })}
  ${({ theme, variant: variantProp = 'primary' }) =>
    styledVariant({
      prop: 'color',
      variants: buildColorVariants(variantProp, 'default', theme),
    })}

  &:hover:not(:disabled), &:focus:not(:disabled) {
    ${({ theme, variant: variantProp = 'primary' }) =>
      styledVariant({
        prop: 'color',
        variants: buildColorVariants(variantProp, 'hover', theme),
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
      ${({ theme, color: colorProp, variant: variantProp = 'primary' }) =>
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
    ${({ variant: variantProp, color: colorProp, theme }) =>
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
    css<BaseButtonProps>`
      &:disabled {
        opacity: 0.6;

        ${({ color, variant: variantProp, theme }) =>
          color &&
          color === 'highlight' &&
          variantProp === 'primary' &&
          css`
            color: ${theme.colors.text.highlight};
          `}
      }
    `}
`;

const StyledButtonElement = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['size', 'loading', 'variant', 'iconLeft', 'iconRight'].includes(prop),
})<BaseButtonProps>`
  ${buttonStyles}
`;

const StyledAnchorElement = styled.a.withConfig({
  shouldForwardProp: (prop) =>
    !['size', 'loading', 'variant', 'iconLeft', 'iconRight'].includes(prop),
})<BaseButtonProps>`
  ${buttonStyles}
`;

type RestProps = Omit<
  ButtonProps,
  keyof BaseButtonProps | 'as' | 'onClick' | 'disabled'
>;

function isAnchorButtonProps(
  props: RestProps,
): props is Omit<
  AnchorButtonProps,
  keyof BaseButtonProps | 'as' | 'onClick' | 'disabled'
> {
  return 'href' in props && Boolean(props.href);
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  iconLeft,
  iconRight,
  size = 'regular',
  color = 'default',
  variant = 'primary',
  as,
  onClick,
  disabled,
  ...restProps
}) => {
  const isAnchor = isAnchorButtonProps(restProps);

  const commonProps = {
    size,
    color,
    variant,
    loading,
    disabled: loading || disabled,
    onClick: onClick
      ? (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
          if (!loading) {
            onClick(e as any);
          }
        }
      : undefined,
  };

  const content = (
    <>
      {loading ? (
        <Loader small my={2} />
      ) : (
        <>
          {iconLeft && (
            <Icon
              component={iconLeft}
              mr={2}
              width={
                size === 'big'
                  ? '1.5rem'
                  : size === 'small'
                    ? '1rem'
                    : '1.25rem'
              }
              height={
                size === 'big'
                  ? '1.5rem'
                  : size === 'small'
                    ? '1rem'
                    : '1.25rem'
              }
            />
          )}
          {children}
          {iconRight && (
            <Icon component={iconRight} ml={2} width="auto" height="1.5rem" />
          )}
        </>
      )}
    </>
  );

  if (isAnchor) {
    return (
      <StyledAnchorElement {...restProps} {...commonProps}>
        {content}
      </StyledAnchorElement>
    );
  }

  return (
    <StyledButtonElement {...restProps} {...commonProps}>
      {content}
    </StyledButtonElement>
  );
};

export default Button;
