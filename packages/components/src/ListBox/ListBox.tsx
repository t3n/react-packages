import React, { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { border, LayoutProps } from 'styled-system';

import Box from '../Box';

export type LayoutWithChildrenProps = PropsWithChildren<LayoutProps>;

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

const ListBox = ({ children, ...rest }: LayoutWithChildrenProps) => {
  return (
    <Container {...rest} p={[3, 3, 5, 5]}>
      {children}
    </Container>
  );
};

export default ListBox;
