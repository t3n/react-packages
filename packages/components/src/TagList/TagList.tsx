import React, { useState } from 'react';
import styled from 'styled-components';
import { MaterialArrowBack, MaterialArrowForward } from '@t3n/icons';
import { margin } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
import { Tag, TagColorVariant } from '../Tag/Tag';
import { Box } from '../Box';

export interface TagListProps {
  tags: JSX.Element[];
  collapseAfter: number;
  colorVariant?: TagColorVariant;
  initialCollapsed?: boolean;
}

const StyledTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledArrowButton = styled(Tag)`
  height: 2rem;
  width: 2rem;
  padding: 0;
  ${({ theme }: ThemeProps) => margin({ theme, mb: 2 })}

  &:hover {
    transform: scale(1.3);
  }

  svg {
    margin: 0 auto;
  }
`;

export const TagList: React.FC<TagListProps> = ({
  initialCollapsed,
  collapseAfter,
  colorVariant,
  tags,
}) => {
  const [collapsed, setCollapsed] = useState(initialCollapsed || true);

  if (tags.length <= collapseAfter) {
    return (
      <StyledTagList>
        {tags.map((tag, idx) => (
          // eslint-disable-next-line react/no-array-index-key
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
          // eslint-disable-next-line react/no-array-index-key
          <Box display="inline-block" key={idx} mb={2}>
            {tag}
          </Box>
        ))}
        <StyledArrowButton
          aria-label="Mehr Tags"
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
        // eslint-disable-next-line react/no-array-index-key
        <Box display="inline-block" key={idx} mb={2}>
          {tag}
        </Box>
      ))}{' '}
      <StyledArrowButton
        aria-label="Weniger Tags"
        colorVariant={colorVariant}
        onClick={() => setCollapsed(true)}
      >
        <MaterialArrowBack />
      </StyledArrowButton>
    </StyledTagList>
  );
};

TagList.defaultProps = {
  collapseAfter: 5,
  initialCollapsed: true,
  colorVariant: 'secondary',
};
