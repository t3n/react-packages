import React from 'react';
import styled from 'styled-components';
import {
  space,
  color,
  layout,
  typography,
  BackgroundColorProps,
  SpaceProps,
  TypographyProps,
  FlexboxProps,
  LayoutProps,
  flexbox
} from 'styled-system';
import { ThemeProps, theme } from '@t3n/theme';
import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import { Link } from '../Link';
import { Text } from '../Text';

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

const ProjectFooterWrapper = styled.div<PageFooterWrapperProps>`
  ${color}
  ${space}
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
  ${({ theme }) => space({ theme, mx: [1] })}

  &:last-child {
    ${({ theme }) => space({ theme, mr: [1, 1, 1, 0] })}
  }
`;

const ContentContainer = styled.div<TypographyProps>`
  ${typography}
  display: flex;
`;

const FooterBottom = styled.div`
  ${({ theme }) => space({ theme, px: 3, py: [2, 2, 2, 0] })}
  ${({ theme }) =>
    layout({
      theme,
      height: ['auto', 'auto', 'auto', '2.5rem']
    })}
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
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
        <ProjectFooterWrapper bg="shades.black" color="text.inverse" p={3}>
          {children}
        </ProjectFooterWrapper>
      )}
      <FooterBottom>
        <Grid justifyContent="space-between" alignItems="center">
          <GridItem width={[1, 1, 1, 1 / 3]} order={[1, 1, 1, 0]}>
            <ContentContainer
              textAlign={['center', 'center', 'center', 'left']}
            >
              <Text color="shades.grey155" small my="0">
                © yeebase media GmbH 2005-{CopyrightYear}
              </Text>
            </ContentContainer>
          </GridItem>

          <GridItem width={[1, 1, 1, 1 / 3]}>
            <ContentContainer textAlign="center">
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
            </ContentContainer>
          </GridItem>

          <GridItem width={[1, 1, 1, 1 / 3]} my={[1, 1, 1, 0]}>
            <ContentContainer
              textAlign={['center', 'center', 'center', 'right']}
            >
              <FooterLink href={contactLink} textAlign={['right', 'left']}>
                Kontakt
              </FooterLink>
              <FooterLink href="https://t3n.de/agb/" textAlign="left">
                AGB
              </FooterLink>
              <FooterLink
                href="https://t3n.de/datenschutz/"
                textAlign={['right', 'left']}
              >
                Datenschutz
              </FooterLink>
              <FooterLink href="https://t3n.de/impressum/" textAlign="left">
                Impressum
              </FooterLink>
            </ContentContainer>
          </GridItem>
        </Grid>
      </FooterBottom>
    </FooterWrapper>
  );
};
