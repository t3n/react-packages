import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { border, LayoutProps } from 'styled-system';

import Box from '../Box';

export interface LayoutWithChildrenProps extends LayoutProps {
  children?: ReactNode;
}

const Container = styled(Box)`
  ${({ theme }) =>
    border({
      theme,
      borderColor: 'shades.grey42',
      borderWidth: '1px 2px 4px 1px',
      borderStyle: 'solid',
      borderRadius: theme.border.radii[1],
    })}
`;

const ListBox: React.FC<LayoutWithChildrenProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest} p={[3, 3, 5, 5]}>
      {children}
    </Container>
  );
};

export default ListBox;
