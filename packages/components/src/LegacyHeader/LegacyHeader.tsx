/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import { Box } from '../Box';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
import useIsMobile from '../hooks/useIsMobile';
import LegacyMobileHeader from './LegacyMobileHeader';
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

export interface LegacyHeaderProps {
  user?: LegacyUserMenuProps['user'];
  userMenuLabelUrl: string;
  userMenuLinkGroups: LegacyUserMenuProps['itemGroups'];
  tags: TagNavTagsType[];
  headerCampaignUrl: string;
  headerCampaignImage: string;
  headerCampaignImageMobile?: string;
  newsIndicator?: number;
}

export const LegacyHeader: React.FC<LegacyHeaderProps> = ({
  user,
  userMenuLabelUrl,
  userMenuLinkGroups,
  tags,
  headerCampaignUrl,
  headerCampaignImage,
  headerCampaignImageMobile,
  newsIndicator,
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
      headerCampaignUrl={headerCampaignUrl}
      headerCampaignImage={headerCampaignImage}
      newsIndicator={newsIndicator}
    />
  );
};
