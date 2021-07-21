/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { border, color, layout, space, typography } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import { Box } from '../../Box';
import { Tag, TagColorVariant } from '../../Tag';

export const SearchIcon: React.FC = () => (
  <svg
    viewBox="0 0 18 18"
    width="20px"
    height="20px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.502 11.735c1.186-1.244 1.926-2.91 1.926-4.744C14.428 3.142 11.197 0 7.214 0 3.232 0 0 3.142 0 6.99c0 3.85 3.232 6.991 7.214 6.991a7.33 7.33 0 0 0 4.32-1.392l5.364 5.198c.13.127.294.19.457.19a.636.636 0 0 0 .457-.19.629.629 0 0 0 0-.896l-5.31-5.156zM1.306 6.991c0-3.153 2.644-5.726 5.908-5.726 3.254 0 5.909 2.562 5.909 5.726 0 3.163-2.645 5.725-5.909 5.725S1.306 10.143 1.306 6.99" />
  </svg>
);

const StyledTag = styled(Tag)`
  ${({ theme }) => space({ mr: '5px', py: '7px', px: '15px', theme })};
  ${({ theme }) => color({ theme, color: 'text.secondary' })};
  ${({ theme }) => typography({ fontSize: 0, letterSpacing: '1px', theme })};
`;

export const SearchInput = styled.input`
  pointer-events: all;
  width: 42px;
  cursor: pointer;
  transform: translateX(42px);
  opacity: 0;
  z-index: 150;

  ${({ theme }) =>
    border({
      theme,
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: 'shades.white',
      borderBottomWidth: 2,
    })}
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  top: 0;
  pointer-events: none;

  ${({ theme }) => layout({ theme, height: ['80px', '80px', '38px'] })};

  &:focus-within ${SearchInput} {
    outline: none;
    width: 100%;
    transition-delay: 2s;
    transition: all 0.4s cubic-bezier(0, 0.795, 0, 1);
    transform: translateX(0);
    opacity: 1;

    ${({ theme }) => typography({ fontSize: 1, theme })};

    ${({ theme }) =>
      border({
        theme,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'shades.grey232',
        borderBottomWidth: 2,
      })}
    ${({ theme }) => space({ px: 2, theme })}

    &::placeholder {
      transition: all 0.3s 0.4s ease;

      ${({ theme }) => typography({ fontSize: 1, theme })};
    }
  }
`;

export const SearchButton = styled.button`
  pointer-events: all;
  padding: 0;
  outline: 0;
  background: unset;
  border: 0;

  svg {
    fill: ${({ theme }: ThemeProps) => theme.colors.shades.grey143};
    margin-top: -2px;

    :hover {
      fill: ${({ theme }: ThemeProps) => theme.colors.brand.red};
    }
  }
`;

export type TagNavTagsType = {
  label: string;
  url: string;
  variant?: TagColorVariant;
};

export const LegacyTagNav: React.FC<{ tags: TagNavTagsType[] }> = ({
  tags,
}) => {
  return (
    <Box position="relative" mb={4}>
      <Box
        display={['block', 'block', 'block', 'flex']}
        justifyContent="center"
        position="relative"
        className="tg-submenu"
      >
        {tags.map((tag, idx) => (
          <StyledTag
            link={tag.url}
            colorVariant={tag.variant || 'secondary'}
            key={idx}
            mb={[2, 2, 2, 0]}
          >
            {tag.label}
          </StyledTag>
        ))}
      </Box>
      <SearchForm action="/suche" method="get">
        <SearchInput
          type="text"
          placeholder="t3n.de durchsuchen"
          name="q"
          id="js-search-box"
        />
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
      </SearchForm>
    </Box>
  );
};
