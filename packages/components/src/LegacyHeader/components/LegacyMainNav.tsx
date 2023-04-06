/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled, { css } from 'styled-components';
import {
  border,
  color,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Box from '../../Box';
import Text from '../../Text';
import HeaderLink from './LegacyHeaderLink';

export interface LegacyMainNavProps {
  isSticky?: boolean;
  newsIndicator?: number;
  proIndicator?: number;
}

export type MainNavLinkGroupsType = {
  label: string;
  url?: string;
  bold?: boolean;
  indicator?: boolean;
  dropdownLinks?: {
    label: string;
    url: string;
  }[];
};

const ArrowDownIcon: React.FC = () => (
  <svg
    viewBox="0 0 12 7"
    width="13px"
    height="15px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.677 7.03l-.177.177-.354-.353-5-5L.793 1.5 1.5.793l.354.353L6.5 5.793l.896-.897 1.25-1.25.399-.398 2.101-2.102.354-.353.707.707-.353.354-.4.398-4.6 4.602-.177.176z" />
  </svg>
);

const MainNavWrapper = styled.nav<Pick<LegacyMainNavProps, 'isSticky'>>`
  width: 100%;
  margin: 0 auto;
  display: flex;

  ${({ theme, isSticky }) =>
    space({ theme, p: ['0', '0', isSticky ? '0 40px 0 10px' : '0 10%'] })};
`;

const MainNavInnerWrapper = styled(Box)<Pick<LegacyMainNavProps, 'isSticky'>>`
  width: 100%;
  margin-top: 14px;
  margin-bottom: 13px;
  display: flex;

  ${({ isSticky }) =>
    isSticky
      ? css`
          justify-content: flex-start;
        `
      : css`
          justify-content: space-between;
        `}
`;

export const MainNavDropdown = styled.ul`
  right: 0;
  z-index: 10;
  list-style-type: none;
  letter-spacing: 0;

  ${({ theme }) => color({ theme, bg: 'background.primary' })};
  ${({ theme }) => space({ theme, m: '1px', py: '0.625rem', px: '1.25rem' })};
  ${({ theme }) => layout({ theme, width: ['97%', 'max-content'] })};
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

const MainNavItem = styled(Box)<Pick<LegacyMainNavProps, 'isSticky'>>`
  position: relative;
  cursor: pointer;
  letter-spacing: normal;

  ${({ isSticky, theme }) => space({ theme, mr: isSticky ? '.938rem' : 0 })}

  &:last-child {
    margin-right: 0;
  }

  * {
    ${({ theme }) => typography({ theme, fontSize: 2 })};
  }

  svg {
    ${({ theme }) => space({ theme, mt: '9px', ml: 1 })};
    fill: ${({ theme }: ThemeProps) => theme.colors.text.secondary};
  }

  &:hover {
    svg {
      fill: ${({ theme }: ThemeProps) => theme.colors.text.primary};
    }
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

const StyledText = styled(Text)`
  &:hover {
    ${({ theme }) => color({ theme, color: 'text.primary' })};
  }
`;

export const Indicator = styled.span`
  display: inline-block;
  text-align: center;
  letter-spacing: 0;
  line-height: 1rem;
  min-width: 1rem;
  border-radius: 0.5rem;

  ${({ theme }) => space({ theme, ml: '5px' })};
  ${({ theme }) =>
    position({
      theme,
      position: 'relative',
      top: '-2px',
    })};
  ${({ theme }) => typography({ theme, fontSize: '12px' })};
  ${({ theme }) =>
    color({ theme, color: 'shades.white', bg: 'background.highlight' })};
`;

const mainNavLinkGroups: MainNavLinkGroupsType[] = [
  {
    label: 'Pro',
    url: '/pro-artikel',
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
    label: 'Wissen',
    dropdownLinks: [
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
        label: 'Newsletter',
        url: '/info/t3n-newsletter/',
      },
      {
        label: 'Quiz',
        url: '/quiz/',
      },
    ],
  },
  {
    label: 'Themen',
    url: '/tag/',
    dropdownLinks: [
      {
        label: 'Software & Entwicklung',
        url: '/tag/software-entwicklung/',
      },
      {
        label: 'UX & Design',
        url: '/tag/ux-and-design/',
      },
      {
        label: 'Marketing',
        url: '/tag/marketing/',
      },
      {
        label: 'Hardware & Gadgets',
        url: '/tag/hardware-gadgets/',
      },
      {
        label: 'Startups & Economy',
        url: '/tag/startups-economy/',
      },
      {
        label: 'Arbeitswelt',
        url: '/tag/arbeitswelt/',
      },
      {
        label: 'E-Commerce',
        url: '/tag/e-commerce/',
      },
      {
        label: 'New Finance',
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
        label: 'Future & Science',
        url: '/tag/future-science/',
      },
      {
        label: 'Buzz & Memes',
        url: '/tag/buzz-memes/',
      },
    ],
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

const LegacyMainNav: React.FC<LegacyMainNavProps> = ({
  isSticky,
  newsIndicator,
  proIndicator,
}) => {
  return (
    <MainNavWrapper className="tg-menu" isSticky={isSticky}>
      <MainNavInnerWrapper isSticky={isSticky}>
        {mainNavLinkGroups.map((group, idx) => (
          <MainNavItem key={idx} isSticky={isSticky}>
            <Box display="flex">
              {group.url ? (
                <HeaderLink href={group.url} title={group.label}>
                  <Text
                    m={0}
                    bold={!!group.bold}
                    color={group.bold ? 'text.primary' : 'inherit'}
                  >
                    {group.label}
                    {group.label === 'News' &&
                      group.indicator &&
                      typeof newsIndicator === 'number' &&
                      newsIndicator > 0 && (
                        <Indicator className="tg-notification-bubble">
                          {newsIndicator}
                        </Indicator>
                      )}
                    {group.label === 'Pro' &&
                      group.indicator &&
                      typeof proIndicator === 'number' &&
                      proIndicator > 0 && (
                        <Indicator className="tg-notification-bubble">
                          {proIndicator}
                        </Indicator>
                      )}
                  </Text>
                </HeaderLink>
              ) : (
                <StyledText
                  m={0}
                  bold={!!group.bold}
                  color={group.bold ? 'text.primary' : 'inherit'}
                >
                  {group.label}
                </StyledText>
              )}
              {group.dropdownLinks && <ArrowDownIcon />}
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
      </MainNavInnerWrapper>
    </MainNavWrapper>
  );
};

export default LegacyMainNav;
