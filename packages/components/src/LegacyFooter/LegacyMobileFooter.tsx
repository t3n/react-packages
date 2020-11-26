import React from 'react';
import styled from 'styled-components';
import { color, space } from 'styled-system';

import { Text } from '../Text';
import { Box } from '../Box';
import { LegacySocialBar } from '../LegacySocialBar';

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
    url: '/unterstuetze-t3n',
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

const StyledLegacySocialBar = styled(LegacySocialBar)`
  ${({ theme }) => space({ my: 4, theme })};
`;

const LegacyMobileFooter = () => {
  return (
    <>
      <LegacyMobileLinks />
      <StyledLegacySocialBar />
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
