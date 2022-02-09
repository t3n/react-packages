/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
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

export type IconButtonAsType = 'button' | 'a';
export type IconButtonVariant = 'primary' | 'secondary';
export type IconButtonColorVariant = 'default' | 'inverse' | 'highlight';
export type IconButtonSizeVariant = 'small' | 'regular' | 'big';

export interface IconButtonBaseProps extends MarginProps, WidthProps {
  size?: IconButtonSizeVariant;
  variant?: IconButtonVariant;
  color?: IconButtonColorVariant;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label?: string;
  loading?: boolean;
  expanded?: boolean;
}

export interface IconButtonButtonTypeProps
  extends IconButtonBaseProps,
    Omit<ButtonHTMLAttributes<any>, 'color'> {
  as?: 'button';
}

export interface IconButtonATypeProps
  extends IconButtonBaseProps,
    Omit<AnchorHTMLAttributes<any>, 'color' | 'type'> {
  as?: 'a';
}

export type IconButtonProps = IconButtonATypeProps | IconButtonButtonTypeProps;

const isATypeProps = (props: IconButtonProps): props is IconButtonATypeProps =>
  props.as === 'a';

const buildColorVariants = (
  variantProp: IconButtonVariant,
  type: 'default' | 'hover',
  theme: Theme
) => {
  const allVariants: IconButtonColorVariant[] = [
    'default',
    'highlight',
    'inverse',
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

export const iconButtonStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 30px;
  border: 2px solid;
  ${({ theme }) => space({ p: 2, theme })};
  ${width};
  ${margin};

  ${({ theme, size }) =>
    space({ px: size, py: size && size === 'small' ? 2 : 2, theme })}

  ${({ theme, size }: IconButtonProps & ThemeProps) =>
    composeTextStyle({
      textStyle:
        size === 'big' ? 'big' : size === 'small' ? 'small' : 'regular',
      theme,
    })};

  ${(props: IconButtonProps) => {
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
  }: IconButtonProps & ThemeProps) =>
    variant({
      prop: 'color',
      variants: buildColorVariants(variantProp, 'default', theme),
    })}

  &:hover:not(:disabled), &:focus:not(:disabled) {
    ${({
      theme,
      variant: variantProp = 'primary',
    }: IconButtonProps & ThemeProps) =>
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
      }: IconButtonProps & ThemeProps) =>
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
    }: ThemeProps & IconButtonProps) =>
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
        ${({
          color,
          variant: variantProp,
          theme,
        }: ThemeProps & IconButtonProps) =>
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

  ${({ expanded }) => css`
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
    css`
      transition: all 0.1s;
    `}
`;

const StyledIconButton = styled(
  ({ expanded, icon, loading, ...rest }: IconButtonProps) => (
    // eslint-disable-next-line react/button-has-type
    <button {...rest} />
  )
)<IconButtonProps>`
  ${iconButtonStyles}
`;

const getButtonSize = (
  value: 'big' | 'small' | 'regular' | undefined
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
  value: 'big' | 'small' | 'regular' | undefined
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

const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    children,
    loading,
    label,
    icon,
    size,
    as,
    expanded = false,
    ...rest
  } = props;

  // eslint-disable-next-line react/destructuring-assignment
  const href = isATypeProps(props) ? props.href : undefined;
  // eslint-disable-next-line react/destructuring-assignment
  const disabled = !isATypeProps(props) ? props.disabled : undefined;

  return (
    <StyledIconButton
      href={href}
      as={href ? 'a' : as}
      size={size}
      icon={icon}
      expanded={expanded}
      label={label}
      loading={loading}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? (
        <Loader loaderSize={getLoaderSize(size)} />
      ) : (
        <>
          <Icon
            component={icon}
            mr={2}
            width={getButtonSize(size)}
            height={getButtonSize(size)}
          />
          {label && <span className="icon-button_text">{label}</span>}
        </>
      )}
    </StyledIconButton>
  );
};

IconButton.defaultProps = {
  size: 'regular',
  color: 'default',
  variant: 'primary',
};

export default IconButton;
