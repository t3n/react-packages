import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { color, MarginProps, space, SpaceProps } from 'styled-system';

import { MaterialArrowDropDown } from '@t3n/icons';
import { ThemeProps } from '@t3n/theme';

import Box from '../Box';
import Heading from '../Heading';
import Icon from '../Icon';

export interface AccordionProps extends MarginProps {
  title: string;
  initialOpen?: boolean;
}

const StyledAccordion = styled.div<SpaceProps>`
  border-radius: ${({ theme }: ThemeProps) => theme.border.radii[1]};
  border: 1px solid ${({ theme }: ThemeProps) => theme.colors.shades.grey232};

  ${({ theme }) => color({ theme, bg: 'shades.white' })};

  ${space};
`;

const StyledAccordionHeadBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

const StyledIconBox = styled(Box)<{ collapsed: boolean }>`
  border-radius: 50%;
  height: 2rem;
  width: 2rem;

  ${Icon} {
    transform: ${({ collapsed }) =>
      collapsed ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.2s ease-in;
  }
`;

const Accordion: React.FC<AccordionProps> = ({
  children,
  title,
  initialOpen,
  ...rest
}) => {
  const [collapsed, setCollapsed] = useState(initialOpen || false);

  useEffect(() => {
    if (typeof initialOpen !== 'undefined') {
      setCollapsed(initialOpen);
    }
  }, [initialOpen]);

  return (
    <StyledAccordion {...rest}>
      <StyledAccordionHeadBox
        p={[3, 3, 4]}
        onClick={() => setCollapsed(!collapsed)}
        onKeyDown={() => setCollapsed(!collapsed)}
        role="button"
        tabIndex={0}
      >
        <Heading as="h3" styleAs="h4" m={0}>
          {title}
        </Heading>

        <StyledIconBox bg="shades.grey244" collapsed={collapsed} ml={2}>
          <Icon
            width="2rem"
            height="2rem"
            fill="shades.grey143"
            component={MaterialArrowDropDown}
          />
        </StyledIconBox>
      </StyledAccordionHeadBox>
      {collapsed && (
        <Box mt={3} mb={5} pr={[8, 8, 9]} pl={[3, 3, 4]}>
          {children}
        </Box>
      )}
    </StyledAccordion>
  );
};

export default Accordion;
