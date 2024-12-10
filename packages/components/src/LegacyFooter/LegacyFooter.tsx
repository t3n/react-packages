import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import Box from '../Box';
import LegacyDesktopFooter from './LegacyDesktopFooter';
import LegacyMobileFooter from './LegacyMobileFooter';

export interface LegacyFooterProps {
  privacyManagerId: string;
  isProMember?: boolean;
}

const Footer = styled(Box)`
  ${({ theme }) =>
    color({ theme, bg: 'shades.grey232', color: 'text.secondary' })};
`;

const LegacyFooter: React.FC<LegacyFooterProps> = ({
  privacyManagerId,
  isProMember,
}) => {
  return (
    <Footer
      className="tg-footer"
      pt={[6, 6, '1.5625rem']}
      px={['0.625rem', '0.625rem', '1.5625rem']}
      pb={['5rem', '5rem', '1.5625rem']}
    >
      <Box display={['block', 'block', 'none']}>
        <LegacyMobileFooter
          privacyManagerId={privacyManagerId}
          isProMember={isProMember}
        />
      </Box>
      <Box display={['none', 'none', 'block']}>
        <LegacyDesktopFooter
          privacyManagerId={privacyManagerId}
          isProMember={isProMember}
        />
      </Box>
    </Footer>
  );
};

export default LegacyFooter;
