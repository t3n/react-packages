import React from 'react';
import { styled } from 'styled-components';
import { color, layout } from 'styled-system';

import Box from '../Box';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

export interface PageFooterProps {
  privacyManagerId: string;
}

const Footer = styled(Box)`
  ${({ theme }) =>
    color({ theme, bg: 'shades.grey232', color: 'text.secondary' })};
  position: relative;
  z-index: 24;
`;

const InnerWrapper = styled.footer`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => layout({ theme, width: [1, 1, 1, '61.25rem'] })};
`;

const PageFooter = ({ privacyManagerId }: PageFooterProps) => {
  return (
    <Footer
      className="tg-footer"
      pt={[6, 6, '1.5625rem']}
      px={['0.625rem', '0.625rem', '1.5625rem']}
      pb={['5rem', '5rem', '1.5625rem']}
    >
      <InnerWrapper>
        <Box display={['block', 'block', 'none']}>
          <MobileFooter privacyManagerId={privacyManagerId} />
        </Box>
        <Box display={['none', 'none', 'block']}>
          <DesktopFooter privacyManagerId={privacyManagerId} />
        </Box>
      </InnerWrapper>
    </Footer>
  );
};

export default PageFooter;
