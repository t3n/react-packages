import React from 'react';
import styled from 'styled-components';
import { color, border, layout } from 'styled-system';

import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import { Text } from '../Text';
import { Box } from '../Box';
import { Heading } from '../Heading';
import { Image } from '../Image';

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

const DesktopLinkWrapper = styled(Grid)`
  ${({ theme }) => layout({ theme, width: ['100%', '100%', '100%', '636px'] })};
`;

const DesktopLinkGroup = styled(GridItem)`
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 0,
      borderColor: 'shades.grey143',
      borderStyle: 'solid',
      borderRightWidth: 1,
    })};

  &:last-child {
    border: none;
  }
`;

const DesktopBottomWrapper = styled(Box)`
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 0,
      borderColor: 'shades.grey143',
      borderStyle: 'solid',
      borderTopWidth: 1,
    })};
`;

type DesktopLinkGroupsType = {
  label: string;
  links: {
    label: string;
    title?: string;
    url: string;
    target?: string;
    rel?: string;
    bold?: boolean;
  }[];
}[];

const legacyDesktopLinkGroups: DesktopLinkGroupsType = [
  {
    label: 'yeebase media',
    links: [
      {
        label: 'Über t3n',
        url: '/ueber-t3n/',
      },
      {
        label: 'Team',
        title: 'Die externe Seite im neuen Tab/Fenster öffnen',
        url: 'https://yeebase.com/team',
        target: '_blank',
        rel: 'noreferrer noopener',
      },
      {
        label: 'Jobs bei t3n',
        url: '/jobs-bei-t3n/',
      },
      {
        label: 't3n Backstage Blog',
        title: 'Die externe Seite im neuen Tab/Fenster öffnen',
        url: 'https://medium.com/@t3nbackstageblog',
        target: '_blank',
        rel: 'noreferrer noopener',
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
        label: 'AGB',
        url: '/agb/',
      },
      {
        label: 'Datenschutz',
        url: '/datenschutz/',
      },
      {
        label: 'Impressum',
        url: '/impressum/',
      },
    ],
  },
  {
    label: 't3n',
    links: [
      {
        label: 'Pro',
        url: 'https://t3n.de/pro/',
        bold: true,
      },
      {
        label: 'News',
        url: 'https://t3n.de/news/',
      },
      {
        label: 'Magazin',
        url: 'https://t3n.de/magazin/',
      },
      {
        label: 'Podcast',
        url: 'https://t3n.de/podcast/',
      },
      {
        label: 'Themen',
        url: 'https://t3n.de/tag/',
      },
      {
        label: 'Pioneers',
        url: 'https://t3n.de/pioneers/',
      },
      {
        label: 'Jobs',
        url: 'https://t3n.de/jobs/',
      },
      {
        label: 'Firmen',
        url: 'https://t3n.de/firmen/',
      },
      {
        label: 'Deals',
        url: 'https://t3n.de/deals/',
      },
      {
        label: 'Events',
        url: 'https://t3n.de/events/',
      },
      {
        label: 'Shop',
        url: 'https://t3n.de/store/',
      },
      {
        label: 'Newsletter',
        url: '/info/t3n-newsletter/',
      },
      {
        label: 'Newsarchiv',
        url: 'https://t3n.de/archive/',
      },
    ],
  },
  {
    label: 'RSS-Feeds',
    links: [
      {
        label: 'Aktuelle News',
        url: 'https://t3n.de/rss.xml',
      },
      {
        label: 'Die neuesten Artikel',
        title: 'Die externe Seite im neuen Tab/Fenster öffnen',
        url: 'http://feeds2.feedburner.com/t3n-magazin/',
        target: '_blank',
        rel: 'noreferrer noopener',
      },
      {
        label: 'Aktuelle Jobs',
        url: 'https://t3n.de/jobs/rss/all/',
      },
    ],
  },
  {
    label: 'Kontakt',
    links: [
      {
        label: 'E-Mail',
        title: 'Die externe Seite im neuen Tab/Fenster öffnen',
        url: 'mailto:support@t3n.de',
        target: '_blank',
        rel: 'noreferrer noopener',
      },
      {
        label: 'Pressebereich',
        url: 'https://t3n.de/presse/presseinformationen/',
      },
      {
        label: 'Redaktion',
        title: 'Die externe Seite im neuen Tab/Fenster öffnen',
        url: 'mailto:redaktion@t3n.de',
        target: '_blank',
        rel: 'noreferrer noopener',
      },
      {
        label: 'FAQ',
        title: 'Die externe Seite im neuen Tab/Fenster öffnen',
        url: 'https://faq.t3n.de/',
        target: '_blank',
        rel: 'noreferrer noopener',
      },
    ],
  },
];

const LegacyDesktopLinks = () => {
  return (
    <DesktopLinkWrapper>
      {legacyDesktopLinkGroups.map((group) => (
        <DesktopLinkGroup
          display="flex"
          flexDirection="column"
          width={[1 / 2, 1 / 4]}
          px={4}
        >
          <Text mt={0} bold>
            {group.label}
          </Text>
          {group.links.map((link) => (
            <FooterLink
              href={link.url}
              target={link.target || '_self'}
              rel={link.rel || undefined}
              title={link.title || undefined}
            >
              <LinkLabel
                m={0}
                bold={!!link.bold}
                color={link.bold ? 'text.primary' : 'inherit'}
              >
                {link.label}
              </LinkLabel>
            </FooterLink>
          ))}
        </DesktopLinkGroup>
      ))}
    </DesktopLinkWrapper>
  );
};

const LegacyDesktopBottom = () => {
  return (
    <DesktopBottomWrapper mt={[2, 4, 6]} pt={[2, 4, 6]} px={2}>
      <Grid>
        <GridItem width={[1, 1 / 2]} display="flex" flexDirection="column">
          agof- und IVW-geprüft
          <Box mt={3} mb={5}>
            <FooterLink
              href="http://www.agof.de/"
              target="_blank"
              title="Die externe Seite im neuen Tab/Fenster öffnen"
              rel="noreferrer noopener"
            >
              <Image
                src="//d1quwwdmdfumn6.cloudfront.net/t3n/2018/images/logos/agof-logo.png"
                width="80px"
                alt="agof"
              />
            </FooterLink>
            <FooterLink
              href="http://www.ivw.de/"
              target="_blank"
              title="Die externe Seite im neuen Tab/Fenster öffnen"
              rel="noreferrer noopener"
            >
              <Image
                src="//d1quwwdmdfumn6.cloudfront.net/t3n/2018/images/logos/ivw.png"
                width="50px"
                alt="IVW"
              />
            </FooterLink>
          </Box>
        </GridItem>
        <GridItem width={[1, 1 / 2]} display="flex" flexDirection="column">
          Ausgezeichnet von kununu
          <Box mt={3} mb={5}>
            <FooterLink
              href="https://www.kununu.com/de/t3n/"
              rel="nofollow noopener noreferrer"
              target="_blank"
              title="Die externe Seite im neuen Tab/Fenster öffnen"
            >
              <Image
                src="//d1quwwdmdfumn6.cloudfront.net/t3n/2018/images/logos/kununu-top-company.png"
                width="87px"
                alt="kununu Top Company"
              />
            </FooterLink>
            <FooterLink
              href="https://www.kununu.com/de/t3n/"
              rel="nofollow noopener noreferrer"
              target="_blank"
              title="Die externe Seite im neuen Tab/Fenster öffnen"
            >
              <Image
                src="//d1quwwdmdfumn6.cloudfront.net/t3n/2018/images/logos/kununu-open-company.png"
                width="87px"
                alt="kununu Open Company"
              />
            </FooterLink>
          </Box>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem width={[1, 1 / 2]}>
          <FooterLink href="/" className="js-switch-to-mobile">
            Mobile Seite
          </FooterLink>{' '}
          • ©{' '}
          <FooterLink
            href="https://yeebase.com/"
            target="_blank"
            title="Die externe Seite im neuen Tab/Fenster öffnen"
            rel="noreferrer noopener"
          >
            yeebase media GmbH
          </FooterLink>{' '}
          2005 - {new Date().getFullYear()}
        </GridItem>
        <GridItem width={[1, 1 / 2]}>
          powered by{' '}
          <FooterLink
            href="https://www.neos.io/"
            rel="nofollow noopener noreferrer"
            target="_blank"
            title="Die externe Seite im neuen Tab/Fenster öffnen"
          >
            Neos
          </FooterLink>
        </GridItem>
      </Grid>
    </DesktopBottomWrapper>
  );
};

const LegacyDesktopFooter = () => {
  return (
    <>
      <Grid>
        <GridItem width={[1, 1, 1, '280px']} px={0} pl={3}>
          <Heading as="h3" mt={0}>
            Wir helfen digitalen Pionieren, glücklich zu arbeiten und zu leben.
          </Heading>
        </GridItem>
        <LegacyDesktopLinks />
      </Grid>
      <LegacyDesktopBottom />
    </>
  );
};

export default LegacyDesktopFooter;
