import React from 'react';
import styled from 'styled-components';
import { border, color, layout, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import { useScrollYPosition } from 'react-use-scroll-position';
import { MaterialSearch } from '@t3n/icons';
import { Box } from '../Box';
import { Logo } from '../Logo';
import { Image } from '../Image';
import { LegacyMobileSocialLinks } from '../LegacyFooter/LegacyMobileFooter';
import { LegacyUserMenu, LegacyUserMenuProps } from '../LegacyUserMenu';
import { LegacyMainNav } from './components/LegacyMainNav';
import {
  LegacyTagNav,
  SearchButton,
  SearchForm,
  SearchInput,
  TagNavTagsType,
} from './components/LegacyTagNav';
import { LegacyT3nNav } from './components/LegacyT3nNav';
import { HeaderCampaign } from './LegacyHeader';

const StickyHeaderWrapper = styled(Box)`
  position: fixed;
  top: 0;
  width: inherit;
`;

export const StickyHeader = styled(Box)`
  z-index: 300;
  width: 100%;

  ${({ theme }) =>
    color({ theme, bg: 'background.primary', color: 'text.secondary' })};
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 0,
      borderStyle: ' solid',
      borderColor: 'shades.grey232',
      borderBottomWidth: '2px',
    })};

  ${Logo} {
    ${({ theme }) =>
      layout({
        theme,
        width: '140px',
        height: '45px',
      })};

    > path {
      fill: ${({ theme }: ThemeProps) => theme.colors.brand.red};
    }
  }

  ${SearchForm} {
    ${({ theme }) => space({ px: 6, py: '10px', theme })}
  }
`;

const Header = styled(Box)`
  z-index: 300;
  width: 100%;
  ${({ theme }) =>
    color({ theme, bg: 'background.primary', color: 'text.secondary' })};
  ${({ theme }) => space({ px: 4, pb: [2, 2, 2, 0], theme })};

  ${Logo} {
    ${({ theme }) =>
      layout({
        theme,
        width: ['140px', '140px', '160px', '200px', '250px'],
        height: ['45px', '45px', '60px', '80px', '150px'],
      })};

    > path {
      fill: ${({ theme }: ThemeProps) => theme.colors.brand.red};
    }
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

export const LegacyDesktopHeader: React.FC<{
  user: LegacyUserMenuProps['user'];
  userMenuLabelUrl: string;
  userMenuLinkGroups: LegacyUserMenuProps['itemGroups'];
  tags: TagNavTagsType[];
  headerCampaignUrl: string;
  headerCampaignImage: string;
}> = ({
  user,
  userMenuLabelUrl,
  userMenuLinkGroups,
  tags,
  headerCampaignUrl,
  headerCampaignImage,
}) => {
  const y = useScrollYPosition();

  if (y > 20) {
    return (
      <StickyHeaderWrapper>
        <StickyHeader className="tg-header">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={2}
          >
            <a href="/" title="t3n - digital pioneers">
              <Logo />
            </a>
            <Box width="100%" position="relative">
              <LegacyMainNav isSticky />
              <SearchForm action="/suche" method="get">
                <SearchInput
                  type="text"
                  placeholder="t3n.de durchsuchen"
                  name="q"
                  id="js-search-box"
                />
                <SearchButton
                  icon={MaterialSearch}
                  color="inverse"
                  size="big"
                  type="submit"
                />
              </SearchForm>
            </Box>
            <LegacyUserMenu
              loading={!user}
              user={user}
              labelUrl={userMenuLabelUrl}
              itemGroups={userMenuLinkGroups}
            />
          </Box>
        </StickyHeader>
      </StickyHeaderWrapper>
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
          <LegacyMobileSocialLinks />
        </Box>
      </VisualHeader>

      <Box display="flex" flexDirection="column">
        <LegacyMainNav />
        <LegacyTagNav tags={tags} />
      </Box>
    </Header>
  );
};
