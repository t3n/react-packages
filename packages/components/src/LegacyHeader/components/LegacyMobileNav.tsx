/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import styled from 'styled-components';
import { border, color, layout, position, space } from 'styled-system';

import {
  MaterialBookmarkBorder,
  MaterialClose,
  MaterialMenu,
} from '@t3n/icons';
import { getColorForBackground, ThemeProps } from '@t3n/theme';

import Box from '../../Box';
import Button from '../../Button';
import Icon from '../../Icon';
import Image from '../../Image';
import Input from '../../Input';
import { LegacyUserMenuProps } from '../../LegacyUserMenu';
import Logo from '../../Logo';
import Text from '../../Text';
import HeaderCampaign from './LegacyHeaderCampaign';
import HeaderLink from './LegacyHeaderLink';
import { Indicator } from './LegacyMainNav';

export interface LegacyMobileNavProps {
  user: LegacyUserMenuProps['user'];
  newsIndicator?: number;
  proIndicator?: number;
  headerCampaignUrl: string;
  headerCampaignImageMobile?: string;
}

export type MobileNavLinksType = {
  label: string;
  url: string;
  indicator?: boolean;
  bold?: boolean;
};

const MobileMenuToggleBox = styled(Box)`
  span {
    ${({ theme }) =>
      position({
        theme,
        position: 'absolute',
        top: '1px',
        right: '-2px',
      })};
  }
`;

const MobileMenuToggle = styled(Icon)`
  cursor: pointer;
`;

const MobileMenuContainer = styled(Box)<{ menuOpen: boolean }>`
  position: fixed;
  overflow: scroll;
  height: 100%;
  right: 0;
  top: 0;
  padding-bottom: 72px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  transform: translateX(
    ${({ menuOpen }) => (menuOpen ? '0' : 'calc(100% + 10px)')}
  );
  transition: transform 0.333s ease-in-out;

  ${({ theme }) =>
    color({ theme, bg: 'background.primary', color: 'text.primary' })}
  ${({ theme }) =>
    layout({
      theme,
      width: [1, '320px'],
    })}
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 1,
      borderColor: 'shades.grey232',
      borderStyle: 'solid',
    })}
`;

const MobileMenuItem = styled.a<{ borderTopThick?: boolean }>`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  text-decoration: none;

  ${({ theme, borderTopThick }) =>
    border({
      theme,
      borderTop: borderTopThick ? '4px solid' : '1px solid',
      borderTopColor: 'background.secondary',
      borderLeft: '4px solid',
      borderLeftColor: 'background.primary',
    })}

  ${({ theme }) =>
    color({
      theme,
      bg: 'background.primary',
      color: 'text.primary',
    })}

  &:focus {
    outline: none;
  }

  &:hover,
  :focus {
    cursor: pointer;

    ${({ theme }: ThemeProps) =>
      border({
        theme,
        borderLeft: '4px solid',
        borderLeftColor: 'brand.red',
      })}

    ${({ theme }: ThemeProps) =>
      color({
        theme,
        color: getColorForBackground('secondary'),
        bg: 'background.primary',
      })}
  }

  &:hover svg {
    fill: ${({ theme }: ThemeProps) => theme.colors.text.primary};
  }
`;

const BookMarkText = styled(Text)`
  display: flex;
  align-items: center;

  ${({ theme }) => space({ theme, ml: '-5px' })};
`;

const Overlay = styled(Box)`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  ${({ theme }) =>
    layout({ theme, display: ['block', 'block', 'block', 'none'] })}
  ${({ theme }) => color({ theme, bg: 'rgba(0, 0, 0, 0.5)' })}
`;

const SearchForm = styled.form`
  display: flex;

  ${({ theme }) =>
    color({
      theme,
      bg: 'background.secondary',
    })};

  ${({ theme }) => space({ theme, p: 3, mt: -1 })};
`;

const mobileNavLinks: MobileNavLinksType[] = [
  {
    label: 'Pro',
    url: '/pro-artikel/',
    indicator: true,
  },
  {
    label: 'News',
    url: '/news/',
    indicator: true,
  },
  {
    label: 'Magazin',
    url: '/magazin/',
  },
  {
    label: 'Guides',
    url: '/guides/',
  },
  {
    label: 'Ratgeber',
    url: '/ratgeber/',
  },
  {
    label: 'Tests & Tools',
    url: '/tests-tools/',
  },
  {
    label: 'Podcast',
    url: '/podcast/',
  },
  {
    label: 'Quiz',
    url: '/quiz/',
  },
  {
    label: 'Themen',
    url: '/tag/',
  },
  {
    label: 'Pioneers',
    url: '/pioneers/',
  },
  {
    label: 'Jobs',
    url: '/jobs/',
  },
  {
    label: 'Firmen',
    url: '/firmen/',
  },
  {
    label: 'Events',
    url: '/events/',
  },
  {
    label: 'Shop',
    url: '/store/',
  },
];

const LegacyMobileNav: React.FC<LegacyMobileNavProps> = ({
  user,
  newsIndicator,
  proIndicator,
  headerCampaignUrl,
  headerCampaignImageMobile,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box>
      {menuOpen && <Overlay onClick={() => setMenuOpen(!menuOpen)} />}

      <MobileMenuToggleBox position="relative">
        <MobileMenuToggle
          fill="#9b9b9b"
          width="2rem"
          mb="6px"
          component={MaterialMenu}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {((typeof newsIndicator === 'number' && newsIndicator > 0) ||
          (typeof proIndicator === 'number' && proIndicator > 0)) && (
          <Indicator className="tg-notification-bubble">
            {newsIndicator && proIndicator
              ? newsIndicator + proIndicator
              : newsIndicator && !proIndicator
              ? newsIndicator
              : proIndicator}
          </Indicator>
        )}
      </MobileMenuToggleBox>
      <MobileMenuContainer menuOpen={menuOpen}>
        <Box
          height="58px"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          mr={2}
        >
          <Box flexGrow={1} ml="3px" mb="1px">
            <a href="/" title="t3n - digital pioneers">
              <Logo />
            </a>
          </Box>
          <HeaderCampaign mr={5}>
            {headerCampaignImageMobile && (
              <a href={headerCampaignUrl}>
                <Image
                  src={headerCampaignImageMobile}
                  width={[80, 80, 250, 320]}
                  height={[50, 50, 120, 160]}
                  imageWidth={80}
                  imageHeight={50}
                  sizes={[80, 80, 250, 320]}
                />
              </a>
            )}
          </HeaderCampaign>
          <MobileMenuToggle
            fill="shades.grey42"
            width="2rem"
            component={MaterialClose}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </Box>
        <SearchForm action="/suche" method="get">
          <Input
            type="text"
            placeholder="t3n.de durchsuchen"
            name="q"
            id="js-search-box"
          />
          <Button variant="primary" ml={2} type="submit">
            Suchen
          </Button>
        </SearchForm>
        {mobileNavLinks.map((link, idx) => (
          <MobileMenuItem key={idx}>
            <HeaderLink href={link.url} title={link.label}>
              <Text
                m={0}
                bold={!!link.bold}
                color={link.bold ? 'text.primary' : 'inherit'}
              >
                {link.label}
                {link.label === 'News' &&
                  link.indicator &&
                  typeof newsIndicator === 'number' &&
                  newsIndicator > 0 && (
                    <Indicator className="tg-notification-bubble">
                      {newsIndicator}
                    </Indicator>
                  )}
                {link.label === 'Pro' &&
                  link.indicator &&
                  typeof proIndicator === 'number' &&
                  proIndicator > 0 && (
                    <Indicator className="tg-notification-bubble">
                      {proIndicator}
                    </Indicator>
                  )}
              </Text>
            </HeaderLink>
          </MobileMenuItem>
        ))}
        {user ? (
          <>
            <MobileMenuItem borderTopThick>
              <HeaderLink
                href={`/pioneers/profile/${user.nickName}`}
                title="Pioneers-Profil"
              >
                <Text m={0}>Pioneers-Profil</Text>
              </HeaderLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <HeaderLink href="/account" title="Konto / Pro">
                <Text m={0}>Konto / Pro</Text>
              </HeaderLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <HeaderLink href="/account/merkliste" title="Merkliste">
                <BookMarkText m={0}>
                  <Icon
                    component={MaterialBookmarkBorder}
                    fill="shades.grey143"
                  />{' '}
                  Merkliste
                </BookMarkText>
              </HeaderLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <HeaderLink href="/account/logout" title="Abmelden">
                <Text m={0}>Abmelden</Text>
              </HeaderLink>
            </MobileMenuItem>
          </>
        ) : (
          <MobileMenuItem borderTopThick>
            <HeaderLink href="/account/login" title="Abmelden">
              <Text m={0}>Anmelden</Text>
            </HeaderLink>
          </MobileMenuItem>
        )}
      </MobileMenuContainer>
    </Box>
  );
};

export default LegacyMobileNav;
