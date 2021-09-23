import React from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';
import styled from 'styled-components';
import { border, color, layout, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import { Box } from '../Box';
import { Image } from '../Image';
import { LegacyAd } from '../LegacyAd';
import { LegacyHeaderSocialShare } from '../LegacyArticleSocialShare';
import { LegacyUserMenu, LegacyUserMenuProps } from '../LegacyUserMenu';
import { Logo } from '../Logo';
import LegacyMainNav from './components/LegacyMainNav';
import LegacyT3nNav from './components/LegacyT3nNav';
import {
  LegacyTagNav,
  SearchButton,
  SearchForm,
  SearchIcon,
  SearchInput,
  TagNavTagsType,
} from './components/LegacyTagNav';
import { HeaderCampaign } from './LegacyHeader';

const T3nLogoSmall: React.FC = () => (
  <svg viewBox="0 0 72 42" xmlns="http://www.w3.org/2000/svg">
    <path d="M56.977.208a16.954 16.954 0 0 0-6.635 2.702 24.07 24.07 0 0 0-.52-2.72h-8.835a13.473 13.473 0 0 1-1.455 14.117 14.197 14.197 0 0 1 2.62 16.702h9.828V12.362c1.1-1.192 2.85-2.702 5.006-3.036 2.769-.43 5.004 1.455 5.004 4.29v17.393H72V13.082C72 4.576 65.272-1.188 56.977.208zM29.462 10.481a4.403 4.403 0 1 0-4.289-4.4v4.4h4.289zm.715 8.799h-5.004v5.132c0 2.833 2.24 5.132 5.004 5.132 2.765 0 5.004-2.299 5.004-5.132 0-2.833-2.239-5.132-5.004-5.132zm-5.004 0v-8.799h-8.581V.19H6.582v10.292H0v8.799h6.582v5.132a24.422 24.422 0 0 0 6.913 17.109l7.075-7.257a14.073 14.073 0 0 1-3.978-9.85V19.28h8.581z" />
  </svg>
);

const StickyHeaderWrapper = styled(Box)`
  z-index: 300;
  position: fixed;
  top: 0;
  width: 61.25rem;
`;

export const StickyHeader = styled(Box)`
  width: 100%;

  ${({ theme }) =>
    color({ theme, bg: 'background.primary', color: 'text.secondary' })};
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: 'shades.grey232',
      borderBottomWidth: '2px',
    })};

  > ${Box} > a {
    ${({ theme }) => space({ mt: '5px', ml: '-3px', theme })}
  }

  > ${Box} > a > svg {
    ${({ theme }) =>
      layout({
        theme,
        width: '90px',
        height: '35px',
      })};

    > path {
      fill: ${({ theme }: ThemeProps) => theme.colors.brand.red};
    }
  }

  ${SearchForm} {
    ${({ theme }) => space({ px: 6, py: '10px', theme })}
    ${({ theme }) => layout({ theme, height: '56px' })};
  }

  > ${Box} > ${Box}:last-child {
    ${({ theme }) => space({ mr: '12px', mt: '3px', theme })}
  }
`;

const StickyNavBox = styled(Box)`
  > div {
    ${({ theme }) => space({ pr: '81px', pl: '3px', theme })}
  }

  > div > div {
    ${({ theme }) => space({ mt: '9px', mb: '14px', theme })}
  }

  button {
    ${({ theme }) => space({ mr: '6px', mt: '-2px', theme })}
  }
`;

const Header = styled(Box)`
  z-index: 300;
  width: 100%;
  ${({ theme }) =>
    color({ theme, bg: 'background.primary', color: 'text.secondary' })};
  ${({ theme }) => space({ px: '20px', pb: [2, 2, 2, 0], theme })};

  ${Logo} {
    ${({ theme }) =>
      layout({
        theme,
        width: ['140px', '140px', '160px', '250px'],
        height: ['45px', '45px', '60px', '150px'],
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

  > a {
    margin: 0 32px 0 20px;
  }
`;

const HeaderWrapper = styled(Header)`
  ${({ theme }) =>
    border({ theme, borderTop: '1px solid', borderTopColor: '#dfdfdf' })}
`;

export const LegacyDesktopHeader: React.FC<{
  user: LegacyUserMenuProps['user'];
  userMenuLabelUrl: string;
  userMenuLinkGroups: LegacyUserMenuProps['itemGroups'];
  tags: TagNavTagsType[];
  tagsLoading?: boolean;
  headerCampaignUrl: string;
  headerCampaignImage: string;
  newsIndicator?: number;
  showAds?: boolean;
  adsPreview?: boolean;
}> = ({
  user,
  userMenuLabelUrl,
  userMenuLinkGroups,
  tags,
  tagsLoading,
  headerCampaignUrl,
  headerCampaignImage,
  newsIndicator,
  showAds,
  adsPreview,
}) => {
  const y = useScrollYPosition();
  // 280 is the height of regular LegacyHeader
  const p0Height = document.querySelector('#p0')?.clientHeight ?? 0;
  const isStickyVisible = y > p0Height + 280;

  return (
    <Box position="relative">
      {showAds && <LegacyAd name="p2" preview={adsPreview} />}
      <HeaderWrapper className="tg-header">
        <VisualHeader display="flex" alignItems="center">
          <Box
            height="115px"
            width="260px"
            mt="15px"
            ml="20px"
            mr="32px"
            alignSelf="flex-start"
          >
            <a href="/" title="t3n - digital pioneers">
              <Logo />
            </a>
          </Box>
          <HeaderCampaign>
            <a href={headerCampaignUrl}>
              <Image
                src={headerCampaignImage}
                width={[80, 80, 250, 320]}
                height={[50, 50, 120, 160]}
              />
            </a>
          </HeaderCampaign>
          <Box display="flex" flexDirection="column" flexGrow={1} mt={2}>
            <LegacyT3nNav
              user={user}
              labelUrl={userMenuLabelUrl}
              itemGroups={userMenuLinkGroups}
            />
            <Box mr={-2}>
              <LegacyHeaderSocialShare />
            </Box>
          </Box>
        </VisualHeader>

        <Box display="flex" flexDirection="column">
          <LegacyMainNav newsIndicator={newsIndicator} />
          <LegacyTagNav tags={tags} loading={tagsLoading} />
        </Box>
      </HeaderWrapper>
      {isStickyVisible && (
        <StickyHeaderWrapper>
          <StickyHeader className="tg-header">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              px={2}
            >
              <a href="/" title="t3n - digital pioneers">
                <T3nLogoSmall />
              </a>
              <StickyNavBox width="100%" position="relative">
                <LegacyMainNav isSticky newsIndicator={newsIndicator} />
                <SearchForm action="/suche" method="get">
                  <SearchInput
                    type="text"
                    placeholder="t3n.de durchsuchen"
                    name="q"
                    id="js-search-box"
                  />
                  <SearchButton type="submit">
                    <SearchIcon />
                  </SearchButton>
                </SearchForm>
              </StickyNavBox>
              <LegacyUserMenu
                loading={!user}
                user={user}
                labelUrl={userMenuLabelUrl}
                itemGroups={userMenuLinkGroups}
              />
            </Box>
          </StickyHeader>
        </StickyHeaderWrapper>
      )}
    </Box>
  );
};
