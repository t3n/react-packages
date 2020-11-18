import React from 'react';
import styled from 'styled-components';
import { color, space } from 'styled-system';

import { Box } from '../Box';
import { Text } from '../Text';
import { LegacyMobileSocialLinks } from '../LegacyFooter/LegacyMobileFooter';
import { Logo } from '../Logo';

const Header = styled(Box)`
  z-index: 300;
  ${({ theme }) =>
    color({ theme, bg: 'shades.white', color: 'text.secondary' })};
  ${({ theme }) => space({ px: 4, theme })};
`;

const MainNav = styled(Box)``;

const MainNavLinkGroup = styled(Box)``;

const DropdownLink = styled.a`
  text-decoration: none;
  ${({ theme }) => color({ theme, color: 'text.secondary' })};

  &:hover,
  &:focus {
    ${({ theme }) => color({ theme, color: 'text.primary' })};
    text-decoration: none;
  }
`;

type MainNavLinkGroupsType = {
  label: string;
  url?: string;
  bold?: boolean;
  dropdownLinks?: {
    label: string;
    url: string;
  }[];
}[];

const legacyMainNavLinkGroups: MainNavLinkGroupsType = [
  {
    label: 'Pro',
    url: '/pro/',
    bold: true,
  },
  {
    label: 'News',
    url: '/news/',
  },
  {
    label: 'Wissen',
    dropdownLinks: [
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
        label: 'Newsletter',
        url: '/info/t3n-newsletter/',
      },
    ],
  },
  {
    label: 'Themen',
    url: '/tag/',
    dropdownLinks: [
      {
        label: 'Digitale Wirtschaft',
        url: '/tag/digitale-wirtschaft/',
      },
      {
        label: 'Software & Infrastruktur',
        url: '/tag/software-infrastruktur/',
      },
      {
        label: 'Entwicklung & Design',
        url: '/tag/entwicklung-design/',
      },
      {
        label: 'Marketing',
        url: '/tag/marketing/',
      },
      {
        label: 'Gadgets & Lifestyle',
        url: '/tag/gadgets-lifestyle/',
      },
      {
        label: 'Startups',
        url: '/tag/startups/',
      },
      {
        label: 'Karriere',
        url: '/tag/karriere/',
      },
      {
        label: 'E-Commerce',
        url: '/tag/e-commerce/',
      },
      {
        label: 'Finance',
        url: '/tag/finance/',
      },
      {
        label: 'Gaming',
        url: '/tag/gaming/',
      },
      {
        label: 'Mobilität',
        url: '/tag/mobilitaet/',
      },
      {
        label: 'Digitale Gesellschaft',
        url: '/tag/digitale-gesellschaft/',
      },
    ],
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
    dropdownLinks: [
      {
        label: 'Eventkalender',
        url: '/events/',
      },
      {
        label: 'Medienkooperationen',
        url: '/events/pakete/',
      },
    ],
  },
  {
    label: 'Shop',
    url: '/store/',
  },
];

export const LegacyHeader: React.FC = () => {
  return (
    <Header className="tg-header">
      <Box className="c-header__main">
        <a href="/" title="t3n - digital pioneers">
          <Logo />
        </a>

        <Box className="c-header__campaign">
          <a
            id="header-campaign"
            className="c-header__campaign-image"
            href="https://t3n.de/headercampaign-b"
          >
            <img
              id="header-rotation"
              alt=""
              src="https://storage.googleapis.com/t3n-media/t3n-headercampaign-b.png"
            />
          </a>
        </Box>

        <MainNav display="flex" className="tg-menu">
          {legacyMainNavLinkGroups.map((group) => (
            <MainNavLinkGroup
              display="flex"
              flexDirection="column"
              width={[1 / 2, 1 / 4]}
              px={4}
            >
              <Text
                mt={0}
                bold={!!group.bold}
                color={group.bold ? 'text.primary' : 'inherit'}
              >
                {group.label}
              </Text>
              {group.dropdownLinks &&
                group.dropdownLinks.map((link) => (
                  <DropdownLink href={link.url || undefined} title={link.label}>
                    <Text m={0}>{link.label}</Text>
                  </DropdownLink>
                ))}
            </MainNavLinkGroup>
          ))}
        </MainNav>

        <nav className="c-submenu tg-submenu">
          <ul className="c-submenu__list">
            <li className="c-submenu__item">
              <a
                href="https://t3n.de/tag/homeoffice/"
                className="c-submenu__link"
                rel=""
              >
                Homeoffice 🖥
              </a>
            </li>
            <li className="c-submenu__item">
              <a
                href="https://t3n.de/adventskalender"
                className="c-submenu__link"
                rel=""
              >
                t3n Adventskalender
              </a>
            </li>
            <li className="c-submenu__item">
              <a
                href="https://t3n.de/news/m1-macbooks-mehr-highlights-apple-event-1336654/"
                className="c-submenu__link"
                rel=""
              >
                Apple-Event
              </a>
            </li>
            <li className="c-submenu__item">
              <a
                href="https://t3n.de/tag/iphone/"
                className="c-submenu__link"
                rel=""
              >
                iPhone 12
              </a>
            </li>
            <li className="c-submenu__item">
              <a
                href="https://t3n.de/tag/playstation/"
                className="c-submenu__link"
                rel=""
              >
                PS5
              </a>
            </li>
            <li className="c-submenu__item">
              <a
                href="https://t3n.de/deals/"
                className="c-submenu__link"
                rel=""
              >
                t3n Deals
              </a>
            </li>
            <li className="c-submenu__item">
              <a
                href="https://t3n.de/brandhub/adobe/"
                className="c-submenu__link"
                rel=""
              >
                Adobe
              </a>
            </li>
          </ul>
        </nav>

        <Box className="c-search">
          <form action="/suche" method="get" className="c-search__form">
            <input
              type="text"
              placeholder="t3n.de durchsuchen"
              className="c-search__input"
              name="q"
              id="js-search-box"
            />
            <button type="submit" className="c-search__submit">
              Lupe
            </button>
          </form>
        </Box>
      </Box>

      <nav className="c-metamenu tg-metamenu">
        <ul className="c-metamenu__list">
          <li className="c-metamenu__item">
            <a
              className="c-metamenu__link"
              href="https://t3n.de/ueber-t3n/"
              rel=""
            >
              Über t3n
            </a>
          </li>
          <li className="c-metamenu__item">
            <a
              className="c-metamenu__link"
              href="https://t3n.de/jobs-bei-t3n/"
              rel=""
            >
              Jobs bei t3n
            </a>
          </li>
          <li className="c-metamenu__item">
            <a
              className="c-metamenu__link"
              href="https://t3n.de/mediadaten/de/"
              rel=""
            >
              Mediadaten
            </a>
          </li>
          <li className="c-metamenu__item">
            <a
              className="c-metamenu__link"
              href="/account/login?redirect=https://t3n.de/"
              rel=""
            >
              <img
                title="Birte Rohden"
                alt="Birte Rohden"
                width="25"
                height="25"
                className="c-image -border -rounded"
                src="https://images.t3n.sc/pioneers/e70958a29a913bd8260dfbedd11e41521922a530/biiiirte.jpg?auto=compress%2Cformat&amp;fit=crop&amp;h=25&amp;ixlib=php-3.1.0&amp;max-h=25&amp;q=65&amp;w=25&amp;s=f808e7c2642e06f6553c521194ba2638"
              />
              Angle Down
            </a>
            <ul className="c-dropdown u-text-extrasmall">
              <li className="c-dropdown__item">
                <a
                  className="c-dropdown__link"
                  href="/pioneers/profile/"
                  rel=""
                >
                  Mein Pioneers-Profil
                </a>
              </li>
              <li className="c-dropdown__item">
                <a className="c-dropdown__link" href="/account" rel="">
                  Mein Konto / Pro
                </a>
              </li>
              <li className="c-dropdown__item">
                <hr />
              </li>
              <li className="c-dropdown__item">
                <a className="c-dropdown__link" href="/account/logout" rel="">
                  Abmelden
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <LegacyMobileSocialLinks />
      </nav>
    </Header>
  );
};
