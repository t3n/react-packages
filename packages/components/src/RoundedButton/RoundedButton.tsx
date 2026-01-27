/* eslint-disable no-nested-ternary */
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';
import { css, styled } from 'styled-components';
import {
  color as systemColor,
  lineHeight,
  margin,
  MarginProps,
  space,
  variant,
  width,
  WidthProps,
} from 'styled-system';

import { composeTextStyle, Theme, ThemeProps } from '@t3n/theme';

import Icon from '../Icon';
import Loader from '../Loader';

export type RoundedButtonAsType = 'button' | 'a';
export type RoundedButtonVariant = 'primary' | 'secondary';
export type RoundedButtonColorVariant =
  | 'default'
  | 'inverse'
  | 'highlight'
  | 'accent';
export type RoundedButtonSizeVariant = 'small' | 'regular' | 'big';

export interface RoundedButtonBaseProps
  extends MarginProps, WidthProps, PropsWithChildren {
  size?: RoundedButtonSizeVariant;
  variant?: RoundedButtonVariant;
  color?: RoundedButtonColorVariant;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: ReactNode;
  loading?: boolean;
  expanded?: boolean;
}

export interface RoundedButtonButtonTypeProps
  extends RoundedButtonBaseProps, Omit<ButtonHTMLAttributes<any>, 'color'> {
  as?: 'button';
}

export interface RoundedButtonATypeProps
  extends
    RoundedButtonBaseProps,
    Omit<AnchorHTMLAttributes<any>, 'color' | 'type'> {
  as?: 'a';
}

export type RoundedButtonProps =
  | RoundedButtonATypeProps
  | RoundedButtonButtonTypeProps;

const isATypeProps = (
  props: RoundedButtonProps,
): props is RoundedButtonATypeProps => props.as === 'a';

const buildColorVariants = (
  variantProp: RoundedButtonVariant,
  type: 'default' | 'hover',
  theme: Theme,
) => {
  const allVariants: RoundedButtonColorVariant[] = [
    'default',
    'highlight',
    'inverse',
    'accent',
  ];
  const buildConfig: any = {};

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

export const RoundedButtonStyles = css<RoundedButtonProps & ThemeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 30px;
  border: 2px solid;
  font-weight: 600;
  ${({ theme }) => space({ p: 2, theme })};
  ${width};
  ${margin};

  ${({ theme, size }) =>
    space({ px: size, py: size && size === 'small' ? 2 : 2, theme })}

  ${({ theme, size }: RoundedButtonProps & ThemeProps) =>
    composeTextStyle({
      textStyle:
        size === 'big' ? 'big' : size === 'small' ? 'small' : 'regular',
      theme,
    })};

  ${(props: RoundedButtonProps) => {
    return (!isATypeProps(props) && props.disabled) || props.loading
      ? 'cursor: no-drop'
      : 'cursor: pointer';
  }};

  /* We have to provide a value for every breakpoint because of specificity
     of line-height from textStyle */
  ${({ size }) =>
    lineHeight({
      lineHeight:
        size === 'big'
          ? ['1.333rem', '1.333rem', '1.333rem', '1.333rem']
          : size === 'small'
            ? ['1rem', '1rem', '1rem', '1rem']
            : ['1.25rem', '1.25rem', '1.25rem', '1.25rem'],
    })}

  ${({
    theme,
    variant: variantProp = 'primary',
  }: RoundedButtonProps & ThemeProps) =>
    variant({
      prop: 'color',
      variants: buildColorVariants(variantProp, 'default', theme),
    })}

  &:hover:not(:disabled), &:focus:not(:disabled) {
    ${({
      theme,
      variant: variantProp = 'primary',
    }: RoundedButtonProps & ThemeProps) =>
      variant({
        prop: 'color',
        variants: buildColorVariants(variantProp, 'hover', theme),
      })}

    ${Loader} {
      > div {
        ${({ theme }) => systemColor({ theme, bg: 'background.white' })};
      }
    }

    ${Icon} {
      fill: ${({ theme }: ThemeProps) => theme.colors.text.inverse};
    }
  }

  &:focus {
    outline: none;
  }

  ${Loader} {
    // 0.325rem because of getLoaderSize - 0.65rem in comparison to getButtonSize
    padding: 0.325rem 0;
    > div {
      ${({
        theme,
        color: colorProp,
        variant: variantProp = 'primary',
      }: RoundedButtonProps & ThemeProps) =>
        systemColor({
          theme,
          bg:
            variantProp === 'secondary'
              ? colorProp === 'highlight' || colorProp === 'inverse'
                ? 'text.inverse'
                : 'text.primary'
              : colorProp === 'highlight' || colorProp === 'inverse'
                ? 'text.primary'
                : 'text.inverse',
        })}
    }
  }

  ${Icon} {
    transition: fill 0.1s ease-in-out;
    margin: 0;

    ${({
      variant: variantProp,
      color: colorProp,
      theme,
    }: ThemeProps & RoundedButtonProps) =>
      `fill: ${
        variantProp === 'secondary'
          ? colorProp === 'highlight' || colorProp === 'inverse'
            ? theme.colors.text.inverse
            : colorProp === 'accent'
              ? theme.colors.text.highlight
              : theme.colors.text.primary
          : colorProp === 'highlight' || colorProp === 'inverse'
            ? theme.colors.text.primary
            : theme.colors.text.inverse
      }`};
  }

  ${({ loading }) =>
    !loading &&
    css<RoundedButtonProps & ThemeProps>`
      &:disabled {
        opacity: 0.6;
        ${({
          color,
          variant: variantProp,
          theme,
        }: ThemeProps & RoundedButtonProps) =>
          systemColor({
            theme,
            color:
              color &&
              color === 'highlight' &&
              variantProp === 'primary' &&
              'text.highlight',
          })}
      }
    `}

  ${({ expanded }) => css<RoundedButtonProps & ThemeProps>`
    > .icon-button_text {
      display: inline-block;
      max-width: ${expanded ? '100vw' : 0};
      opacity: ${expanded ? 1 : 0};
      font-size: ${expanded ? 'inherit' : 0};
      line-height: ${expanded ? 'inherit' : 0};
      overflow: hidden;
      transition: all 0.1s;
      ${expanded &&
      css`
        ${({ theme }) => space({ px: 2, theme })};
      `}
    }
  `}

  &:hover > .icon-button_text, &:focus > .icon-button_text {
    opacity: 1;
    line-height: inherit;
    font-size: inherit;
    ${({ theme }) => space({ px: 2, theme })};
    max-width: 100vw;
  }

  ${({ label }) =>
    !label &&
    css<RoundedButtonProps & ThemeProps>`
      transition: all 0.1s;
    `}
`;

export const StyledRoundedButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['size', 'loading', 'variant', 'expanded', 'label'].includes(prop),
})<RoundedButtonProps & ThemeProps>`
  ${RoundedButtonStyles}
`;

const getButtonSize = (
  value: 'big' | 'small' | 'regular' | undefined,
): string => {
  switch (value) {
    case 'big':
      return '1.333rem';
    case 'small':
      return '1rem';
    default:
      return '1.25rem';
  }
};

const getLoaderSize = (
  value: 'big' | 'small' | 'regular' | undefined,
): string => {
  switch (value) {
    case 'big':
      return '0.683rem';
    case 'small':
      return '0.35rem';
    default:
      return '0.6rem';
  }
};

const RoundedButton = (props: RoundedButtonProps) => {
  const {
    children,
    loading,
    label,
    icon,
    size = 'regular',
    color = 'default',
    variant: iconVariant = 'primary',
    as,
    expanded = !icon,
    ...rest
  } = props;

  const href = isATypeProps(props) ? props.href : undefined;
  const disabled = !isATypeProps(props) ? props.disabled : undefined;

  return (
    <StyledRoundedButton
      href={href}
      as={as}
      size={size}
      icon={icon}
      expanded={expanded}
      label={label}
      loading={loading}
      disabled={loading || disabled}
      color={color}
      variant={iconVariant}
      {...rest}
    >
      {loading ? (
        <Loader loaderSize={getLoaderSize(size)} />
      ) : (
        <>
          {icon && (
            <Icon
              component={icon}
              mr={2}
              width={getButtonSize(size)}
              height={getButtonSize(size)}
            />
          )}
          {label && <span className="icon-button_text">{label}</span>}
        </>
      )}
    </StyledRoundedButton>
  );
};

export default RoundedButton;
