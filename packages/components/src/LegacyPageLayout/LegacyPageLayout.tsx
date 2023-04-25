import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import Box from '../Box';
import LegacyAd from '../LegacyAd';
import LegacyFooter from '../LegacyFooter';
import LegacyHeader, { LegacyHeaderProps } from '../LegacyHeader';

// eslint-disable-next-line no-shadow
export enum AdNames {
  T3N_D_Top = 'T3N_D_Top',
  T3N_D_Right = 'T3N_D_Right',
  T3N_D_Incontent_1 = 'T3N_D_Incontent-1',
  T3N_D_Incontent_2 = 'T3N_D_Incontent-2',
  T3N_D_Incontent_3 = 'T3N_D_Incontent-3',
  T3N_D_Incontent_4 = 'T3N_D_Incontent-4',
  T3N_D_Incontent_5 = 'T3N_D_Incontent-5',
  T3N_D_Incontent_6 = 'T3N_D_Incontent-6',
  T3N_D_Incontent_7 = 'T3N_D_Incontent-7',
  T3N_D_Incontent_8 = 'T3N_D_Incontent-8',
  T3N_D_Incontent_9 = 'T3N_D_Incontent-9',
  T3N_D_Incontent_10 = 'T3N_D_Incontent-10',
  T3N_D_Incontent_11 = 'T3N_D_Incontent-11',
  T3N_D_Sidebar_1 = 'T3N_D_Sidebar-1',
  T3N_D_Sidebar_2 = 'T3N_D_Sidebar-2',
  T3N_D_Sidebar_3 = 'T3N_D_Sidebar-3',
  T3N_M_Incontent_1 = 'T3N_M_Incontent-1',
  T3N_M_Incontent_2 = 'T3N_M_Incontent-2',
  T3N_M_Incontent_3 = 'T3N_M_Incontent-3',
  T3N_M_Incontent_4 = 'T3N_M_Incontent-4',
  T3N_M_Incontent_5 = 'T3N_M_Incontent-5',
  T3N_M_Incontent_6 = 'T3N_M_Incontent-6',
  T3N_M_Incontent_7 = 'T3N_M_Incontent-7',
  T3N_M_Incontent_8 = 'T3N_M_Incontent-8',
  T3N_M_Incontent_9 = 'T3N_M_Incontent-9',
  T3N_M_Incontent_10 = 'T3N_M_Incontent-10',
  T3N_M_Sticky = 'T3N_M_Sticky',
}

export interface LegacyPageLayoutProps extends LegacyHeaderProps {
  privacyManagerId: string;
  overflow?: string;
  adUnits?: AdNames[];
  previewAdUnits?: boolean;
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
  adUnits,
  previewAdUnits,
  overflow,
  children,
}) => {
  const shouldDisplayAdUnit = (name: AdNames) => {
    return adUnits?.includes(name) || false;
  };
  return (
    <Wrapper>
      {shouldDisplayAdUnit(AdNames.T3N_D_Top) && (
        <Box display={['none', 'none', 'block']}>
          <LegacyAd name={AdNames.T3N_D_Top} preview={previewAdUnits} />
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
        showAds={shouldDisplayAdUnit(AdNames.T3N_D_Right)}
        adsPreview={previewAdUnits}
      />
      {shouldDisplayAdUnit(AdNames.T3N_M_Incontent_1) && (
        <Box display={['block', 'block', 'none']}>
          <LegacyAd name={AdNames.T3N_M_Incontent_1} preview={previewAdUnits} />
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
