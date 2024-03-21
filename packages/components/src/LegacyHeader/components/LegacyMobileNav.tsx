/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import styled from 'styled-components';
import { border, color, layout, position, space } from 'styled-system';

import {
  MaterialBookmarkBorder,
  MaterialClose,
  MaterialMenu,
  MaterialPersonOutline,
  T3nPro,
} from '@t3n/icons';
import { ThemeProps } from '@t3n/theme';

import Box from '../../Box';
import Button from '../../Button';
import Icon from '../../Icon';
import Image from '../../Image';
import Input from '../../Input';
import Logo from '../../Logo';
import Text from '../../Text';
import HeaderCampaign from './LegacyHeaderCampaign';

export interface LegacyMobileNavProps {
  headerCampaignUrl: string;
  headerCampaignImageMobile?: string;
  userEmail?: string;
  isProMember?: boolean;
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
      color: 'text.secondary',
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
        color: 'text.primary',
        bg: 'background.primary',
      })}
  }

  &:hover svg {
    fill: ${({ theme }: ThemeProps) => theme.colors.text.primary};
  }
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
    url: '/pro-artikel',
    indicator: false,
  },
  {
    label: 'News',
    url: '/news/',
    indicator: false,
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
    label: 'Onlinekurse',
    url: '/online-kurse/',
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
    label: 'Podcasts',
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
  headerCampaignUrl,
  headerCampaignImageMobile,
  userEmail,
  isProMember,
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
            <a
              href="/"
              title="t3n - digital pioneers"
              aria-label="t3n - digital pioneers"
            >
              <Logo />
            </a>
          </Box>
          <HeaderCampaign mr={5}>
            {headerCampaignImageMobile && (
              <a href={headerCampaignUrl} aria-label="Kampagnen-URL">
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
          <MobileMenuItem key={idx} href={link.url} title={link.label}>
            <Text
              m={0}
              bold={!!link.bold}
              color={link.bold ? 'text.primary' : 'inherit'}
            >
              {link.label}
            </Text>
          </MobileMenuItem>
        ))}
        {userEmail ? (
          <>
            {isProMember && (
              <MobileMenuItem
                borderTopThick
                href="/account/pro"
                title="Pro-Membership"
              >
                <T3nPro width="36px" height="18px" style={{ marginRight: 8 }} />
                Pro-Membership
              </MobileMenuItem>
            )}
            <MobileMenuItem
              borderTopThick={!isProMember}
              href="/account/merkliste"
              title="Merkliste"
            >
              <MaterialBookmarkBorder
                fill="#5f5f5f"
                width="24"
                height="24"
                style={{ marginRight: 4 }}
              />
              Merkliste
            </MobileMenuItem>
            <MobileMenuItem href="/account/" title="Konto">
              <MaterialPersonOutline
                fill="#5f5f5f"
                width="24"
                height="24"
                style={{ marginRight: 4 }}
              />
              Konto
            </MobileMenuItem>
            <MobileMenuItem href="/account/logout" title="Abmelden">
              <Text m={0}>Abmelden</Text>
            </MobileMenuItem>
          </>
        ) : (
          <MobileMenuItem borderTopThick href="/account/login" title="Abmelden">
            <Text m={0}>Anmelden</Text>
          </MobileMenuItem>
        )}
      </MobileMenuContainer>
    </Box>
  );
};

export default LegacyMobileNav;
