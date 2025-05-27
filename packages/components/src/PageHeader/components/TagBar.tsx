import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { border, color, layout, space, typography } from 'styled-system';

import {
  MaterialChevronLeft,
  MaterialChevronRight,
  T3nKeep,
  T3nPlus,
} from '@t3n/icons';

import Badge from '../../Badge';
import Box from '../../Box';
import Icon from '../../Icon';
import Link from '../../Link';
import Text from '../../Text';
import { PageHeaderLinksType } from '../PageHeader';

interface TagBarProps {
  pinnedTeaser: PageHeaderLinksType & {
    isSponsored: boolean;
    isPaidArticle: boolean;
  };
  tags: PageHeaderLinksType[];
}

const TagBarWrapper = styled(Box)`
  position: sticky;
  z-index: 30;
  top: 65px;
  left: 0;
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: 700;

  ${({ theme }) => layout({ theme, display: 'flex' })}
  ${({ theme }) => space({ theme, px: [3, 3, 3, 3, 8] })}
  ${({ theme }) =>
    color({ theme, color: 'text.primary', bg: 'background.secondary' })};
`;

const InnerWrapper = styled.div<{
  isLeftMost: boolean;
  isRightMost: boolean;
}>`
  margin: 0 auto;
  position: relative;

  ${({ theme }) => layout({ theme, width: [1, 1, 1, '61.25rem'] })};

  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 48px;
    width: 60px;
    top: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s linear;
    z-index: 1;
  }

  &:before {
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(244, 244, 244, 1) 0%,
      rgba(244, 244, 244, 1) 40%,
      rgba(244, 244, 244, 0) 100%
    );
  }

  &:after {
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(244, 244, 244, 0) 0%,
      rgba(244, 244, 244, 1) 60%,
      rgba(244, 244, 244, 1) 100%
    );
  }

  ${({ isLeftMost }) =>
    !isLeftMost &&
    css`
      &:before {
        opacity: 1;
      }
    `}

  ${({ isRightMost }) =>
    !isRightMost &&
    css`
      &:after {
        opacity: 1;
      }
    `}
`;

const TagBarList = styled.ul`
  display: flex;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
  height: 48px;
  list-style-type: none;
  ${({ theme }) => space({ theme, pl: 0, pr: '50px', m: 0 })}

  ::-webkit-scrollbar {
    display: none;
  }

  li a {
    ${({ theme }) => typography({ theme, fontSize: '0.75rem' })};
    text-decoration: none;
    background: unset;

    &:hover,
    :focus {
      background: unset;
      cursor: pointer;

      ${({ theme }) => color({ theme, color: 'text.highlight' })};
    }
  }
`;

const PinnedTeaserText = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: none;
  flex-shrink: 0;

  ${({ theme }) =>
    layout({ theme, maxWidth: ['250px', '250px', '250px', '300px'] })};
  ${({ theme }) => typography({ theme, fontSize: '0.75rem' })};
`;

const VerticalBar = styled.hr`
  height: 22px;
  width: 1px;
  margin: unset;
  border-left: unset;
  border-top: unset;

  ${({ theme }) => space({ theme, mx: [2, 2, 2, 4] })}
  ${({ theme }) => border({ theme, borderColor: 'text.primary' })};
`;

const TagBarButton = styled.button<{
  isVisible: boolean;
  side: 'left' | 'right';
}>`
  background: transparent;
  border: none;
  padding: 0;
  top: 0;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  transition:
    opacity 0.1s linear,
    transform 0.1s linear;

  ${({ side }) =>
    side === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}

  ${({ isVisible }) =>
    !isVisible &&
    css<{ side: 'left' | 'right' }>`
      pointer-events: none;
      transform: translateX(
        ${({ side }) => (side === 'left' ? '-8px' : '8px')}
      );
      opacity: 0;
    `}
`;

const TagBar: React.FC<TagBarProps> = ({ pinnedTeaser, tags }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [isLeftMost, setIsLeftMost] = useState(true);
  const [isRightMost, setIsRightMost] = useState(false);

  useEffect(() => {
    const listElement = listRef.current;
    const checkScrollPosition = () => {
      if (listElement) {
        setIsLeftMost(listElement.scrollLeft === 0);
        setIsRightMost(
          listElement.scrollLeft + listElement.clientWidth ===
            listElement.scrollWidth,
        );
      }
    };

    if (listElement) {
      listElement.addEventListener('scroll', checkScrollPosition, {
        passive: true,
      });
    }
    return () => {
      if (listElement) {
        listElement.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  const handleScrollLeft = () => {
    const listElement = listRef.current;
    if (listElement) {
      listElement.scrollBy({
        behavior: 'smooth',
        left: -listElement.clientWidth * 0.92,
      });
    }
  };

  const handleScrollRight = () => {
    const listElement = listRef.current;
    if (listElement) {
      listElement.scrollBy({
        behavior: 'smooth',
        left: listElement.clientWidth * 0.92,
      });
    }
  };

  return (
    <TagBarWrapper>
      <InnerWrapper isLeftMost={isLeftMost} isRightMost={isRightMost}>
        <TagBarButton
          side="left"
          title="Nach links scrollen"
          isVisible={!isLeftMost}
          onClick={handleScrollLeft}
        >
          <Icon component={MaterialChevronLeft} fill="shades.grey42" />
        </TagBarButton>
        <TagBarList ref={listRef}>
          <li>
            <Link
              href={pinnedTeaser.url}
              title={pinnedTeaser.label}
              variant="primary"
            >
              <Box display="flex" alignItems="center">
                <Icon component={T3nKeep} fill="brand.red" width="20px" />
                <PinnedTeaserText
                  my={0}
                  mr={
                    pinnedTeaser.isSponsored || pinnedTeaser.isPaidArticle
                      ? 2
                      : 0
                  }
                >
                  {pinnedTeaser.label}
                </PinnedTeaserText>
                {pinnedTeaser.isSponsored && (
                  <div>
                    <Badge variant="light">Anzeige</Badge>
                  </div>
                )}
                {pinnedTeaser.isPaidArticle && (
                  <T3nPlus width="22px" height="18px" />
                )}
              </Box>
            </Link>
          </li>
          <VerticalBar />
          {tags.map((tag) => (
            <li key={tag.label}>
              <Link href={tag.url} title={tag.label} variant="primary" mr={4}>
                {tag.label}
              </Link>
            </li>
          ))}
        </TagBarList>
        <TagBarButton
          side="right"
          title="Nach rechts scrollen"
          isVisible={!isRightMost}
          onClick={handleScrollRight}
        >
          <Icon component={MaterialChevronRight} fill="shades.grey42" />
        </TagBarButton>
      </InnerWrapper>
    </TagBarWrapper>
  );
};

export default TagBar;
