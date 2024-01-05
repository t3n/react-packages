import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import Box from '../Box';
import LegacyAd, { LegacyAdName } from '../LegacyAd';
import LegacyFooter from '../LegacyFooter';
import LegacyHeader, { LegacyHeaderProps } from '../LegacyHeader';

export interface LegacyPageLayoutProps extends LegacyHeaderProps {
  privacyManagerId: string;
  overflow?: string;
  adUnits?: LegacyAdName[];
  previewAdUnits?: boolean;
}

const Wrapper = styled(Box)`
  ${({ theme }) => color({ theme, bg: 'background.primary' })}
  position: relative;
  z-index: 150;
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
  adUnits,
  previewAdUnits,
  overflow,
  children,
}) => {
  const shouldDisplayAdUnit = (name: LegacyAdName) => {
    return adUnits?.includes(name) || false;
  };
  return (
    <>
      {shouldDisplayAdUnit('T3N_D_Top') && (
        <Box display={['none', 'none', 'block']}>
          <LegacyAd name="T3N_D_Top" preview={previewAdUnits} />
        </Box>
      )}
      <Wrapper>
        <LegacyHeader
          user={user}
          userMenuLabelUrl={userMenuLabelUrl}
          userMenuLinkGroups={userMenuLinkGroups}
          tags={tags}
          tagsLoading={tagsLoading}
          headerCampaignUrl={headerCampaignUrl}
          headerCampaignImage={headerCampaignImage}
          headerCampaignImageMobile={headerCampaignImageMobile}
          showAds={shouldDisplayAdUnit('T3N_D_Right')}
          adsPreview={previewAdUnits}
        />
        {shouldDisplayAdUnit('T3N_M_Incontent-1') && (
          <Box display={['block', 'block', 'none']}>
            <LegacyAd name="T3N_M_Incontent-1" preview={previewAdUnits} />
          </Box>
        )}
        <Box
          px="20px"
          display="flex"
          flexDirection="column"
          overflow={overflow}
        >
          {children}
        </Box>
        <LegacyFooter privacyManagerId={privacyManagerId} />
      </Wrapper>
    </>
  );
};

export default LegacyPageLayout;
