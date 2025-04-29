/* eslint-disable no-nested-ternary */
import React from 'react';
import { darken } from 'polished';
import styled from 'styled-components';
import { layout, space, variant, WidthProps } from 'styled-system';

import { T3nLoupe } from '@t3n/icons';
import { composeTextStyle, theme as t3nTheme, ThemeProps } from '@t3n/theme';

import Loader from '../Loader';

export type SearchBoxVariantType = 'highlight' | 'light' | 'grey';

const IconWrapper = styled.div<{ variant: SearchBoxVariantType }>`
  width: 25px;
  display: flex;
  align-items: center;
  ${({ theme }) => space({ theme, ml: 3 })}

  &:hover {
    cursor: pointer;
  }

  svg {
    ${variant({
      variants: {
        highlight: {
          fill: 'text.inverse',
        },
        light: {
          fill: 'text.primary',
        },
        grey: {
          fill: 'text.primary',
        },
      },
    })};
    width: 23px;
    height: 23px;
  }
`;

const InputWrapper = styled.div<{ variant: SearchBoxVariantType }>`
  flex-grow: 2;

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    line-height: 38px;
    height: 38px;

    ${variant({
      variants: {
        highlight: {
          color: 'text.inverse',
        },
        light: {
          color: 'text.primary',
        },
        grey: {
          color: 'text.primary',
        },
      },
    })};

    &::placeholder {
      ${variant({
        variants: {
          highlight: {
            color: 'text.inverse',
          },
          light: {
            color: 'text.primary',
          },
          grey: {
            color: 'text.primary',
          },
        },
      })};
    }

    ${({ theme }) => composeTextStyle({ textStyle: 'regular', theme })};

    &:focus {
      border-color: #2a2a2a;
      outline: 0;
    }
  }
`;

const Wrapper = styled.div<
  { variant: SearchBoxVariantType } & WidthProps & ThemeProps
>`
  ${variant({
    variants: {
      highlight: {
        color: 'text.primary',
        bg: darken(0.17, t3nTheme.colors.brand.red),
      },
      light: {
        bg: 'shades.white',
        border: '1px solid',
        borderColor: 'shades.grey42',
      },
      grey: {
        bg: 'shades.grey232',
      },
    },
  })};

  position: relative;
  border-radius: ${({ theme }: ThemeProps) => `${theme.border.radii[1]}`};
  display: flex;
  height: 40px;

  ${({ theme }) => space({ theme, px: 2 })}
  ${layout}
`;

type SearchBoxWrapperProps = {
  variantProp: SearchBoxVariantType;
  isLoading: boolean;
  children: React.ReactNode;
};

const SearchBoxWrapper: React.FC<SearchBoxWrapperProps> = ({
  variantProp,
  isLoading,
  children,
}) => {
  return (
    <Wrapper variant={variantProp}>
      <InputWrapper variant={variantProp}>{children}</InputWrapper>
      <IconWrapper variant={variantProp}>
        {isLoading ? (
          <Loader
            color={
              variantProp === 'highlight'
                ? 'background.primary'
                : 'background.inverse'
            }
            small
          />
        ) : (
          <T3nLoupe type="submit" />
        )}
      </IconWrapper>
    </Wrapper>
  );
};

export default SearchBoxWrapper;
