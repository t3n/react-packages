/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import { Box } from '../Box';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
import useIsMobile from '../hooks/useIsMobile';
import { LegacyMobileHeader } from './LegacyMobileHeader';
import { LegacyDesktopHeader } from './LegacyDesktopHeader';
import { TagNavTagsType } from './components/LegacyTagNav';

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

export const LegacyHeader: React.FC<{
  user: LegacyUserMenuProps['user'];
  userMenuLabelUrl: string;
  userMenuLinkGroups: LegacyUserMenuProps['itemGroups'];
  tagNavTags: TagNavTagsType;
  headerCampaignUrl: string;
  headerCampaignImage: string;
  headerCampaignImageMobile?: string;
}> = ({
  user,
  userMenuLabelUrl,
  userMenuLinkGroups,
  tagNavTags,
  headerCampaignUrl,
  headerCampaignImage,
  headerCampaignImageMobile,
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <LegacyMobileHeader
        user={user}
        headerCampaignUrl={headerCampaignUrl}
        headerCampaignImageMobile={headerCampaignImageMobile}
      />
    );
  }

  return (
    <LegacyDesktopHeader
      user={user}
      userMenuLabelUrl={userMenuLabelUrl}
      userMenuLinkGroups={userMenuLinkGroups}
      tagNavTags={tagNavTags}
      headerCampaignUrl={headerCampaignUrl}
      headerCampaignImage={headerCampaignImage}
    />
  );
};
