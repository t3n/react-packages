import React from 'react';
import styled, { css } from 'styled-components';
import { variant, padding, color, MarginProps, margin } from 'styled-system';
import { Theme } from '@t3n/theme';

export type TagColorVariant = 'primary' | 'secondary' | 'inverse';

export interface TagProps extends MarginProps {
  colorVariant: TagColorVariant;
  link?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

interface StyledTagProps {
  theme: Theme;
  variant: TagColorVariant;
  link?: string;
  clickable: boolean;
}

const StyledTag = styled.div.attrs((props: StyledTagProps) => ({
  href: props.link ? props.link : undefined
}))`
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  ${margin};

  ${({ theme }) => padding({ theme, px: 2, py: 1 })}

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
      }
    }
  })}

  svg {
    ${({ theme }) => margin({ theme, mt: '4px', ml: 1 })}
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
  ...rest
}) => {
  return (
    <StyledTag
      as={link ? 'a' : 'div'}
      link={link}
      clickable={!!link || !!onClick}
      variant={colorVariant}
      onClick={onClick}
      {...rest}
    >
      {children}
      {icon}
    </StyledTag>
  );
};
