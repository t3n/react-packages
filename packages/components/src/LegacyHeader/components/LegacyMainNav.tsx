/* eslint-disable react/no-array-index-key */
import { MaterialExpandMore } from '@t3n/icons';
import React from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  border,
  layout,
  position,
  typography,
} from 'styled-system';

import { Box } from '../../Box';
import { Icon } from '../../Icon';
import { Text } from '../../Text';
import { HeaderLink } from '../LegacyHeader';

const MainNavWrapper = styled(Box)<{ isSticky?: boolean }>`
  width: 100%;
  margin: 0 auto;

  ${({ theme, isSticky }) =>
    space({ theme, p: ['0', '0', '0', isSticky ? '0 40px 0 10px' : '0 10%'] })};
`;

const MainNavDropdown = styled.ul`
  right: 0;
  z-index: 1;
  list-style-type: none;

  ${({ theme }) => color({ theme, bg: 'background.primary' })};
  ${({ theme }) => space({ theme, m: '1px', py: 2, px: 3 })};
  ${({ theme }) => layout({ theme, width: ['97%', '200px'] })};
  ${({ theme }) =>
    position({
      theme,
      position: ['fixed', 'absolute'],
      left: [1, 'auto'],
      right: [1, 0],
    })};
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 2,
      borderColor: 'shades.grey232',
      borderStyle: 'solid',
    })};
`;

const MainNavItem = styled(Box)`
  position: relative;
  cursor: pointer;

  * {
    ${({ theme }) => typography({ theme, fontSize: 2 })};
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

type MainNavLinkGroupsType = {
  label: string;
  url?: string;
  bold?: boolean;
  dropdownLinks?: {
    label: string;
    url: string;
  }[];
};

const mainNavLinkGroups: MainNavLinkGroupsType[] = [
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

export const LegacyMainNav: React.FC<{ isSticky?: boolean }> = ({
  isSticky,
}) => {
  return (
    <MainNavWrapper display="flex" className="tg-menu" isSticky={isSticky}>
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        my="15px"
        pr={isSticky ? 7 : 0}
      >
        {mainNavLinkGroups.map((group, idx) => (
          <MainNavItem key={idx}>
            <Box display="flex">
              {group.url ? (
                <HeaderLink href={group.url} title={group.label}>
                  <Text
                    m={0}
                    bold={!!group.bold}
                    color={group.bold ? 'text.primary' : 'inherit'}
                  >
                    {group.label}
                  </Text>
                </HeaderLink>
              ) : (
                <Text
                  m={0}
                  bold={!!group.bold}
                  color={group.bold ? 'text.primary' : 'inherit'}
                >
                  {group.label}
                </Text>
              )}
              {group.dropdownLinks && (
                <Icon
                  component={MaterialExpandMore}
                  width="30px"
                  height="25px"
                  mt={1}
                  ml={-1}
                  fill="text.secondary"
                />
              )}
            </Box>

            {group.dropdownLinks && (
              <MainNavDropdown>
                {group.dropdownLinks.map((link, index) => (
                  <HeaderLink href={link.url} title={link.label} key={index}>
                    <Text my={1}>{link.label}</Text>
                  </HeaderLink>
                ))}
              </MainNavDropdown>
            )}
          </MainNavItem>
        ))}
      </Box>
    </MainNavWrapper>
  );
};
