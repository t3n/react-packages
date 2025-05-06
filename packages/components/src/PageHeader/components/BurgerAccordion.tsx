import React, { ReactNode, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { MarginProps } from 'styled-system';

import { MaterialKeyboardArrowDown } from '@t3n/icons';

import Box from '../../Box';
import Heading from '../../Heading';
import Icon from '../../Icon';

export interface AccordionProps extends MarginProps {
  title: string;
  initialOpen?: boolean;
  children?: ReactNode;
}

const StyledAccordionHeadBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  :focus {
    outline: none;
  }

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

const Accordion: React.FC<AccordionProps> = ({
  children,
  title,
  initialOpen,
}) => {
  const [collapsed, setCollapsed] = useState(!initialOpen);

  const contentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = collapsed
        ? '0'
        : `${contentRef.current.scrollHeight}px`;
    }
  }, [collapsed]);

  return (
    <Box mb={5}>
      <StyledAccordionHeadBox
        onClick={() => setCollapsed(!collapsed)}
        role="button"
        tabIndex={0}
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
