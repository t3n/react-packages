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
  showP0?: boolean;
  previewP0?: boolean;
  showP1?: boolean;
  previewP1?: boolean;
  showP2?: boolean;
  previewP2?: boolean;
  showP13?: boolean;
  previewP13?: boolean;
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
  showP0,
  previewP0,
  showP1,
  previewP1,
  showP2,
  previewP2,
  showP13,
  previewP13,
  children,
}) => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      {!isMobile && showP0 && <LegacyAd name="p0" preview={previewP0} />}
      <LegacyHeader
        user={user}
        userMenuLabelUrl={userMenuLabelUrl}
        userMenuLinkGroups={userMenuLinkGroups}
        tags={tags}
        headerCampaignUrl={headerCampaignUrl}
        headerCampaignImage={headerCampaignImage}
        headerCampaignImageMobile={headerCampaignImageMobile}
        newsIndicator={newsIndicator}
        showAds={showP2}
        adsPreview={previewP2}
      />
      {!isMobile && showP1 && (
        <>
          <LegacyAd name="p1" preview={previewP1} />
        </>
      )}
      {isMobile && showP13 && (
        <>
          <LegacyAd name="p13" preview={previewP13} />
        </>
      )}
      {children}
      <LegacyFooter />
    </Wrapper>
  );
};
