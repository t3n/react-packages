/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { border, color, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import { Box } from '../Box';
import { Logo } from '../Logo';
import { Image } from '../Image';
import { LegacyMobileSocialLinks } from '../LegacyFooter/LegacyMobileFooter';
import { LegacyUserMenuProps } from '../LegacyUserMenu';
import { LegacyMainNav } from './LegacyMainNav';
import { LegacyTagNav, TagNavTagsType } from './LegacyTagNav';
import { LegacyT3nNav } from './LegacyT3nNav';

const Header = styled(Box)`
  z-index: 300;
  width: 100%;
  ${({ theme }) =>
    color({ theme, bg: 'shades.white', color: 'text.secondary' })};
  ${({ theme }) => space({ px: 4, theme })};

  ${Logo} {
    width: 200px;
    height: 62px;

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

const HeaderCampaign = styled(Box)`
  width: 320px;
  min-height: 150px;
  overflow: hidden;

  > a {
    display: flex;
  }
`;

const NavHeader = styled(Box)``;

export const LegacyHeader: React.FC<{
  user: LegacyUserMenuProps['user'];
  userMenuLabelUrl: string;
  userMenuLinkGroups: LegacyUserMenuProps['itemGroups'];
  tagNavTags: TagNavTagsType;
}> = ({ user, userMenuLabelUrl, userMenuLinkGroups, tagNavTags }) => {
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
          <a href="https://t3n.de/headercampaign-b">
            <Image src="https://storage.googleapis.com/t3n-media/t3n-headercampaign-b.png" />
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
