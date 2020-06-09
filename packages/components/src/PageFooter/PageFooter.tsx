/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { border, flexbox, BorderProps } from 'styled-system';

import {
  SocialFacebook,
  SocialTwitter,
  SocialXing,
  SocialLinkedin,
  SocialInstagram,
  SocialGithub,
  SocialMedium,
} from '@t3n/icons';

import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import { Link, createLinkStyle } from '../Link';
import { Text } from '../Text';
import { Box } from '../Box';

export interface PageFooterProps {
  contactLink: string;
}

const FooterLinks = styled(Box)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const FooterLink = styled(Link).attrs(() => ({
  small: true,
}))`
  flex-shrink: 0;
  ${({ theme }) => flexbox({ theme })}

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
  justify-content: center;
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

export const PageFooter: React.FC<PageFooterProps> = ({
  children,
  contactLink,
}) => {
  return (
    <Box width="100%" bg="black">
      {children && (
        <Box bg="shades.black" color="text.inverse" p={[3, 4]}>
          {children}
        </Box>
      )}
      <FooterBottom
        px={[3, 3, 3, 3, 8]}
        py={[4, 4, 4, 0]}
        height={['auto', 'auto', 'auto', '2.5rem']}
        borderTop="1px solid"
        borderColor="shades.grey44"
      >
        <Grid justifyContent="space-between" alignItems="center">
          <GridItem width={[1, 1, 1, 1 / 3]} order={[1, 1, 1, 0]}>
            <Text
              color="shades.grey143"
              small
              m={0}
              align={['center', 'center', 'center', 'left']}
            >
              © yeebase media GmbH 2005-{new Date().getFullYear()}
            </Text>
          </GridItem>
          <GridItem width={[1, 1, 1, 1 / 3]} mb={[2, 2, 2, 0]}>
            <SocialLinks>
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
                mx={2}
                target="_blank"
              >
                <SocialMedium fill="white" />
              </SocialLink>
            </SocialLinks>
          </GridItem>
          <GridItem width={[1, 1, 1, 1 / 3]} my={[2, 2, 2, 0]}>
            <FooterLinks
              justifyContent={['center', 'center', 'center', 'flex-end']}
              my={[2, 0]}
            >
              <Text
                as="span"
                width={[0.4, 'auto']}
                align={['right', 'left']}
                mx={[2]}
                my={[1, 0]}
              >
                <FooterLink href={contactLink}>Kontakt</FooterLink>
              </Text>
              <Text as="span" width={[0.4, 'auto']} mx={[2]} my={[1, 0]}>
                <FooterLink href="https://t3n.de/agb/">AGB</FooterLink>
              </Text>
              <Text
                as="span"
                width={[0.4, 'auto']}
                align={['right', 'left']}
                mx={[2]}
                my={[1, 0]}
              >
                <FooterLink href="https://t3n.de/datenschutz/">
                  Datenschutz
                </FooterLink>
              </Text>
              <Text
                as="span"
                width={[0.4, 'auto']}
                my={[1, 0]}
                mr={[2, 2, 2, 0]}
                ml={2}
              >
                <FooterLink href="https://t3n.de/impressum/">
                  Impressum
                </FooterLink>
              </Text>
            </FooterLinks>
          </GridItem>
        </Grid>
      </FooterBottom>
    </Box>
  );
};
