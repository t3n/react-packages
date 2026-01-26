import React, { ReactNode, useEffect, useRef } from 'react';
import { css, styled } from 'styled-components';
import { MarginProps } from 'styled-system';

import { MaterialKeyboardArrowDown } from '@t3n/icons';

import Box from '../../Box';
import Heading from '../../Heading';
import Icon from '../../Icon';

export interface AccordionProps extends MarginProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children?: ReactNode;
  tabbable?: boolean;
}

const StyledAccordionHeadBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h4 {
    font-size: 1.125rem;
  }
`;

const StyledIconBox = styled(Box)<{ collapsed: boolean }>`
  height: 2rem;
  width: 2rem;

  ${Icon} {
    transform: ${({ collapsed }) =>
      collapsed ? 'rotate(0deg)' : 'rotate(180deg)'};
    transition: transform 0.2s ease-in;
  }
`;

const StyledAccordionContent = styled(Box)<{ collapsed: boolean }>`
  overflow: hidden;
  transition:
    opacity 0.3s ease-in-out,
    height 0.3s ease-in-out;
  opacity: ${({ collapsed }) => (collapsed ? '0' : '1')};
  position: relative;

  &:has(* > * > img) {
    ${({ collapsed }) => (collapsed ? 'transition-delay: 0.6s' : '')};
  }

  & > * > * > * {
    position: relative;

    &:has(img) {
      transform: translateX(0);
      transition: transform 0.3s ease-in-out;

      &:nth-child(1) {
        transition-delay: 0.1s;
      }
      &:nth-child(2) {
        transition-delay: 0.3s;
      }

      ${({ collapsed }) =>
        collapsed &&
        css`
          transform: translateX(200%);

          &:nth-child(1) {
            transition-delay: 0.3s;
          }
          &:nth-child(2) {
            transition-delay: 0.1s;
          }
        `}
    }
  }
`;

const Accordion = ({
  children,
  title,
  isOpen,
  onToggle,
  tabbable,
}: AccordionProps) => {
  const collapsed = !isOpen;
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = collapsed
        ? '0'
        : `${contentRef.current.scrollHeight}px`;
    }
  }, [collapsed]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle?.();
    }
  };

  return (
    <Box mb={5}>
      <StyledAccordionHeadBox
        onClick={onToggle}
        role="button"
        tabIndex={tabbable ? 0 : -1}
        onKeyDown={handleKeyDown}
      >
        <Heading as="h4" styleAs="h4" m={0}>
          {title}
        </Heading>
        <StyledIconBox collapsed={collapsed} ml={2}>
          <Icon
            width="2rem"
            height="2rem"
            fill="shades.grey42"
            component={MaterialKeyboardArrowDown}
          />
        </StyledIconBox>
      </StyledAccordionHeadBox>
      <StyledAccordionContent collapsed={collapsed} ref={contentRef}>
        <Box pt={3}>{children}</Box>
      </StyledAccordionContent>
    </Box>
  );
};

export default Accordion;
