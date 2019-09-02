import React from 'react';
import styled from 'styled-components';
import {
  space,
  color,
  layout,
  border,
  BackgroundColorProps,
  SpaceProps,
  TypographyProps,
  FlexboxProps,
  LayoutProps,
  flexbox,
  textAlign,
  justifyContent
} from 'styled-system';
import { ThemeProps, theme } from '@t3n/theme';
import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import { Link } from '../Link';
import { Text } from '../Text';
import { Box } from '../Box';

interface PageFooterWrapperProps
  extends ThemeProps,
    LayoutProps,
    SpaceProps,
    FlexboxProps,
    TypographyProps,
    BackgroundColorProps {}

const CopyrightYear = new Date().getFullYear();

const FooterWrapper = styled.div<SpaceProps>`
  position: absolute;
  z-index: 20;
  bottom: 0;
  left: 0;
  right: 0;
  ${({ theme }) => color({ theme, bg: 'black' })};
`;

const FooterLink = styled(Link).attrs(() => ({
  variant: 'inverse',
  underline: 'hover',
  small: true
}))<PageFooterWrapperProps>`
  &:hover,
  &:active,
  &:focus,
  &:visited {
    ${({ theme }) => color({ theme, color: 'text.inverse' })};
  }
  ${({ theme }) => flexbox({ theme })}
  ${({ theme }) =>
    space({ theme, px: [1], my: ['0.25rem', 0] })}

  &:last-child {
    ${({ theme }) => space({ theme, pr: [1, 1, 1, 0] })}
  }
`;

const FooterLinks = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  ${() =>
    justifyContent({
      justifyContent: ['center', 'center', 'center', 'flex-end']
    })}

  ${() => space({ my: [1, 0] })}

  > a {
    ${() => layout({ width: [1 / 2, 'auto'] })}
    flex-shrink:0;

    &:nth-child(odd) {
      ${() => textAlign({ textAlign: ['right', 'left  '] })}
    }
  }
`;

const FooterBottom = styled.div`
  ${({ theme }) => space({ theme, px: 3, py: [3, 3, 3, 0] })}
  ${({ theme }) =>
    layout({
      theme,
      height: ['auto', 'auto', 'auto', '2.5rem']
    })}
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  ${({ theme }: ThemeProps) =>
    border({ theme, borderTop: '1px solid', borderColor: 'shades.grey44' })}
`;

export interface PageFooterProps {
  contactLink: string;
}

export const PageFooter: React.FC<PageFooterProps> = ({
  children,
  contactLink
}) => {
  return (
    <FooterWrapper>
      {children && (
        <Box bg="shades.black" color="text.inverse" p={3}>
          {children}
        </Box>
      )}
      <FooterBottom>
        <Grid justifyContent="space-between" alignItems="center">
          <GridItem width={[1, 1, 1, 1 / 3]} order={[1, 1, 1, 0]}>
            <Text
              color="shades.grey155"
              small
              m={0}
              align={['center', 'center', 'center', 'left']}
            >
              © yeebase media GmbH 2005-{CopyrightYear}
            </Text>
          </GridItem>

          <GridItem width={[1, 1, 1, 1 / 3]}>
            <Text align="center" m={0}>
              <Link href="#" title="Facebook" mx={1}>
                🍏
              </Link>
              <Link href="#" title="Twitter" mx={1}>
                🍌
              </Link>
              <Link href="#" title="Xing" mx={1}>
                🍉
              </Link>
              <Link href="#" title="LinkedIn" mx={1}>
                🍑
              </Link>
              <Link href="#" title="Instagram" mx={1}>
                🥝
              </Link>
              <Link href="#" title="Whatsapp" mx={1}>
                🍒
              </Link>
            </Text>
          </GridItem>

          <GridItem width={[1, 1, 1, 1 / 3]} my={[1, 1, 1, 0]}>
            <FooterLinks>
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
    </FooterWrapper>
  );
};
