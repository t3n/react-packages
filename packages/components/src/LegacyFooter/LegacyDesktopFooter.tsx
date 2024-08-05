import React from 'react';
import styled from 'styled-components';
import { border, color, layout, space, typography } from 'styled-system';

import Box from '../Box';
import Grid from '../Grid';
import GridItem from '../GridItem';
import Image from '../Image';
import Text from '../Text';

export type DesktopLinkGroupsType = {
  label: string;
  links: {
    label: string;
    title?: string;
    url: string;
    target?: string;
    rel?: string;
    bold?: boolean;
    onClick?: (e: React.MouseEvent, privacyManagerId?: string) => void;
  }[];
}[];

export interface LegacyDesktopFooterProps {
  privacyManagerId: string;
}

const LegacyDesktopFooterWrapper = styled(Box)`
  ${({ theme }) =>
    typography({
      theme,
      fontSize: '12px',
    })};
`;

const LinkGroup = styled(Text)`
  ${({ theme }) => typography({ theme, fontSize: '12px' })}
`;

const FooterLink = styled.a`
  text-decoration: none;
  ${({ theme }) => color({ theme, color: 'text.secondary' })};
  ${({ theme }) => typography({ theme, fontSize: '12px' })};

  &:hover,
  &:focus {
    ${({ theme }) => color({ theme, color: 'text.highlight' })};
    text-decoration: none;
  }
`;

const LinkLabel = styled(Text)`
  white-space: nowrap;
  ${({ theme }) => typography({ theme, fontSize: '12px', lineHeight: '1.5em' })}
`;

const DesktopLinkWrapper = styled(Grid)`
  ${({ theme }) =>
    layout({ theme, width: ['100%', '100%', '100%', 'auto  '] })};
`;

const DesktopLinkGroup = styled(GridItem)`
  width: auto;
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 0,
      borderColor: 'shades.grey95',
      borderStyle: 'solid',
      borderLeftWidth: 1,
    })};
  ${({ theme }) =>
    space({
      theme,
      mx: 0,
    })}

  &:first-child {
    border: none;
  }

  &:not(:first-child) {
    width: 150px;
  }
`;

const DesktopBottomWrapper = styled(Box)`
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 0,
      borderColor: 'shades.grey95',
      borderStyle: 'solid',
      borderTopWidth: 1,
    })};
`;

const MissonStatement = styled(Text)`
  font-size: 1.625rem;
  line-height: 36px;
`;

const LegacyExtraSmallText = styled(Text)`
  ${({ theme }) => typography({ theme, fontSize: '12px', lineHeight: '1.5em' })}
  line-height: 1.5em !important;
`;

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
        url: '/team',
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
        label: 'Mediadaten',
        url: '/mediadaten/de/',
      },
      {
        label: 'Datenschutz',
        url: '/datenschutz/',
      },
      {
        label: 'Cookies & Tracking',
        url: '#',
        onClick: (e, id) => {
          e.preventDefault();
          // eslint-disable-next-line no-underscore-dangle
          (window as any)._sp_.loadPrivacyManagerModal(id);
        },
      },
      {
        label: 'FAQ',
        title: 'Die externe Seite im neuen Tab/Fenster öffnen',
        url: 'https://faq.t3n.de/',
        target: '_blank',
        rel: 'noreferrer noopener',
      },
      {
        label: 'Abo kündigen',
        url: '/abo-kuendigen/',
      },
      {
        label: 'Kontakt',
        url: '/kontakt/',
      },
      {
        label: 'AGB',
        url: '/agb/',
      },
      {
        label: 'Widerrufsbelehrung',
        url: '/agb/#widerrufsbelehrung',
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
        label: 'Pur',
        url: '/pur',
      },
      {
        label: 'Pro',
        url: '/pro-artikel',
      },
      {
        label: 'News',
        url: '/news/',
      },
      {
        label: 'Magazin',
        url: '/magazin/',
      },
      {
        label: 'Podcasts',
        url: '/podcast/',
      },
      {
        label: 'Themen',
        url: '/tag/',
      },
      {
        label: 'Jobs',
        url: 'https://jobs.t3n.de',
      },
      {
        label: 'Events',
        url: '/events/',
      },
      {
        label: 'Shop',
        url: '/store/',
      },
      {
        label: 'Newsletter',
        url: '/info/t3n-newsletter/',
      },
      {
        label: 'Newsarchiv',
        url: '/archive/',
      },
      {
        label: 'BrandHubs',
        url: '/brandhub/',
      },
    ],
  },
  {
    label: 'RSS-Feeds',
    links: [
      {
        label: 'Aktuelle News',
        url: '/rss.xml',
      },
      {
        label: 'Die neuesten Artikel',
        title: 'Die externe Seite im neuen Tab/Fenster öffnen',
        url: 'http://feeds2.feedburner.com/t3n-magazin/',
        target: '_blank',
        rel: 'noreferrer noopener',
      },
    ],
  },
];

const LegacyDesktopLinks: React.FC<LegacyDesktopFooterProps> = ({
  privacyManagerId,
}) => {
  return (
    <DesktopLinkWrapper>
      {legacyDesktopLinkGroups.map((group) => (
        <DesktopLinkGroup
          display="flex"
          flexDirection="column"
          px="10px"
          pb="12px"
          key={group.label}
        >
          <LinkGroup mt={0} bold>
            {group.label}
          </LinkGroup>
          {group.links.map((link) => (
            <FooterLink
              href={link.url}
              target={link.target || '_self'}
              rel={link.rel || undefined}
              title={link.title || undefined}
              onClick={(e) => link.onClick?.(e, privacyManagerId)}
              key={link.url}
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
    <DesktopBottomWrapper my={[2, 4, 6]} mx="10px">
      <Grid>
        <GridItem width={[1, 1 / 2]} display="flex" flexDirection="column">
          <Box m="10px">
            <LegacyExtraSmallText my="12px">
              agof- und IVW-geprüft
            </LegacyExtraSmallText>
            <Box pt="20px" display="flex" alignItems="center">
              <Box mr="23px">
                <FooterLink
                  href="https://www.agof.de"
                  target="_blank"
                  title="Die externe Seite im neuen Tab/Fenster öffnen"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="https://assets.t3n.de/t3n-de/assets/t3n/2018/images/logos/agof-logo.png"
                    width="80px"
                    alt="agof"
                    sizes={80}
                  />
                </FooterLink>
              </Box>
              <FooterLink
                href="https://www.ivw.de"
                target="_blank"
                title="Die externe Seite im neuen Tab/Fenster öffnen"
                rel="noreferrer noopener"
              >
                <Image
                  src="https://assets.t3n.de/t3n-de/assets/t3n/2018/images/logos/ivw.png"
                  width="50px"
                  height="50px"
                  alt="IVW"
                  sizes={50}
                />
              </FooterLink>
            </Box>
          </Box>
        </GridItem>
        <GridItem width={[1, 1 / 2]} display="flex" flexDirection="column">
          <Box m="10px">
            <LegacyExtraSmallText my="12px">
              Ausgezeichnet von kununu
            </LegacyExtraSmallText>
            <Box pt="20px">
              <Box mr="20px" display="inline">
                <FooterLink
                  href="https://www.kununu.com/de/t3n"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  title="Die externe Seite im neuen Tab/Fenster öffnen"
                >
                  <Image
                    src="https://assets.t3n.de/t3n-de/assets/t3n/2018/images/logos/kununu-top-company.png"
                    width="87px"
                    alt="kununu Top Company"
                    sizes={87}
                  />
                </FooterLink>
              </Box>
              <FooterLink
                href="https://www.kununu.com/de/t3n"
                rel="nofollow noopener noreferrer"
                target="_blank"
                title="Die externe Seite im neuen Tab/Fenster öffnen"
              >
                <Image
                  src="https://assets.t3n.de/t3n-de/assets/t3n/2018/images/logos/kununu-open-company.png"
                  width="87px"
                  alt="kununu Open Company"
                  sizes={87}
                />
              </FooterLink>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      <Box mt="40px" mb="10px">
        <Box width={1} height="55px">
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
        </Box>
      </Box>
    </DesktopBottomWrapper>
  );
};

const LegacyDesktopFooter: React.FC<LegacyDesktopFooterProps> = ({
  privacyManagerId,
}) => {
  return (
    <LegacyDesktopFooterWrapper>
      <Box display="flex" m="10px">
        <GridItem width={[1, 1, 1, 1 / 2]} px="10px" pr="0" mr="10px">
          <MissonStatement mt={0} mr={1} bold>
            Spreading knowledge &amp; future optimism.
          </MissonStatement>
        </GridItem>
        <LegacyDesktopLinks privacyManagerId={privacyManagerId} />
      </Box>
      <LegacyDesktopBottom />
    </LegacyDesktopFooterWrapper>
  );
};

export default LegacyDesktopFooter;
