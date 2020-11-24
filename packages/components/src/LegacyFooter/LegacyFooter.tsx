import React from 'react';
import styled from 'styled-components';
import { color, typography } from 'styled-system';

import { Box } from '../Box';
import LegacyDesktopFooter from './LegacyDesktopFooter';
import LegacyMobileFooter from './LegacyMobileFooter';

const Footer = styled(Box)`
  ${({ theme }) =>
    color({ theme, bg: 'background.secondary', color: 'text.secondary' })};
  *:not(h3) {
    ${({ theme }) =>
      typography({
        theme,
        fontSize: [0],
      })};
  }
`;

export const LegacyFooter: React.FC = () => {
  return (
    <Footer className="tg-footer" pt={6} px={[2, 6]} pb={6}>
      <Box display={['block', 'block', 'none']}>
        <LegacyMobileFooter />
      </Box>
      <Box display={['none', 'none', 'block']}>
        <LegacyDesktopFooter />
      </Box>
    </Footer>
  );
};
