/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import Box from '../Box';
import LegacyAd from '../LegacyAd';
import LegacyFooter from '../LegacyFooter';
import LegacyHeader, { LegacyHeaderProps } from '../LegacyHeader';

// eslint-disable-next-line no-shadow
export enum AdNames {
  desktopRight = 'T3N_D_Right',
  desktopIncontent1 = 'T3N_D_Incontent-1',
  desktopTop = 'T3N_D_Top',
  desktopIncontent2 = 'T3N_D_Incontent-2',
  desktopIncontent3 = 'T3N_D_Incontent-3',
  desktopIncontent4 = 'T3N_D_Incontent-4',
  desktopIncontent5 = 'T3N_D_Incontent-5',
  desktopIncontent6 = 'T3N_D_Incontent-6',
  desktopIncontent7 = 'T3N_D_Incontent-7',
  desktopIncontent8 = 'T3N_D_Incontent-8',
  desktopIncontent9 = 'T3N_D_Incontent-9',
  desktopIncontent10 = 'T3N_D_Incontent-10',
  desktopIncontent11 = 'T3N_D_Incontent-11',
  desktopSidebar1 = 'T3N_D_Sidebar-1',
  desktopSidebar2 = 'T3N_D_Sidebar-2',
  desktopSidebar3 = 'T3N_D_Sidebar-3',
  mobileIncontent1 = 'T3N_M_Incontent-1',
  mobileIncontent2 = 'T3N_M_Incontent-2',
  mobileIncontent3 = 'T3N_M_Incontent-3',
  mobileIncontent4 = 'T3N_M_Incontent-4',
  mobileIncontent5 = 'T3N_M_Incontent-5',
  mobileIncontent6 = 'T3N_M_Incontent-6',
  mobileIncontent7 = 'T3N_M_Incontent-7',
  mobileIncontent8 = 'T3N_M_Incontent-8',
  mobileIncontent9 = 'T3N_M_Incontent-9',
  mobileIncontent10 = 'T3N_M_Incontent-10',
  mobileSticky = 'T3N_M_Sticky',
}

export type AdNamesType = keyof typeof AdNames;
export interface LegacyPageLayoutProps extends LegacyHeaderProps {
  privacyManagerId: string;
  adUnitsToShow?: (keyof typeof AdNames)[];
  previewAdUnits?: boolean;
  overflow?: string;
}

const Wrapper = styled(Box)`
  ${({ theme }) => color({ theme, bg: 'background.primary' })}
`;

const LegacyPageLayout: React.FC<LegacyPageLayoutProps> = ({
  privacyManagerId,
  user,
  userMenuLabelUrl,
  userMenuLinkGroups,
  tags,
  tagsLoading,
  headerCampaignUrl,
  headerCampaignImage,
  headerCampaignImageMobile,
  newsIndicator,
  proIndicator,
  adUnitsToShow = [],
  previewAdUnits = false,
  overflow,
  children,
}) => {
  return (
    <Wrapper>
      {adUnitsToShow.includes('desktopTop') && (
        <Box display={['none', 'none', 'block']}>
          <LegacyAd name={AdNames.desktopTop} preview={previewAdUnits} />
        </Box>
      )}
      <LegacyHeader
        user={user}
        userMenuLabelUrl={userMenuLabelUrl}
        userMenuLinkGroups={userMenuLinkGroups}
        tags={tags}
        tagsLoading={tagsLoading}
        headerCampaignUrl={headerCampaignUrl}
        headerCampaignImage={headerCampaignImage}
        headerCampaignImageMobile={headerCampaignImageMobile}
        newsIndicator={newsIndicator}
        proIndicator={proIndicator}
        showAds={adUnitsToShow.includes('desktopRight')}
        adsPreview={previewAdUnits}
      />
      {/* Question */}
      {adUnitsToShow.includes('mobileIncontent1' || 'desktopIncontent2') && (
        <Box display={['block', 'block', 'none']}>
          <LegacyAd
            name={
              adUnitsToShow.includes('mobileIncontent1')
                ? AdNames.mobileIncontent1
                : AdNames.desktopIncontent1
            }
            preview={previewAdUnits}
          />
        </Box>
      )}
      <Box px="20px" display="flex" flexDirection="column" overflow={overflow}>
        {children}
      </Box>
      <LegacyFooter privacyManagerId={privacyManagerId} />
    </Wrapper>
  );
};

export default LegacyPageLayout;
