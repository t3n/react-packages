/* eslint-disable react/no-array-index-key */
import React from 'react';

import Box from '../Box';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
import { TagNavTagsType } from './components/LegacyTagNav';
import LegacyDesktopHeader from './LegacyDesktopHeader';
import LegacyMobileHeader from './LegacyMobileHeader';

export interface LegacyHeaderProps {
  user?: LegacyUserMenuProps['user'];
  userMenuLabelUrl: string;
  userMenuLinkGroups: LegacyUserMenuProps['itemGroups'];
  tags: TagNavTagsType[];
  tagsLoading?: boolean;
  headerCampaignUrl: string;
  headerCampaignImage: string;
  headerCampaignImageMobile?: string;
  newsIndicator?: number;
  proIndicator?: number;
  showAds?: boolean;
  adsPreview?: boolean;
}

const LegacyHeader: React.FC<LegacyHeaderProps> = ({
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
  showAds,
  adsPreview,
}) => {
  return (
    <>
      <Box display={['block', 'block', 'none']}>
        <LegacyMobileHeader
          user={user}
          headerCampaignUrl={headerCampaignUrl}
          headerCampaignImageMobile={headerCampaignImageMobile}
          newsIndicator={newsIndicator}
          proIndicator={proIndicator}
        />
      </Box>
      <Box display={['none', 'none', 'block']}>
        <LegacyDesktopHeader
          user={user}
          userMenuLabelUrl={userMenuLabelUrl}
          userMenuLinkGroups={userMenuLinkGroups}
          tags={tags}
          tagsLoading={tagsLoading}
          headerCampaignUrl={headerCampaignUrl}
          headerCampaignImage={headerCampaignImage}
          newsIndicator={newsIndicator}
          proIndicator={proIndicator}
          showAds={showAds}
          adsPreview={adsPreview}
        />
      </Box>
    </>
  );
};

export default LegacyHeader;
