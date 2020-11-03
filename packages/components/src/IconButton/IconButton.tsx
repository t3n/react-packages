/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import {
  space,
  margin,
  width,
  lineHeight,
  MarginProps,
  WidthProps,
  variant,
} from 'styled-system';
import { composeTextStyle, Theme, ThemeProps } from '@t3n/theme';
import { Loader } from '../Loader';
import { Icon } from '../Icon';

export type IconButtonAsType = 'button' | 'a';
export type IconButtonVariant = 'primary' | 'secondary';
export type IconButtonColorVariant = 'default' | 'inverse' | 'highlight';
export type IconButtonSizeVariant = 'small' | 'regular' | 'big';

export interface IconButtonProps
  extends ButtonHTMLAttributes<any>,
    Omit<AnchorHTMLAttributes<any>, 'type'>,
    MarginProps,
    WidthProps {
  size?: IconButtonSizeVariant;
  variant?: IconButtonVariant;
  color?: IconButtonColorVariant;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  as?: IconButtonAsType;
  title: string;
  loading?: boolean;
  alwaysShowText?: boolean;
  iconOnly?: boolean;
}

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
  padding: 8px;
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

  ${({ disabled, loading }: IconButtonProps) =>
    disabled || loading ? 'cursor: no-drop' : 'cursor: pointer'};

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
        variant: variantProp = 'primary',
      }: IconButtonProps & ThemeProps) =>
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
          color &&
          color === 'highlight' &&
          variantProp === 'primary' &&
          css`
            color: ${theme.colors.text.highlight};
          `}
      }
    `}

  ${({ alwaysShowText }) => css`
    > .icon-button_text {
      display: inline-block;
      max-width: ${alwaysShowText ? '100vw' : 0};
      opacity: ${alwaysShowText ? 1 : 0};
      font-size: ${alwaysShowText ? 'inherit' : 0};
      line-height: ${alwaysShowText ? 'inherit' : 0};
      overflow: hidden;
      transition: all 0.1s;
      ${alwaysShowText &&
      css`
        padding: 0 0.25rem;
      `}
    }
  `}

  &:hover > .icon-button_text {
    opacity: 1;
    line-height: inherit;
    font-size: inherit;
    padding: 0 0.25rem;
    max-width: 100vw;
  }

  ${({ iconOnly }) =>
    iconOnly &&
    css`
      transition: all 0.1s;
    `}
`;

const StyledIconButton = styled(
  ({ alwaysShowText, iconOnly, icon, loading, ...rest }: IconButtonProps) => (
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

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  loading,
  title,
  icon,
  size,
  href,
  as,
  onClick,
  disabled,
  alwaysShowText = false,
  iconOnly = false,
  ...rest
}) => (
  <StyledIconButton
    href={href}
    as={href ? 'a' : as}
    size={size}
    icon={icon}
    alwaysShowText={alwaysShowText}
    iconOnly={iconOnly}
    title={title}
    loading={loading}
    disabled={loading || disabled}
    onClick={(e: any) => onClick && onClick(e)}
    {...rest}
  >
    {loading ? (
      <>
        <Loader loaderSize={getButtonSize(size)} />
      </>
    ) : (
      <>
        <Icon
          component={icon}
          mr={2}
          width={getButtonSize(size)}
          height={getButtonSize(size)}
        />
        {!iconOnly && <span className="icon-button_text">{title}</span>}
      </>
    )}
  </StyledIconButton>
);

IconButton.defaultProps = {
  size: 'regular',
  color: 'default',
  variant: 'primary',
};
