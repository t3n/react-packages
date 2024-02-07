/* eslint-disable react/no-array-index-key */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space, typography } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Box from '../../Box';
import Text from '../../Text';
import UserMenu from '../../UserMenu';
import HeaderLink from './LegacyHeaderLink';
import { MainNavDropdown } from './LegacyMainNav';

export interface LegacyT3nNavProps {
  isProMember?: boolean;
  userEmail?: string;
  userMenuItems?: ReactNode[];
}

export type T3nNavLinksType = {
  label: string;
  url: string;
  dropdownLinks?: {
    label: string;
    url: string;
  }[];
};

const MainNavItem = styled(Box)<{ isSticky?: boolean }>`
  position: relative;
  cursor: pointer;
  letter-spacing: normal;

  ${({ isSticky, theme }) => space({ theme, mr: isSticky ? '.938rem' : 0 })}

  * {
    ${({ theme }) => typography({ theme, fontSize: 2 })};
  }

  svg {
    ${({ theme }) => space({ theme, mt: '0px', ml: 1 })};
    fill: ${({ theme }: ThemeProps) => theme.colors.text.secondary};
  }

  > ${MainNavDropdown} {
    display: none;

    * {
      ${({ theme }) => typography({ theme, fontSize: 0 })};
    }
  }

  &:hover > ${MainNavDropdown} {
    display: block;
  }
`;

const T3nNav = styled(Box)`
  ${Text} {
    ${({ theme }) => space({ theme, mr: '13.2px' })};
    ${({ theme }) =>
      typography({ theme, fontSize: '12px', lineHeight: '12px' })};
  }
  svg {
    fill: ${({ theme }: ThemeProps) => theme.colors.text.secondary};
  }
  &:hover {
    svg {
      fill: ${({ theme }: ThemeProps) => theme.colors.text.primary};
    }
  }
`;

const ArrowDownIcon: React.FC = () => (
  <svg
    viewBox="0 0 12 7"
    width="9px"
    height="8px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.677 7.03l-.177.177-.354-.353-5-5L.793 1.5 1.5.793l.354.353L6.5 5.793l.896-.897 1.25-1.25.399-.398 2.101-2.102.354-.353.707.707-.353.354-.4.398-4.6 4.602-.177.176z" />
  </svg>
);

const t3nNavLinks: T3nNavLinksType[] = [
  {
    label: 'Über t3n',
    url: '/ueber-t3n/',
    dropdownLinks: [
      {
        label: 'Über t3n',
        url: '/ueber-t3n/',
      },
      {
        label: 'Meet the Team',
        url: '/team',
      },
      {
        label: 't3n Backstage Blog',
        url: 'https://t3nbackstageblog.medium.com',
      },
      {
        label: 'Presse',
        url: '/presse/presseinformationen/',
      },
      {
        label: 'FAQ',
        url: 'https://faq.t3n.de',
      },
      {
        label: 'Redaktionelles Leitbild',
        url: '/redaktion/redaktionelles-leitbild',
      },
    ],
  },
  {
    label: 'Jobs bei t3n',
    url: '/jobs-bei-t3n/',
  },
  {
    label: 'Mediadaten',
    url: '/mediadaten/de/',
  },
];

const LegacyT3nNav: React.FC<LegacyT3nNavProps> = ({
  isProMember,
  userEmail,
  userMenuItems,
}) => {
  return (
    <T3nNav
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      pb="2px"
    >
      {t3nNavLinks.map((link, idx) => (
        <MainNavItem key={idx}>
          <HeaderLink href={link.url} title={link.label} key={idx}>
            <Box display="flex" justifyContent="between" alignItems="center">
              <Text>
                {link.label}
                {link.dropdownLinks && <ArrowDownIcon />}
              </Text>
            </Box>
          </HeaderLink>
          {link.dropdownLinks && (
            <MainNavDropdown>
              {link.dropdownLinks.map((dropdownlink, index) => (
                <HeaderLink
                  href={dropdownlink.url}
                  title={dropdownlink.label}
                  key={index}
                >
                  <Text>{dropdownlink.label}</Text>
                </HeaderLink>
              ))}
            </MainNavDropdown>
          )}
        </MainNavItem>
      ))}
      <UserMenu
        isProMember={isProMember}
        userEmail={userEmail}
        light
        userMenuItems={userMenuItems}
      />
    </T3nNav>
  );
};

export default LegacyT3nNav;
