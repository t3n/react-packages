import React from 'react';
import styled from 'styled-components';
import { border, color, layout, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Box from '../Box';
import Image from '../Image';
import Logo from '../Logo';
import HeaderCampaign from './components/LegacyHeaderCampaign';
import LegacyMobileNav from './components/LegacyMobileNav';

export interface LegacyMobileHeaderProps {
  headerCampaignUrl: string;
  headerCampaignImageMobile?: string;
  userEmail?: string;
  isPlusUser?: boolean;
  isProMember?: boolean;
}

const MobileHeader = styled(Box)`
  width: 100%;
  position: fixed;
  height: 56px;
  top: 0;
  left: 0;
  z-index: 1000;
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

const LegacyMobileHeader: React.FC<LegacyMobileHeaderProps> = ({
  headerCampaignUrl,
  headerCampaignImageMobile,
  userEmail,
  isPlusUser,
  isProMember,
}) => {
  return (
    <MobileHeader
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
      className="tg-header"
    >
      <Box flexGrow={1} ml="3px" mb="1px">
        <a
          href="/"
          title="t3n - digital pioneers"
          aria-label="t3n - digital pioneers"
        >
          <Logo />
        </a>
      </Box>
      <HeaderCampaign mr={5}>
        {headerCampaignImageMobile && (
          <a href={headerCampaignUrl} aria-label="Kampagnen-URL">
            <Image
              src={headerCampaignImageMobile}
              width={[80, 80, 250, 320]}
              height={[50, 50, 120, 160]}
              imageWidth={320}
              imageHeight={160}
              sizes={[80, 80, 250, 320]}
              lazy={false}
            />
          </a>
        )}
      </HeaderCampaign>
      <LegacyMobileNav
        userEmail={userEmail}
        isPlusUser={isPlusUser}
        isProMember={isProMember}
        headerCampaignUrl={headerCampaignUrl}
        headerCampaignImageMobile={headerCampaignImageMobile}
      />
    </MobileHeader>
  );
};

export default LegacyMobileHeader;
