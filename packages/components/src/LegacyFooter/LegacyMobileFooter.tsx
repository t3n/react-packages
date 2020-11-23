import React from 'react';
import styled from 'styled-components';
import { color, space } from 'styled-system';

import {
  SocialFacebook,
  SocialTwitter,
  SocialXing,
  SocialLinkedin,
  SocialInstagram,
  MaterialLocalPostOffice,
  MaterialNotifications,
  MaterialRssFeed,
  MaterialAdd,
} from '@t3n/icons';
import { ThemeProps } from '@t3n/theme';

import { Text } from '../Text';
import { Box } from '../Box';

const FooterLink = styled.a`
  text-decoration: none;
  ${({ theme }) => color({ theme, color: 'text.secondary' })};

  &:hover,
  &:focus {
    ${({ theme }) => color({ theme, color: 'text.highlight' })};
    text-decoration: none;
  }
`;

const LinkLabel = styled(Text)`
  white-space: nowrap;
`;

const MobileLinksWrapper = styled(Box)`
  text-align: center;
`;

const SocialLink = styled.a`
  text-decoration: none;
  ${({ theme }) => space({ px: 2, theme })}
  ${({ theme }) => color({ theme, color: 'text.secondary' })};

  > svg:hover,
  > svg:focus {
    fill: ${({ theme }: ThemeProps) => theme.colors.text.highlight};
    text-decoration: none;
  }
`;

type MobileLinkType = {
  label: string;
  url: string;
  bold?: boolean;
}[];

const legacyMobileLinks: MobileLinkType = [
  {
    label: 'Pro',
    url: '/pro/',
    bold: true,
  },
  {
    label: 'Jobs bei t3n',
    url: '/jobs-bei-t3n',
  },
  {
    label: 'Unterstütze t3n',
    url: 'https://t3n.de/unterstuetze-t3n',
  },
  {
    label: 'Mediadaten',
    url: '/mediadaten/de',
  },
  {
    label: 'Impressum',
    url: '/impressum/',
  },
  {
    label: 'Nutzungsbedingungen',
    url: '/nutzungsbedingungen/',
  },
  {
    label: 'AGB',
    url: '/agb/',
  },
  {
    label: 'Datenschutz',
    url: '/datenschutz/',
  },
];

const LegacyMobileLinks = () => {
  return (
    <MobileLinksWrapper display="grid" flexDirection="column">
      {legacyMobileLinks.map((link) => (
        <FooterLink href={link.url}>
          <LinkLabel
            mt={0}
            mb={1}
            bold={!!link.bold}
            color={link.bold ? 'text.primary' : 'inherit'}
          >
            {link.label}
          </LinkLabel>
        </FooterLink>
      ))}
    </MobileLinksWrapper>
  );
};

type MobileSocialLinkType = {
  title: string;
  url: string;
  icon: JSX.Element;
  rel?: string;
  target?: string;
}[];

const legacyMobileSocialLinks: MobileSocialLinkType = [
  {
    title: 'Facebook',
    url: 'https://facebook.com/t3nMagazin',
    icon: <SocialFacebook fill="#8F8F8F" width="16px" height="16px" />,
    target: '_blank',
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com/t3n_magazin/',
    icon: <SocialInstagram fill="#8F8F8F" width="16px" height="16px" />,
    target: '_blank',
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/t3n',
    icon: <SocialTwitter fill="#8F8F8F" width="16px" height="16px" />,
    target: '_blank',
  },
  {
    title: 'Xing',
    url: 'https://xing.com/news/pages/t3n-magazin-67',
    icon: <SocialXing fill="#8F8F8F" width="16px" height="16px" />,
    target: '_blank',
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/company/t3n-magazin-yeebase-media-gmbh/',
    icon: <SocialLinkedin fill="#8F8F8F" width="16px" height="16px" />,
    target: '_blank',
  },
  {
    title: 't3n Newsletter',
    url: 'https://t3n.de/info/t3n-newsletter/',
    icon: <MaterialLocalPostOffice fill="#8F8F8F" width="20px" height="20px" />,
    rel: 'follow',
  },
  {
    title: 'Notifications',
    url: 'https://t3n.de/info/push-notifications/',
    icon: <MaterialNotifications fill="#8F8F8F" width="20px" height="20px" />,
    rel: 'follow',
  },
  {
    title: 't3n als RSS abonnieren',
    url: '/social-media#RSS-Feeds:_Immer_up_to_date',
    icon: <MaterialRssFeed fill="#8F8F8F" width="20px" height="20px" />,
    rel: 'follow',
  },
  {
    title: 'Folge t3n auf deinen Lieblingskanälen',
    url: '/social-media/',
    icon: <MaterialAdd fill="#8F8F8F" width="20px" height="20px" />,
    rel: 'follow',
  },
];

export const LegacyMobileSocialLinks = () => {
  return (
    <Box display="flex" justifyContent="center">
      {legacyMobileSocialLinks.map((link, idx) => (
        <SocialLink
          href={link.url}
          title={link.title}
          target={link.target ? link.target : '_self'}
          rel={link.rel ? link.rel : undefined}
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
        >
          {link.icon}
        </SocialLink>
      ))}
    </Box>
  );
};

const StyledLegacyMobileSocialLinks = styled(LegacyMobileSocialLinks)`
  ${({ theme }) => space({ my: 4, theme })};
`;

const LegacyMobileFooter = () => {
  return (
    <>
      <LegacyMobileLinks />
      <StyledLegacyMobileSocialLinks />
      <Text align="center" mt={0}>
        ©{' '}
        <FooterLink
          href="https://yeebase.com/"
          target="_blank"
          title="Die externe Seite im neuen Tab/Fenster öffnen"
          rel="noopener"
        >
          yeebase media GmbH
        </FooterLink>{' '}
        2005 - 2020
      </Text>
      <Text align="center">
        <FooterLink href="/" className="js-switch-to-desktop">
          Desktop-Seite
        </FooterLink>
      </Text>
    </>
  );
};

export default LegacyMobileFooter;
