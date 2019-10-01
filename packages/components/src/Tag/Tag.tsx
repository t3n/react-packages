import React from 'react';
import styled, { css } from 'styled-components';
import { variant, padding, color, MarginProps, margin } from 'styled-system';
import { Theme, composeTextStyle } from '@t3n/theme';

export type TagColorVariant = 'primary' | 'secondary' | 'inverse' | 'black';

export interface TagProps extends MarginProps {
  colorVariant?: TagColorVariant;
  link?: string;
  small?: boolean;
  icon?: JSX.Element;
  onClick?: () => void;
}

interface StyledTagProps {
  theme: Theme;
  variant: TagColorVariant;
  link?: string;
  small: boolean;
  clickable: boolean;
}

const StyledTag = styled.div.attrs((props: StyledTagProps) => ({
  href: props.link ? props.link : undefined
}))`
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  ${margin};
  ${({ theme, small }: StyledTagProps) =>
    composeTextStyle({ theme, textStyle: small ? 'small' : 'regular' })}
  ${({ theme, small }: StyledTagProps) =>
    padding({ theme, px: small ? 1 : 2, py: small ? '2px' : '4px' })}

  ${variant({
    variants: {
      primary: {
        bg: 'background.primary',
        color: 'text.primary'
      },
      secondary: {
        bg: 'background.secondary',
        color: 'text.primary'
      },
      inverse: {
        bg: 'background.inverse',
        color: 'text.inverse'
      },
      black: {
        bg: 'shades.black',
        color: 'text.inverse'
      }
    }
  })}

  svg {
    ${({ theme }) => margin({ theme, mt: '4px', ml: 1 })}
    fill: ${({ theme, variant: variantStyle }: StyledTagProps) =>
      variantStyle === 'inverse' || variantStyle === 'black'
        ? theme.colors.text.inverse
        : theme.colors.text.primary}
  }

  ${({ theme, clickable }: StyledTagProps) =>
    clickable &&
    css`
      text-decoration: none;
      &:hover {
        cursor: pointer;
        ${color({ theme, color: 'brand.white', bg: 'brand.red' })};

        svg {
          fill: ${theme.colors.brand.white};
        }
      }
    `}
`;

export const Tag: React.FC<TagProps> = ({
  children,
  link,
  colorVariant,
  onClick,
  icon,
  small,
  ...rest
}) => {
  return (
    <StyledTag
      as={link ? 'a' : 'div'}
      link={link}
      clickable={!!link || !!onClick}
      variant={colorVariant || 'secondary'}
      onClick={onClick}
      small={small || false}
      {...rest}
    >
      {children}
      {icon}
    </StyledTag>
  );
};
