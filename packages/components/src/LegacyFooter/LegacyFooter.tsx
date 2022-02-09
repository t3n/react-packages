import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import Box from '../Box';
import { PrivacyManagerType } from '../PageFooter';
import LegacyDesktopFooter from './LegacyDesktopFooter';
import LegacyMobileFooter from './LegacyMobileFooter';

export interface LegacyFooterProps {
  privacySettingsModal?: PrivacyManagerType;
}

const Footer = styled(Box)`
  ${({ theme }) =>
    color({ theme, bg: 'shades.grey232', color: 'text.secondary' })};
`;

const LegacyFooter: React.FC<LegacyFooterProps> = ({
  privacySettingsModal,
}) => {
  return (
    <Footer
      className="tg-footer"
      pt={[6, 6, '1.5625rem']}
      px={['0.625rem', '0.625rem', '1.5625rem']}
      pb={['5rem', '5rem', '1.5625rem']}
    >
      <Box display={['block', 'block', 'none']}>
        <LegacyMobileFooter privacySettingsModal={privacySettingsModal} />
      </Box>
      <Box display={['none', 'none', 'block']}>
        <LegacyDesktopFooter privacySettingsModal={privacySettingsModal} />
      </Box>
    </Footer>
  );
};

export default LegacyFooter;
