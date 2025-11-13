import React, { useState } from 'react';
import styled from 'styled-components';
import { color, layout, space } from 'styled-system';

import { MaterialMailOutline, T3nLogo } from '@t3n/icons';

import Box from '../Box';
import useBodyLock from '../hooks/useBodyLock';
import Image from '../Image';
import RoundedButton from '../RoundedButton';
import BurgerNav from './components/BurgerNav';
import TagBar from './components/TagBar';

export type PageHeaderLinksType = {
  label: string;
  url: string;
};

export type PageHeaderTeaserImageType = {
  title: string;
  url: string;
  image: string;
};

export interface PageHeaderProps {
  pinnedTeaser: PageHeaderLinksType & {
    isSponsored: boolean;
    isPaidArticle: boolean;
  };
  tags: PageHeaderLinksType[];
  ressorts: PageHeaderLinksType[];
  skills: PageHeaderLinksType[];
  brands: PageHeaderTeaserImageType[];
  magazines: PageHeaderTeaserImageType[];
  headerCampaignUrl: string;
  headerCampaignImage: string;
  burgerCampaignUrl: string;
  burgerCampaignImage: string;
  isLoggedIn?: boolean;
  hasSubscription?: boolean;
}

const Overlay = styled(Box)<{ isVisible: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 25;
  transition: opacity 0.1s linear;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};

  ${({ theme }) => color({ theme, bg: 'rgba(0, 0, 0, 0.5)' })}
`;

const PageHeaderWrapper = styled.nav`
  position: sticky;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;

  ${({ theme }) => space({ theme, px: [3, 3, 3, 3, 8] })}
  ${({ theme }) => color({ theme, bg: 'background.primary' })}
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => layout({ theme, width: [1, 1, 1, '61.25rem'] })};
  ${({ theme }) => color({ theme, bg: 'background.primary' })}

  > a > svg {
    display: flex;

    ${({ theme }) =>
      layout({
        theme,
        width: ['7rem', '8rem'],
        height: '2.5rem',
      })};

    > path {
      fill: ${({ theme }) => theme.colors.brand.red};
    }
  }
`;

const HeaderCampaign = styled(Box)`
  overflow: hidden;
  height: 100%;

  ${({ theme }) => layout({ theme, display: ['none', 'none', 'block'] })}

  > a {
    height: 100%;
    display: flex;
    align-items: flex-end;

    &:focus {
      outline: ${({ theme }) => theme.colors.brand.black} auto 5px;
      margin: 0 5px;
    }
  }
`;

const HeaderButtonBox = styled(Box)`
  > a {
    padding: 7px 8px;
    line-height: 1em;
    font-size: 0.875rem;
  }

  .t-header__newsletter-button {
    padding: 4px;
  }
`;

const VisibleOnDesktop = styled.span`
  ${({ theme }) => layout({ theme, display: ['none', 'inline'] })}
`;

const VisibleOnMobile = styled.span`
  ${({ theme }) =>
    layout({
      theme,
      display: ['inline', 'none'],
    })}
`;

const PageHeader = ({
  pinnedTeaser,
  tags,
  ressorts,
  skills,
  brands,
  magazines,
  headerCampaignUrl,
  headerCampaignImage,
  burgerCampaignUrl,
  burgerCampaignImage,
  isLoggedIn,
  hasSubscription,
}: PageHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useBodyLock(isMenuOpen);

  return (
    <>
      <Overlay
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        isVisible={isMenuOpen}
      />
      <PageHeaderWrapper>
        <InnerWrapper>
          <a
            href="/"
            aria-label="t3n - digital pioneers"
            className="t-header__logo"
          >
            <T3nLogo />
          </a>
          {headerCampaignImage && (
            <HeaderCampaign mr={5}>
              <a
                href={headerCampaignUrl}
                aria-label="Kampagnen-URL"
                className="t-header__campaign"
              >
                <Image
                  src={headerCampaignImage}
                  alt="Header Kampagnen-Grafik"
                  optimizationClass="responsive-small"
                  height={65}
                  imageHeight={160}
                  lazy={false}
                />
              </a>
            </HeaderCampaign>
          )}
          <HeaderButtonBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            {hasSubscription ? (
              <RoundedButton
                as="a"
                href="/dein-abo"
                title="Abo Benefit Seite"
                mr={2}
                color="accent"
                label="Mein Abo"
                className="t-header__abo-button"
              />
            ) : (
              <RoundedButton
                as="a"
                href="https://l.t3n.de/abos/"
                title="t3n Abos Landingpage"
                className="t-header__abo-button"
                mr={2}
                color="accent"
                label={
                  <>
                    <VisibleOnDesktop>Jetzt abonnieren</VisibleOnDesktop>
                    <VisibleOnMobile>Abonnieren</VisibleOnMobile>
                  </>
                }
              />
            )}
            <RoundedButton
              as="a"
              icon={MaterialMailOutline}
              variant="secondary"
              href="/info/t3n-newsletter/"
              title="Newsletter Abonnieren"
              className="t-header__newsletter-button"
              mr={2}
            />
            <BurgerNav
              ressorts={ressorts}
              skills={skills}
              brands={brands}
              magazines={magazines}
              campaignUrl={burgerCampaignUrl}
              campaignImage={burgerCampaignImage}
              isLoggedIn={isLoggedIn}
              isMenuOpen={isMenuOpen}
              onMenuOpenClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </HeaderButtonBox>
        </InnerWrapper>
      </PageHeaderWrapper>
      <TagBar pinnedTeaser={pinnedTeaser} tags={tags} />
    </>
  );
};

export default PageHeader;
