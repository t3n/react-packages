import React from 'react';
import styled from 'styled-components';
import { border, color, space, typography } from 'styled-system';

import BookmarkBorder from '@t3n/icons/src/components/material/action/BookmarkBorder';

import { Box } from '../Box';

export const TooltipContainer = styled(Box)`
  cursor: pointer;
  z-index: 50;

  &:hover {
    > div > svg {
      fill: #000;
    }
  }

  &:hover {
    > span {
      opacity: 1;
    }
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  opacity: 0;
  transition: all 0.1s ease-out;
  pointer-events: none;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  top: 100%;

  ${({ theme }) => space({ theme, px: '4px', py: '6px' })};
  ${({ theme }) =>
    border({
      theme,
      borderRadius: '4px',
    })};
  ${({ theme }) =>
    color({ theme, bg: 'background.highlight', color: 'text.inverse' })}
  ${({ theme }) => typography({ theme, fontSize: '12px' })}
`;

const LegacyBookmark: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <TooltipContainer display="inline-block" position="relative">
      <Box id="bookmark" onClick={onClick}>
        <BookmarkBorder fill="#8F8F8F" width="20" height="20" />
      </Box>
      <Tooltip>Artikel merken</Tooltip>
    </TooltipContainer>
  );
};

export default LegacyBookmark;
