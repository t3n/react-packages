import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import Box from '../Box';
import LegacyAd from '../LegacyAd';
import LegacyFooter from '../LegacyFooter';
import LegacyHeader, { LegacyHeaderProps } from '../LegacyHeader';

export interface LegacyPageLayoutProps extends LegacyHeaderProps {
  privacyManagerId: string;
  showP0?: boolean;
  previewP0?: boolean;
  showP2?: boolean;
  previewP2?: boolean;
  showP13?: boolean;
  previewP13?: boolean;
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
  showP0,
  previewP0,
  showP2,
  previewP2,
  showP13,
  previewP13,
  children,
}) => {
  return (
    <Wrapper>
      {showP0 && (
        <Box display={['none', 'none', 'block']}>
          <LegacyAd name="p0" preview={previewP0} />
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
        showAds={showP2}
        adsPreview={previewP2}
      />
      {showP13 && (
        <Box display={['block', 'block', 'none']}>
          <LegacyAd name="p13" preview={previewP13} />
        </Box>
      )}
      {children}
      <LegacyFooter privacyManagerId={privacyManagerId} />
    </Wrapper>
  );
};

export default LegacyPageLayout;
