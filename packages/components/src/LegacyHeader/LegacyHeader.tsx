/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { border, color, layout, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import { Box } from '../Box';
import { Logo } from '../Logo';
import { Image } from '../Image';
import { LegacyMobileSocialLinks } from '../LegacyFooter/LegacyMobileFooter';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
import { LegacyMainNav } from './LegacyMainNav';
import { LegacyTagNav, TagNavTagsType } from './LegacyTagNav';
import { LegacyT3nNav } from './LegacyT3nNav';
import useIsMobile from '../hooks/useIsMobile';
import { LegacyMobileNav } from './LegacyMobileNav';

const HeaderCampaign = styled(Box)`
  overflow: hidden;

  > a {
    display: flex;
  }
`;

const MobileHeader = styled(Box)`
  width: 100%;
  ${({ theme }) =>
    color({ theme, bg: 'shades.white', color: 'text.secondary' })};
  ${({ theme }) => space({ px: 2, theme })};

  ${Logo} {
    ${({ theme }) => space({ mt: 2, theme })};
    ${({ theme }) =>
      layout({
        theme,
        width: ['140px', '140px', '160px', '200px'],
        height: ['45px', '45px', '55px', '62px'],
      })};

    > path {
      fill: ${({ theme }: ThemeProps) => theme.colors.brand.red};
    }
  }
`;

const Header = styled(Box)`
  z-index: 300;
  width: 100%;
  ${({ theme }) =>
    color({ theme, bg: 'shades.white', color: 'text.secondary' })};
  ${({ theme }) => space({ px: 4, pb: [2, 2, 2, 0], theme })};

  ${Logo} {
    ${({ theme }) =>
      layout({
        theme,
        width: ['140px', '140px', '160px', '200px'],
        height: ['45px', '45px', '55px', '62px'],
      })};

    > path {
      fill: ${({ theme }: ThemeProps) => theme.colors.brand.red};
    }
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

const VisualHeader = styled(Box)`
  width: 100%;
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 0,
      borderColor: 'shades.grey232',
      borderStyle: 'solid',
      borderBottomWidth: 2,
    })};
`;

const StyledLegacyMobileSocialLinks = styled(LegacyMobileSocialLinks)`
  ${({ theme }) => space({ mt: 3, mb: 4, theme })};
`;

const NavHeader = styled(Box)``;

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
      <MobileHeader
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        className="tg-header"
      >
        <a href="/" title="t3n - digital pioneers">
          <Logo />
        </a>
        <HeaderCampaign>
          <a href={headerCampaignUrl}>
            <Image
              src={headerCampaignImageMobile}
              width={[80, 80, 250, 320]}
              height={[50, 50, 120, 160]}
            />
          </a>
        </HeaderCampaign>
        <LegacyMobileNav user={user} />
      </MobileHeader>
    );
  }

  return (
    <Header className="tg-header">
      <VisualHeader
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <a href="/" title="t3n - digital pioneers">
          <Logo />
        </a>
        <HeaderCampaign>
          <a href={headerCampaignUrl}>
            <Image
              src={headerCampaignImage}
              width={[80, 80, 250, 320]}
              height={[50, 50, 120, 160]}
            />
          </a>
        </HeaderCampaign>
        <Box display="flex" flexDirection="column">
          <LegacyT3nNav
            user={user}
            labelUrl={userMenuLabelUrl}
            itemGroups={userMenuLinkGroups}
          />
          <StyledLegacyMobileSocialLinks />
        </Box>
      </VisualHeader>

      <NavHeader display="flex" flexDirection="column">
        <LegacyMainNav />
        <LegacyTagNav tags={tagNavTags} />
      </NavHeader>
    </Header>
  );
};
