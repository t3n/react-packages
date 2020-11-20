/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { border, color, space } from 'styled-system';
import styled from 'styled-components';

import { Box } from '../Box';

export const LegacyCard = styled(Box)`
  position: relative;
  ${({ theme }) =>
    border({ theme, border: '2px solid', borderColor: 'shades.grey232' })}
  ${({ theme }) => space({ theme, p: 3 })}

    a {
    ${({ theme }) => color({ theme, color: 'text.primary' })}
    text-decoration: none;
    &:hover {
      h2,
      h3 {
        ${({ theme }) => color({ theme, color: 'text.highlight' })}
      }
    }
  }
`;
