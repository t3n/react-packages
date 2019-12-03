import React, { useState } from 'react';
import { MaterialArrowDropDown } from '@t3n/icons';
import styled from 'styled-components';
import { SpaceProps, space, MarginProps, color } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
import { Icon } from '../Icon';
import { Heading } from '../Heading';
import { Box } from '../Box';

export interface AccordionProps extends MarginProps {
  title: string;
  initialOpen?: boolean;
}

const StyledAccordion = styled.div<SpaceProps>`
  border-radius: ${({ theme }: ThemeProps) => theme.border.radii[1]};

  ${({ theme }) => color({ theme, bg: 'shades.white' })};

  ${space};
`;

const StyledAccordionHeadBox = styled(Box)`
  display: flex;
  justify-content: space-between;
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

export const Accordion: React.FC<AccordionProps> = ({
  children,
  title,
  initialOpen,
  ...rest
}) => {
  const [collapsed, setCollapsed] = useState(initialOpen || false);

  return (
    <StyledAccordion p={[3, 3, 4]} {...rest}>
      <StyledAccordionHeadBox
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
        <Box mt={3} mb={5} pr={5}>
          {children}
        </Box>
      )}
    </StyledAccordion>
  );
};
