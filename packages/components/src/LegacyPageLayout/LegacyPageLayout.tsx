import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import Ad, { AdName } from '../Ad';
import Box from '../Box';
import LegacyFooter from '../LegacyFooter';
import PageHeader, { PageHeaderProps } from '../PageHeader';

export interface LegacyPageLayoutProps extends PageHeaderProps {
  privacyManagerId: string;
  overflow?: string;
  adUnits?: AdName[];
  previewAdUnits?: boolean;
  isProMember?: boolean;
  children?: ReactNode;
}

const Wrapper = styled(Box)`
  ${({ theme }) => color({ theme, bg: 'background.primary' })}
  position: relative;
  z-index: 150;
`;

const LegacyPageLayout: React.FC<LegacyPageLayoutProps> = ({
  privacyManagerId,
  pinnedTeaser,
  tags,
  ressorts,
  skills,
  brands,
  magazines,
  headerCampaignUrl,
  headerCampaignImage,
  burgerCampaignUrl,
  burgerCampaignImage,
  isLoggedIn,
  adUnits,
  previewAdUnits,
  overflow,
  isProMember,
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
        <PageHeader
          pinnedTeaser={pinnedTeaser}
          tags={tags}
          ressorts={ressorts}
          skills={skills}
          brands={brands}
          magazines={magazines}
          headerCampaignUrl={headerCampaignUrl}
          headerCampaignImage={headerCampaignImage}
          burgerCampaignUrl={burgerCampaignUrl}
          burgerCampaignImage={burgerCampaignImage}
          isLoggedIn={isLoggedIn}
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
