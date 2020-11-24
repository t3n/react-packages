import React from 'react';
import styled from 'styled-components';
import { color, layout, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import { Box } from '../Box';
import { Logo } from '../Logo';
import { Image } from '../Image';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
import { LegacyMobileNav } from './components/LegacyMobileNav';
import { HeaderCampaign } from './LegacyHeader';

const MobileHeader = styled(Box)`
  width: 100%;
  ${({ theme }) =>
    color({ theme, bg: 'background.primary', color: 'text.secondary' })};
  ${({ theme }) => space({ px: 2, theme })};

  ${Logo} {
    ${({ theme }) => space({ mt: 2, theme })};
    ${({ theme }) =>
      layout({
        theme,
        width: ['140px', '140px', '160px', '200px'],
        height: ['45px', '45px', '55px', '62px'],
      })};

    > path {
      fill: ${({ theme }: ThemeProps) => theme.colors.brand.red};
    }
  }
`;

export const LegacyMobileHeader: React.FC<{
  user: LegacyUserMenuProps['user'];
  headerCampaignUrl: string;
  headerCampaignImageMobile?: string;
}> = ({ user, headerCampaignUrl, headerCampaignImageMobile }) => {
  return (
    <MobileHeader
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
      className="tg-header"
    >
      <a href="/" title="t3n - digital pioneers">
        <Logo />
      </a>
      <HeaderCampaign>
        <a href={headerCampaignUrl}>
          <Image
            src={headerCampaignImageMobile}
            width={[80, 80, 250, 320]}
            height={[50, 50, 120, 160]}
          />
        </a>
      </HeaderCampaign>
      <LegacyMobileNav user={user} />
    </MobileHeader>
  );
};
