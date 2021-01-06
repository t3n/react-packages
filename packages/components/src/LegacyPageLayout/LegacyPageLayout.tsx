import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import { Box } from '../Box';
import useIsMobile from '../hooks/useIsMobile';
import { LegacyAd } from '../LegacyAd';
import { LegacyFooter } from '../LegacyFooter';
import { LegacyHeader, LegacyHeaderProps } from '../LegacyHeader';

const Wrapper = styled(Box)`
  ${({ theme }) => color({ theme, bg: 'background.primary' })}
`;

export interface LegacyPageLayoutProps extends LegacyHeaderProps {
  showAds?: boolean;
  adsPreview?: boolean;
}

// eslint-disable-next-line import/prefer-default-export
export const LegacyPageLayout: React.FC<LegacyPageLayoutProps> = ({
  user,
  userMenuLabelUrl,
  userMenuLinkGroups,
  tags,
  headerCampaignUrl,
  headerCampaignImage,
  headerCampaignImageMobile,
  newsIndicator,
  showAds,
  adsPreview,
  children,
}) => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      {!isMobile && showAds && <LegacyAd name="p0" preview={adsPreview} />}
      <LegacyHeader
        user={user}
        userMenuLabelUrl={userMenuLabelUrl}
        userMenuLinkGroups={userMenuLinkGroups}
        tags={tags}
        headerCampaignUrl={headerCampaignUrl}
        headerCampaignImage={headerCampaignImage}
        headerCampaignImageMobile={headerCampaignImageMobile}
        newsIndicator={newsIndicator}
        showAds={showAds}
        adsPreview={adsPreview}
      />
      {!isMobile && showAds && (
        <>
          <LegacyAd name="p1" preview={adsPreview} />
        </>
      )}
      {isMobile && showAds && (
        <>
          <LegacyAd name="p13" preview={adsPreview} />
        </>
      )}
      {children}
      <LegacyFooter />
    </Wrapper>
  );
};
