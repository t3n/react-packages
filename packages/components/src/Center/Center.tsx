import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

export const Center = styled.div<LayoutProps>`
  > * {
    margin: 0 auto;
    ${layout}
  }
`;

Center.displayName = 'Center';
