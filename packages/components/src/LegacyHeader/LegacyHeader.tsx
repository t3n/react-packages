/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import { Box } from '../Box';
import useIsMobile from '../hooks/useIsMobile';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
import { TagNavTagsType } from './components/LegacyTagNav';
import { LegacyDesktopHeader } from './LegacyDesktopHeader';
import LegacyMobileHeader from './LegacyMobileHeader';

export const HeaderCampaign = styled(Box)`
  overflow: hidden;

  > a {
    display: flex;
  }
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  ${({ theme }) => color({ theme, color: 'text.secondary' })};

  &:hover,
  &:focus {
    ${({ theme }) => color({ theme, color: 'text.primary' })};
    text-decoration: none;
  }
`;

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
  showAds?: boolean;
  adsPreview?: boolean;
}

export const LegacyHeader: React.FC<LegacyHeaderProps> = ({
  user,
  userMenuLabelUrl,
  userMenuLinkGroups,
  tags,
  tagsLoading,
  headerCampaignUrl,
  headerCampaignImage,
  headerCampaignImageMobile,
  newsIndicator,
  showAds,
  adsPreview,
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <LegacyMobileHeader
        user={user}
        headerCampaignUrl={headerCampaignUrl}
        headerCampaignImageMobile={headerCampaignImageMobile}
        newsIndicator={newsIndicator}
      />
    );
  }

  return (
    <LegacyDesktopHeader
      user={user}
      userMenuLabelUrl={userMenuLabelUrl}
      userMenuLinkGroups={userMenuLinkGroups}
      tags={tags}
      tagsLoading={tagsLoading}
      headerCampaignUrl={headerCampaignUrl}
      headerCampaignImage={headerCampaignImage}
      newsIndicator={newsIndicator}
      showAds={showAds}
      adsPreview={adsPreview}
    />
  );
};
