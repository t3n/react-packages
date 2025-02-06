import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import Ad, { AdName } from '../Ad';
import Box from '../Box';
import LegacyFooter from '../LegacyFooter';
import LegacyHeader, { LegacyHeaderProps } from '../LegacyHeader';

export interface LegacyPageLayoutProps extends LegacyHeaderProps {
  privacyManagerId: string;
  overflow?: string;
  adUnits?: AdName[];
  previewAdUnits?: boolean;
  userEmail?: string;
  isPlusUser?: boolean;
  isProMember?: boolean;
  userLoading?: boolean;
  userMenuItems?: ReactNode[];
  children?: ReactNode;
}

const Wrapper = styled(Box)`
  ${({ theme }) => color({ theme, bg: 'background.primary' })}
  position: relative;
  z-index: 150;
`;

const LegacyPageLayout: React.FC<LegacyPageLayoutProps> = ({
  privacyManagerId,
  tags,
  tagsLoading,
  headerCampaignUrl,
  headerCampaignImage,
  headerCampaignImageMobile,
  adUnits,
  previewAdUnits,
  overflow,
  userEmail,
  isPlusUser,
  isProMember,
  userLoading,
  userMenuItems,
  children,
}) => {
  const shouldDisplayAdUnit = (name: AdName) => {
    return adUnits?.includes(name) || false;
  };
  return (
    <>
      {shouldDisplayAdUnit('T3N_D_Top') && (
        <Box display={['none', 'none', 'block']}>
          <Ad name="T3N_D_Top" preview={previewAdUnits} />
        </Box>
      )}
      <Wrapper>
        <LegacyHeader
          tags={tags}
          tagsLoading={tagsLoading}
          headerCampaignUrl={headerCampaignUrl}
          headerCampaignImage={headerCampaignImage}
          headerCampaignImageMobile={headerCampaignImageMobile}
          showAds={shouldDisplayAdUnit('T3N_D_Right')}
          adsPreview={previewAdUnits}
          userEmail={userEmail}
          isPlusUser={isPlusUser}
          isProMember={isProMember}
          userLoading={userLoading}
          userMenuItems={userMenuItems}
        />
        {shouldDisplayAdUnit('T3N_M_Incontent-1') && (
          <Box display={['block', 'block', 'none']}>
            <Ad name="T3N_M_Incontent-1" preview={previewAdUnits} />
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
        <LegacyFooter
          privacyManagerId={privacyManagerId}
          isProMember={isProMember}
        />
      </Wrapper>
    </>
  );
};

export default LegacyPageLayout;
