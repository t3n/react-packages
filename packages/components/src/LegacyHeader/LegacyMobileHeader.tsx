import React from 'react';
import styled from 'styled-components';
import { border, color, layout, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import { Box } from '../Box';
import { Image } from '../Image';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
import { Logo } from '../Logo';
import LegacyMobileNav from './components/LegacyMobileNav';
import { HeaderCampaign } from './LegacyHeader';

const MobileHeader = styled(Box)`
  width: 100%;
  position: fixed;
  height: 56px;
  top: 0;
  left: 0;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);

  ${({ theme }) =>
    border({ theme, borderBottom: '2px solid', borderBottomColor: '#e8e8e8' })}

  ${({ theme }) =>
    color({ theme, bg: 'background.primary', color: 'text.secondary' })};
  ${({ theme }) => space({ px: 2, theme })};

  ${Logo} {
    ${({ theme }) =>
      layout({
        theme,
        width: ['auto', 'auto', '160px', '200px'],
        height: ['40px', '40px', '55px', '62px'],
      })};
    flex-grow: 1;

    > path {
      fill: ${({ theme }: ThemeProps) => theme.colors.brand.red};
    }
  }
`;

const LegacyMobileHeader: React.FC<{
  user: LegacyUserMenuProps['user'];
  headerCampaignUrl: string;
  headerCampaignImageMobile?: string;
  newsIndicator?: number;
  proIndicator?: number;
}> = ({
  user,
  headerCampaignUrl,
  headerCampaignImageMobile,
  newsIndicator,
  proIndicator,
}) => {
  return (
    <MobileHeader
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
      className="tg-header"
    >
      <Box flexGrow={1} ml="3px" mb="1px">
        <a href="/" title="t3n - digital pioneers">
          <Logo />
        </a>
      </Box>
      <HeaderCampaign mr={5}>
        <a href={headerCampaignUrl}>
          <Image
            src={headerCampaignImageMobile}
            width={[80, 80, 250, 320]}
            height={[50, 50, 120, 160]}
          />
        </a>
      </HeaderCampaign>
      <LegacyMobileNav
        user={user}
        newsIndicator={newsIndicator}
        proIndicator={proIndicator}
      />
    </MobileHeader>
  );
};

export default LegacyMobileHeader;
