import React, { type JSX, useState } from 'react';
import { styled } from 'styled-components';
import { layout, margin } from 'styled-system';

import { MaterialArrowBack, MaterialArrowForward } from '@t3n/icons';

import Box from '../Box';
import Tag, { TagColorVariant } from '../Tag';

export interface TagListProps {
  tags: JSX.Element[];
  collapseAfter: number;
  small?: boolean;
  colorVariant?: TagColorVariant;
  initialCollapsed?: boolean;
}

const StyledTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledArrowButton = styled(Tag)<{ small: boolean }>`
  ${({ theme, small }) =>
    layout({
      theme,
      width: small ? '1.6rem' : '2.1rem',
      height: small ? '1.6rem' : '2.1rem',
    })};
  padding: 0;
  ${({ theme }) => margin({ theme, mb: 2 })}

  &:hover {
    transform: scale(1.3);
  }

  svg {
    margin: 0 auto;
  }
`;

const TagList = ({
  initialCollapsed = true,
  collapseAfter,
  small = false,
  colorVariant = 'secondary',
  tags,
}: TagListProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(!!initialCollapsed);

  if (tags.length <= collapseAfter) {
    return (
      <StyledTagList>
        {tags.map((tag, idx) => (
          // eslint-disable-next-line @eslint-react/no-array-index-key
          <Box display="inline-block" key={idx} mb={2}>
            {tag}
          </Box>
        ))}
      </StyledTagList>
    );
  }

  if (collapsed) {
    return (
      <StyledTagList>
        {tags.slice(0, collapseAfter).map((tag, idx) => (
          // eslint-disable-next-line @eslint-react/no-array-index-key
          <Box display="inline-block" key={idx} mb={2}>
            {tag}
          </Box>
        ))}
        <StyledArrowButton
          aria-label="Mehr Tags"
          small={small}
          colorVariant={colorVariant}
          onClick={() => setCollapsed(false)}
        >
          <MaterialArrowForward />
        </StyledArrowButton>
      </StyledTagList>
    );
  }

  return (
    <StyledTagList>
      {tags.map((tag, idx) => (
        // eslint-disable-next-line @eslint-react/no-array-index-key
        <Box display="inline-block" key={idx} mb={2}>
          {tag}
        </Box>
      ))}{' '}
      <StyledArrowButton
        aria-label="Weniger Tags"
        small={small}
        colorVariant={colorVariant}
        onClick={() => setCollapsed(true)}
      >
        <MaterialArrowBack />
      </StyledArrowButton>
    </StyledTagList>
  );
};

export default TagList;
