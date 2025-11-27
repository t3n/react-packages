import React from 'react';
import styled from 'styled-components';
import { color, space, typography } from 'styled-system';

import Box from '../Box';
import LegacySocialBar from '../LegacySocialBar';
import Text from '../Text';

export type MobileLinkType = {
  label: string;
  url: string;
  title?: string;
  bold?: boolean;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent, privacyManagerId?: string) => void;
}[];

export interface MobileFooterProps {
  privacyManagerId: string;
}

const FooterLink = styled.a`
  text-decoration: none;
  ${({ theme }) => color({ theme, color: 'text.secondary' })};
  ${({ theme }) =>
    typography({
      theme,
      fontSize: 0,
    })};
  ${({ theme }) => space({ mb: 2, theme })};

  &:hover,
  &:focus {
    ${({ theme }) => color({ theme, color: 'text.highlight' })};
    text-decoration: none;
  }
`;

const LinkLabel = styled(Text)`
  white-space: nowrap;
  ${({ theme }) =>
    typography({
      theme,
      fontSize: 0,
    })};
`;

const MobileLinksWrapper = styled(Box)`
  text-align: center;
`;

const SmallerText = styled(Text)`
  ${({ theme }) =>
    typography({
      theme,
      fontSize: 0,
    })};
`;

const MobileLinks: React.FC<MobileFooterProps> = ({ privacyManagerId }) => {
  const mobileLinks: MobileLinkType = [
    {
      label: 'Dein Abo',
      url: '/dein-abo',
    },
    {
      label: 'Jetzt abonnieren',
      url: '/abos/',
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
    {
      label: 'Barrierefreiheitserklärung',
      url: 'https://shop.t3n.de/pages/barrierefreiheitserklaerung',
      title: 'Die externe Seite im neuen Tab/Fenster öffnen',
      target: '_blank',
      rel: 'noreferrer noopener',
    },
  ];

  return (
    <MobileLinksWrapper display="grid" flexDirection="column">
      {mobileLinks.map((link) => (
        <FooterLink
          href={link.url}
          title={link.title}
          target={link.target}
          rel={link.rel}
          onClick={(e) => link.onClick?.(e, privacyManagerId)}
          key={link.url}
        >
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

const MobileFooter: React.FC<MobileFooterProps> = ({ privacyManagerId }) => {
  return (
    <>
      <MobileLinks privacyManagerId={privacyManagerId} />
      <LegacySocialBar isInFooter />
      <SmallerText align="center">
        ©{' '}
        <FooterLink
          href="https://yeebase.com/"
          target="_blank"
          title="Die externe Seite im neuen Tab/Fenster öffnen"
          rel="noopener"
        >
          yeebase media GmbH
        </FooterLink>{' '}
        2005 - {new Date().getFullYear()}
      </SmallerText>
      <Text align="center">
        <FooterLink href="/" className="js-switch-to-desktop">
          Desktop-Seite
        </FooterLink>
      </Text>
    </>
  );
};

export default MobileFooter;
