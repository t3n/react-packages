/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { border, color, space, typography, layout } from 'styled-system';

import { MaterialSearch } from '@t3n/icons';

import { Tag, TagColorVariant } from '../../Tag';
import { IconButton } from '../../IconButton';
import { Box } from '../../Box';

const StyledTag = styled(Tag)`
  ${({ theme }) => space({ mr: 1, theme })};
  ${({ theme }) => color({ theme, color: 'text.secondary' })};
  ${({ theme }) => typography({ fontSize: 0, theme })};
`;

const SearchInput = styled.input`
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

const SearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  top: 0;
  pointer-events: none;

  ${({ theme }) => layout({ theme, height: ['80px', '80px', 'unset'] })};

  &:focus-within ${SearchInput} {
    outline: none;
    width: calc(100% - 42px);
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

const SearchButton = styled(IconButton)<{ type: string }>`
  pointer-events: all;
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
        width="calc(100% - 42px)"
        className="tg-submenu"
        py={1}
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
        <SearchButton
          icon={MaterialSearch}
          color="inverse"
          size="big"
          type="submit"
        />
      </SearchForm>
    </Box>
  );
};
