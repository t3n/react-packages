/* eslint-disable react/no-array-index-key */
import React, { ReactNode } from 'react';

import Box from '../Box';
import { TagNavTagsType } from './components/LegacyTagNav';
import LegacyDesktopHeader from './LegacyDesktopHeader';
import LegacyMobileHeader from './LegacyMobileHeader';

export interface LegacyHeaderProps {
  tags: TagNavTagsType[];
  tagsLoading?: boolean;
  headerCampaignUrl: string;
  headerCampaignImage: string;
  headerCampaignImageMobile?: string;
  showAds?: boolean;
  adsPreview?: boolean;
  userEmail?: string;
  isProMember?: boolean;
  userMenuItems?: ReactNode[];
}

const LegacyHeader: React.FC<LegacyHeaderProps> = ({
  tags,
  tagsLoading,
  headerCampaignUrl,
  headerCampaignImage,
  headerCampaignImageMobile,
  showAds,
  adsPreview,
  userEmail,
  isProMember,
  userMenuItems,
}) => {
  return (
    <>
      <Box display={['block', 'block', 'none']}>
        <LegacyMobileHeader
          headerCampaignUrl={headerCampaignUrl}
          headerCampaignImageMobile={headerCampaignImageMobile}
          userEmail={userEmail}
          isProMember={isProMember}
        />
      </Box>
      <Box display={['none', 'none', 'block']}>
        <LegacyDesktopHeader
          tags={tags}
          tagsLoading={tagsLoading}
          headerCampaignUrl={headerCampaignUrl}
          headerCampaignImage={headerCampaignImage}
          showAds={showAds}
          adsPreview={adsPreview}
          userEmail={userEmail}
          isProMember={isProMember}
          userMenuItems={userMenuItems}
        />
      </Box>
    </>
  );
};

export default LegacyHeader;
