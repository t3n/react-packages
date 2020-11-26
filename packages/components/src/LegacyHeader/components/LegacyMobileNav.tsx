/* eslint-disable react/no-array-index-key */
import { MaterialClose, MaterialMenu } from '@t3n/icons';
import { getColorForBackground, ThemeProps } from '@t3n/theme';
import React, { useState } from 'react';
import styled from 'styled-components';
import { border, color, layout, space } from 'styled-system';

import { Box } from '../../Box';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Input } from '../../Input';
import { LegacyUserMenuProps } from '../../LegacyUserMenu';
import { Text } from '../../Text';
import { HeaderLink } from '../LegacyHeader';
import { NewsIndicator } from './LegacyMainNav';

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

const MobileMenuItem = styled.a<ThemeProps>`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  text-decoration: none;

  ${({ theme }) =>
    border({
      theme,
      borderTop: '1px solid',
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

  ${({ theme }) => space({ theme, p: 3 })};
`;

type MobileNavLinksType = {
  label: string;
  url: string;
  indicator?: boolean;
  bold?: boolean;
};

const mobileNavLinks: MobileNavLinksType[] = [
  {
    label: 'Pro',
    url: '/pro/',
    bold: true,
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
    label: 'Podcast',
    url: '/podcast/',
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

const LegacyMobileNav: React.FC<{
  user: LegacyUserMenuProps['user'];
  newsIndicator?: number;
}> = ({ user, newsIndicator }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box>
      {menuOpen && <Overlay onClick={() => setMenuOpen(!menuOpen)} />}

      <MobileMenuToggle
        fill="shades.grey42"
        width="2rem"
        mb={2}
        component={MaterialMenu}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      <MobileMenuContainer menuOpen={menuOpen}>
        <Box
          height="58px"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          mr={2}
        >
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
                {link.indicator && (
                  <NewsIndicator className="tg-notification-bubble">
                    {newsIndicator}
                  </NewsIndicator>
                )}
              </Text>
            </HeaderLink>
          </MobileMenuItem>
        ))}
        {user ? (
          <>
            <MobileMenuItem>
              <HeaderLink href="/account/" title="Mein Konto / Pro">
                <Text m={0}>Mein Konto / Pro</Text>
              </HeaderLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <HeaderLink href="/account/logout/" title="Abmelden">
                <Text m={0}>Abmelden</Text>
              </HeaderLink>
            </MobileMenuItem>
          </>
        ) : (
          <MobileMenuItem>
            <HeaderLink href="/account/login/" title="Abmelden">
              <Text m={0}>Anmelden</Text>
            </HeaderLink>
          </MobileMenuItem>
        )}
      </MobileMenuContainer>
    </Box>
  );
};

export default LegacyMobileNav;
