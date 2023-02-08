import React from 'react';
import styled from 'styled-components';
import { color, space, typography } from 'styled-system';

import Box from '../Box';
import LegacySocialBar from '../LegacySocialBar';
import Text from '../Text';

export type MobileLinkType = {
  label: string;
  url: string;
  bold?: boolean;
  onClick?: (e: React.MouseEvent, privacyManagerId?: string) => void;
}[];

export interface LegacyMobileFooterProps {
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

const legacyMobileLinks: MobileLinkType = [
  {
    label: 'Pur',
    url: '/pur',
  },
  {
    label: 'Pro',
    url: '/pro-artikel',
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
    label: 'Abo kündigen',
    url: '/abo-kuendigen/',
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
];

const LegacyMobileLinks: React.FC<LegacyMobileFooterProps> = ({
  privacyManagerId,
}) => {
  return (
    <MobileLinksWrapper display="grid" flexDirection="column">
      {legacyMobileLinks.map((link) => (
        <FooterLink
          href={link.url}
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

const LegacyMobileFooter: React.FC<LegacyMobileFooterProps> = ({
  privacyManagerId,
}) => {
  return (
    <>
      <LegacyMobileLinks privacyManagerId={privacyManagerId} />
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

export default LegacyMobileFooter;
