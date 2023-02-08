/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { border, BorderProps, flexbox } from 'styled-system';

import {
  SocialFacebook,
  SocialGithub,
  SocialInstagram,
  SocialLinkedin,
  SocialMedium,
  SocialTwitter,
  SocialXing,
} from '@t3n/icons';

import Box from '../Box';
import Grid from '../Grid';
import GridItem from '../GridItem';
import Heading from '../Heading';
import Link, { createLinkStyle } from '../Link';
import Text from '../Text';

export interface PageFooterProps {
  showPrivacySettingsLink?: boolean;
  privacyManagerId?: string;
}

const FooterLinks = styled(Box)`
  width: 100%;
  display: flex;
  ${({ theme }) =>
    flexbox({ theme, flexWrap: ['wrap', 'wrap', 'wrap', 'wrap', 'nowrap'] })}
`;

export const FooterLink = styled(Link).attrs(() => ({
  small: true,
}))`
  flex-shrink: 0;
  ${flexbox}

  ${createLinkStyle({
    default: {
      color: 'text.inverse',
      underlineColor: 'rgba(0,0,0,0)',
    },
    hover: {
      color: 'text.inverse',
      underlineColor: 'text.inverse',
    },
    focus: {
      color: 'text.inverse',
      underlineColor: 'text.inverse',
    },
    visited: {
      color: 'text.inverse',
      underlineColor: 'rgba(0,0,0,0)',
    },
  })}
`;

const FooterBottom = styled(Box)<BorderProps>`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  ${border}
`;

const SocialLinks = styled(Box)`
  display: flex;
  align-items: center;
  line-height: 0;

  ${Link} {
    ${createLinkStyle({
      default: {
        color: 'text.inverse',
        underlineColor: 'rgba(0,0,0,0)',
      },
      hover: {
        color: 'text.inverse',
        underlineColor: 'rgba(0,0,0,0)',
      },
      focus: {
        color: 'text.inverse',
        underlineColor: 'rgba(0,0,0,0)',
      },
      visited: {
        color: 'text.inverse',
        underlineColor: 'rgba(0,0,0,0)',
      },
    })}
  }
`;

const SocialLink = styled(Link)`
  line-height: 0 !important;

  &:active {
    transform: scale(0.9);
  }
`;

const PageFooter: React.FC<PageFooterProps> = ({
  children,
  showPrivacySettingsLink,
  privacyManagerId,
}) => (
  <Box width="100%" bg="black">
    {children && (
      <Box bg="shades.black" color="text.inverse" p={[3, 4]}>
        {children}
      </Box>
    )}
    <FooterBottom
      px={[3, 3, 3, 3, 8]}
      py={[4, 4, 4, 4, 0]}
      borderTop="1px solid"
      borderColor="shades.grey44"
    >
      <Grid justifyContent="space-between" alignItems="center">
        <GridItem width={[1, 1, 1, 1, 2 / 5]}>
          <Heading
            as="h5"
            color="shades.grey143"
            my={4}
            align={['center', 'center', 'center', 'center', 'left']}
          >
            Spreading knowledge & future optimism.
          </Heading>
        </GridItem>
        <GridItem width={[1, 1, 1, 1, 1 / 5]} mb={[2, 2, 2, 2, 0]}>
          <SocialLinks
            justifyContent={[
              'center',
              'center',
              'center',
              'center',
              'flex-end',
            ]}
          >
            <SocialLink
              href="https://facebook.com/t3nMagazin"
              title="Facebook"
              mx={2}
              target="_blank"
            >
              <SocialFacebook fill="white" />
            </SocialLink>
            <SocialLink
              href="https://twitter.com/t3n"
              title="Twitter"
              mx={2}
              target="_blank"
            >
              <SocialTwitter fill="white" />
            </SocialLink>
            <SocialLink
              href="https://xing.com/news/pages/t3n-magazin-67"
              title="Xing"
              mx={2}
              target="_blank"
            >
              <SocialXing fill="white" />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/company/t3n-magazin-yeebase-media-gmbh/"
              title="LinkedIn"
              mx={2}
              target="_blank"
            >
              <SocialLinkedin fill="white" />
            </SocialLink>
            <SocialLink
              href="https://instagram.com/t3n_magazin/"
              title="Instagram"
              mx={2}
              target="_blank"
            >
              <SocialInstagram fill="white" />
            </SocialLink>
            <SocialLink
              href="https://github.com/t3n"
              title="GitHub"
              mx={2}
              target="_blank"
            >
              <SocialGithub fill="white" />
            </SocialLink>
            <SocialLink
              href="https://medium.com/@t3nbackstageblog"
              title="Medium"
              ml={2}
              target="_blank"
            >
              <SocialMedium fill="white" />
            </SocialLink>
          </SocialLinks>
        </GridItem>
      </Grid>
    </FooterBottom>
    <FooterBottom
      px={[3, 3, 3, 3, 8]}
      py={[4, 4, 4, 4, 0]}
      height={['auto', 'auto', 'auto', 'auto', '2.5rem']}
      borderTop="1px solid"
      borderColor="shades.grey44"
    >
      <Grid justifyContent="space-between" alignItems="center">
        <GridItem width={[1, 1, 1, 1, 2 / 5]} order={[1, 1, 1, 1, 0]}>
          <Text
            color="shades.grey143"
            small
            m={0}
            align={['center', 'center', 'center', 'center', 'left']}
          >
            © yeebase media GmbH 2005-
            {new Date().getFullYear()}
          </Text>
        </GridItem>
        <GridItem width={[1, 1, 1, 1, 3 / 5]} my={[2, 2, 2, 2, 0]}>
          <FooterLinks
            justifyContent={[
              'center',
              'center',
              'center',
              'center',
              'flex-end',
            ]}
            my={[2, 0]}
          >
            <Text
              as="span"
              width={[1 / 2, 'auto']}
              my={[1, 0]}
              align={['right', 'left']}
            >
              <FooterLink href="https://t3n.de/datenschutz/" mx={2}>
                Datenschutz
              </FooterLink>
            </Text>
            {showPrivacySettingsLink && privacyManagerId ? (
              <Text as="span" width={[1 / 2, 'auto']} my={[1, 0]}>
                <FooterLink
                  href="#"
                  mx={2}
                  onClick={(e) => {
                    e.preventDefault();
                    // eslint-disable-next-line no-underscore-dangle
                    (window as any)._sp_.loadPrivacyManagerModal(
                      privacyManagerId
                    );
                  }}
                >
                  Cookies & Tracking
                </FooterLink>
              </Text>
            ) : null}
            <Text
              as="span"
              width={[1 / 2, 'auto']}
              align={
                showPrivacySettingsLink && privacyManagerId
                  ? ['right', 'center']
                  : ['left', 'center']
              }
              my={[1, 0]}
            >
              <FooterLink href="https://t3n.de/abo-kuendigen/" mx={2}>
                Abo kündigen
              </FooterLink>
            </Text>
            <Text
              as="span"
              width={[1 / 2, 'auto']}
              align={
                showPrivacySettingsLink && privacyManagerId
                  ? ['left', 'center']
                  : ['right', 'center']
              }
              my={[1, 0]}
            >
              <FooterLink href="https://t3n.de/agb/" mx={2}>
                AGB
              </FooterLink>
            </Text>
            <Text
              as="span"
              width={[1 / 2, 'auto']}
              align={
                showPrivacySettingsLink && privacyManagerId
                  ? ['right', 'center']
                  : ['left', 'center']
              }
              my={[1, 0]}
            >
              <FooterLink href="https://t3n.de/agb/#widerrufsbelehrung" mx={2}>
                Widerrufsbelehrung
              </FooterLink>
            </Text>
            <Text
              as="span"
              width={[1 / 2, 'auto']}
              align={
                showPrivacySettingsLink && privacyManagerId
                  ? ['left', 'center']
                  : ['center']
              }
              my={[1, 0]}
            >
              <FooterLink href="https://t3n.de/impressum/" ml={2}>
                Impressum
              </FooterLink>
            </Text>
          </FooterLinks>
        </GridItem>
      </Grid>
    </FooterBottom>
  </Box>
);

export default PageFooter;
