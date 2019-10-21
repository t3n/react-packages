/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import {
  space,
  color,
  layout,
  border,
  flexbox,
  textAlign,
  BorderProps
} from 'styled-system';

import {
  SocialFacebook,
  SocialTwitter,
  SocialXing,
  SocialLinkedin,
  SocialInstagram,
  SocialWhatsapp,
  SocialGithub
} from '@t3n/icons';

import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import { Link } from '../Link';
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

const FooterLink = styled(Link).attrs(() => ({
  variant: 'inverse',
  underline: 'hover',
  small: true
}))`
  flex-shrink: 0;
  ${() => layout({ width: [1 / 2, 'auto'] })}

  &:hover,
  &:active,
  &:focus,
  &:visited {
    ${({ theme }) => color({ theme, color: 'text.inverse' })};
  }
  ${({ theme }) => flexbox({ theme })}
  ${({ theme }) => space({ theme, px: [2], my: [1, 0] })}

  &:last-child {
    ${({ theme }) => space({ theme, pr: [2, 2, 2, 0] })}
  }

  &:nth-child(odd) {
    ${() => textAlign({ textAlign: ['right', 'left'] })}
  }
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
`;

const SocialLink = styled(Link)`
  line-height: 0 !important;
`;

export const PageFooter: React.FC<PageFooterProps> = ({
  children,
  contactLink
}) => {
  return (
    <Box width="100%" bg="black">
      {children && (
        <Box bg="shades.black" color="text.inverse" p={[3, 4]}>
          {children}
        </Box>
      )}
      <FooterBottom
        px={[3, 4]}
        py={[3, 4, 4, 0]}
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
                href="https://www.facebook.com/t3nMagazin"
                title="Facebook"
                mx={1}
              >
                <SocialFacebook fill="white" />
              </SocialLink>
              <SocialLink href="https://twitter.com/t3n" title="Twitter" mx={2}>
                <SocialTwitter fill="white" />
              </SocialLink>
              <SocialLink
                href="https://www.xing.com/news/pages/t3n-magazin-67"
                title="Xing"
                mx={2}
              >
                <SocialXing fill="white" />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/company/t3n-magazin-yeebase-media-gmbh/"
                title="LinkedIn"
                mx={2}
              >
                <SocialLinkedin fill="white" />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/t3n_magazin/"
                title="Instagram"
                mx={2}
              >
                <SocialInstagram fill="white" />
              </SocialLink>
              <SocialLink
                href="https://t3n.de/social-media/#Die_hei%C3%9Festen_News_in_deinem_Messenger"
                title="Whatsapp"
                mx={2}
              >
                <SocialWhatsapp fill="white" />
              </SocialLink>
              <SocialLink href="https://github.com/t3n" title="GitHub" mx={2}>
                <SocialGithub fill="white" />
              </SocialLink>
            </SocialLinks>
          </GridItem>
          <GridItem width={[1, 1, 1, 1 / 3]} my={[2, 2, 2, 0]}>
            <FooterLinks
              justifyContent={['center', 'center', 'center', 'flex-end']}
              my={[2, 0]}
            >
              <FooterLink href={contactLink}>Kontakt</FooterLink>
              <FooterLink href="https://t3n.de/agb/">AGB</FooterLink>
              <FooterLink href="https://t3n.de/datenschutz/">
                Datenschutz
              </FooterLink>
              <FooterLink href="https://t3n.de/impressum/">
                Impressum
              </FooterLink>
            </FooterLinks>
          </GridItem>
        </Grid>
      </FooterBottom>
    </Box>
  );
};
