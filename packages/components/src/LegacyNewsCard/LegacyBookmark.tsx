import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { border, color, space, typography } from 'styled-system';

import { MaterialBookmark, MaterialBookmarkBorder } from '@t3n/icons';

import Box from '../Box';

export interface LegacyBookmarkProps {
  onClick: () => void;
  isBookmarked: boolean;
}

export const TooltipContainer = styled(Box)`
  cursor: pointer;
  z-index: 9;

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

const bookmark = keyframes`
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-6px);
  }
  50% {
    transform: scale(1.05, 0.95) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-2px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
`;

const BookmarkContainer = styled(Box)<{
  isBookmarkedClick: boolean;
}>`
  > svg {
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    margin: 0 auto 0 auto;
    transform-origin: bottom;
    animation-timing-function: linear;
    animation-name: ${({ isBookmarkedClick }) =>
      isBookmarkedClick ? bookmark : ''};
  }
`;

const LegacyBookmark: React.FC<LegacyBookmarkProps> = ({
  onClick,
  isBookmarked,
}) => {
  const [isBookmarkedClick, setIsBookmarkedClick] = useState(false);

  return (
    <TooltipContainer display="inline-block" position="relative">
      <BookmarkContainer
        display="flex"
        onClick={(e) => {
          e.preventDefault();
          onClick();
          setIsBookmarkedClick(!isBookmarked);
        }}
        isBookmarkedClick={isBookmarkedClick}
      >
        {isBookmarked ? (
          <MaterialBookmark fill="#5f5f5f" width="24" height="24" />
        ) : (
          <MaterialBookmarkBorder fill="#5f5f5f" width="24" height="24" />
        )}
      </BookmarkContainer>
      <Tooltip>
        {isBookmarked ? 'Artikel nicht länger merken' : 'Artikel merken'}
      </Tooltip>
    </TooltipContainer>
  );
};

export default LegacyBookmark;
