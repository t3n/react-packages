import React, { useState } from 'react';
import styled from 'styled-components';
import {
  border,
  color,
  layout,
  lineHeight,
  position,
  space,
} from 'styled-system';

import { MaterialClose, MaterialMenu, MaterialPerson } from '@t3n/icons';
import { ThemeProps } from '@t3n/theme';

import Box from '../../Box';
import Grid from '../../Grid';
import GridItem from '../../GridItem';
import Heading from '../../Heading';
import Icon from '../../Icon';
import Image from '../../Image';
import Input from '../../Input';
import RoundedButton from '../../RoundedButton';
import SearchBoxWrapper from '../../SearchBox/SearchBoxWrapper';
import { PageHeaderLinksType, PageHeaderTeaserImageType } from '../PageHeader';
import BurgerAccordion from './BurgerAccordion';

export interface BurgerNavProps {
  ressorts: PageHeaderLinksType[];
  skills: PageHeaderLinksType[];
  brands: PageHeaderTeaserImageType[];
  magazines: PageHeaderTeaserImageType[];
  campaignUrl: string;
  campaignImage: string;
  isLoggedIn?: boolean;
  isMenuOpen: boolean;
  onMenuOpenClick: () => void;
}

const MenuToggleBox = styled(Box)`
  span {
    ${({ theme }) =>
      position({
        theme,
        position: 'absolute',
        top: '1px',
        right: '-2px',
      })};
  }
`;

const MenuToggle = styled(
  ({ doNotDisplayMobile, doNotDisplayDesktop, onClick, ...props }) => (
    <Icon
      {...props}
      tabIndex={0}
      role="button"
      onClick={onClick}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.(e as any);
        }
      }}
    />
  ),
)`
  cursor: pointer;

  ${({ theme, doNotDisplayMobile }) =>
    doNotDisplayMobile &&
    layout({ theme, display: ['none', 'none', 'none', 'block'] })}

  ${({ theme, doNotDisplayDesktop }) =>
    doNotDisplayDesktop &&
    layout({ theme, display: ['block', 'block', 'block', 'none'] })}
`;

const MenuContainer = styled(Box)<{ isMenuOpen: boolean }>`
  position: fixed;
  overflow-y: auto;
  right: 0;
  z-index: -1;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  transform: translateY(
    ${({ isMenuOpen }) => (isMenuOpen ? '0' : 'calc(-100vh - 65px)')}
  );
  transition: transform 0.333s ease-in-out;

  ${({ theme }) =>
    color({ theme, bg: 'background.primary', color: 'text.primary' })}
  ${({ theme }) =>
    layout({
      theme,
      width: [1, '400px'],
      height: 'calc(100vh - 113px)',
    })}
  ${({ theme }) => position({ theme, top: '113px' })}
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 1,
      borderColor: 'shades.grey232',
      borderStyle: 'solid',
    })}
  ${({ theme }) =>
    space({ theme, pt: [4, 4, 4, 5], px: [4, 4, 4, 5], pb: '120px' })};

  @media (min-width: 768px) {
    transform: translateX(
      ${({ isMenuOpen }) => (isMenuOpen ? '0' : 'calc(100% + 10px)')}
    );
  }
`;

const BurgerButtonBox = styled(Box)`
  > a {
    padding: 6px 8px 6px 8px;
    line-height: 1em;
    font-size: 0.875rem;
  }
`;

const SubMenuItem = styled.a`
  text-decoration: none;
  display: block;

  ${({ theme }) => space({ theme, mb: 4 })};
  ${({ theme }) => color({ theme, color: 'text.primary' })}

  &:hover,
  :focus {
    cursor: pointer;

    ${({ theme }: ThemeProps) => color({ theme, color: 'text.highlight' })}
  }
`;

const BurgerHeading = styled(Heading)`
  ${({ theme }) => lineHeight({ theme, lineHeight: '32px' })}
  font-size: 1.125rem;

  > a {
    text-decoration: none;
    ${({ theme }) => color({ theme, color: 'text.primary' })}

    &:hover,
    :focus {
      cursor: pointer;

      ${({ theme }: ThemeProps) => color({ theme, color: 'text.highlight' })}
    }
  }
`;

const ObjectFitImage = styled(Image)`
  object-fit: contain;
`;

const BurgerNav: React.FC<BurgerNavProps> = ({
  ressorts,
  skills,
  brands,
  magazines,
  campaignUrl,
  campaignImage,
  isLoggedIn,
  isMenuOpen,
  onMenuOpenClick,
}) => {
  const [term, setTerm] = useState('');
  const tabbable = isMenuOpen;

  // Track open state for each accordion
  const [openAccordions, setOpenAccordions] = useState<{
    [key: string]: boolean;
  }>({
    Brands: true,
    Themen: false,
    Magazine: true,
    Skills: true,
  });

  const handleAccordionToggle = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Box>
      <MenuToggleBox position="relative">
        <MenuToggle
          doNotDisplayMobile
          fill="#2a2a2a"
          width="2rem"
          component={MaterialMenu}
          onClick={onMenuOpenClick}
          aria-label="Menü öffnen"
        />
        <MenuToggle
          doNotDisplayDesktop
          fill="#2a2a2a"
          width="2rem"
          component={isMenuOpen ? MaterialClose : MaterialMenu}
          onClick={onMenuOpenClick}
          aria-label="Menü öffnen/schließen"
        />
      </MenuToggleBox>
      <MenuContainer isMenuOpen={isMenuOpen}>
        <BurgerButtonBox
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={3}
        >
          {isLoggedIn ? (
            <RoundedButton
              as="a"
              icon={MaterialPerson}
              href="/account"
              variant="secondary"
              size="small"
              expanded
              label="Mein Account"
              className="t-header__account-button"
              tabIndex={tabbable ? 0 : -1}
            />
          ) : (
            <RoundedButton
              as="a"
              icon={MaterialPerson}
              href="/account/login"
              variant="secondary"
              size="small"
              expanded
              label="Anmelden"
              className="t-header__account-button"
              tabIndex={tabbable ? 0 : -1}
            />
          )}
          <MenuToggle
            doNotDisplayMobile
            fill="shades.grey42"
            width="2rem"
            component={MaterialClose}
            onClick={onMenuOpenClick}
            aria-label="Menü öffnen"
            tabIndex={tabbable ? 0 : -1}
          />
        </BurgerButtonBox>
        <form action="/suche" method="get">
          <SearchBoxWrapper variantProp="light" isLoading={false}>
            <Input
              type="text"
              placeholder="Suche"
              name="q"
              id="js-search-box"
              hideReset
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              tabIndex={tabbable ? 0 : -1}
            />
          </SearchBoxWrapper>
        </form>
        <a
          href={campaignUrl}
          title="Kampagne"
          className="t-header__burger-campaign"
          tabIndex={tabbable ? 0 : -1}
        >
          <Image
            src={campaignImage}
            alt="Kampagnen-Grafik"
            width="100%"
            lazy
            mt={3}
            mb={5}
          />
        </a>
        <BurgerAccordion
          title="Brands"
          isOpen={openAccordions.Brands}
          onToggle={() => handleAccordionToggle('Brands')}
        >
          <Grid mx={-2}>
            {brands.map((brand) => (
              <GridItem width={1 / 2} px={2} key={brand.title}>
                <a
                  href={brand.url}
                  title={brand.title}
                  className="t-header__burger-brand"
                  tabIndex={tabbable && openAccordions.Brands ? 0 : -1}
                >
                  <ObjectFitImage
                    src={brand.image}
                    title={brand.title}
                    alt={`${brand.title} Logo`}
                    width={158}
                    height={121}
                    lazy
                  />
                </a>
              </GridItem>
            ))}
          </Grid>
        </BurgerAccordion>
        <BurgerHeading as="h4" styleAs="h4" mt={0} mb={5}>
          <a
            href="/news/"
            className="t-header__burger-link"
            tabIndex={tabbable ? 0 : -1}
          >
            News
          </a>
        </BurgerHeading>
        <BurgerAccordion
          title="Themen"
          isOpen={openAccordions.Themen}
          onToggle={() => handleAccordionToggle('Themen')}
        >
          {ressorts.map((link) => (
            <SubMenuItem
              key={link.label}
              href={link.url}
              className="t-header__burger-link"
              tabIndex={tabbable && openAccordions.Themen ? 0 : -1}
            >
              {link.label}
            </SubMenuItem>
          ))}
        </BurgerAccordion>
        <BurgerAccordion
          title="Magazine"
          isOpen={openAccordions.Magazine}
          onToggle={() => handleAccordionToggle('Magazine')}
        >
          <Grid mx={-2}>
            {magazines.map((magazine) => (
              <GridItem width={1 / 2} px={2} key={magazine.title}>
                <a
                  href={magazine.url}
                  title={magazine.title}
                  className="t-header__burger-magazine"
                  tabIndex={tabbable && openAccordions.Magazine ? 0 : -1}
                >
                  <ObjectFitImage
                    src={magazine.image}
                    title={magazine.title}
                    alt={`${magazine.title} Magazin Cover`}
                    width={115}
                    height={162}
                    lazy
                  />
                </a>
              </GridItem>
            ))}
          </Grid>
        </BurgerAccordion>
        <BurgerAccordion
          title="Skills"
          isOpen={openAccordions.Skills}
          onToggle={() => handleAccordionToggle('Skills')}
        >
          {skills.map((link) => (
            <SubMenuItem
              key={link.label}
              href={link.url}
              className="t-header__burger-link"
              tabIndex={tabbable && openAccordions.Skills ? 0 : -1}
            >
              {link.label}
            </SubMenuItem>
          ))}
        </BurgerAccordion>
        <BurgerHeading as="h4" styleAs="h4" mt={0} mb={5}>
          <a
            href="/podcast"
            className="t-header__burger-link"
            tabIndex={tabbable ? 0 : -1}
          >
            Podcast
          </a>
        </BurgerHeading>
        <BurgerHeading as="h4" styleAs="h4" mt={0} mb={5}>
          <a
            href="https://shop.t3n.de"
            className="t-header__burger-link"
            tabIndex={tabbable ? 0 : -1}
          >
            Shop
          </a>
        </BurgerHeading>
        <BurgerHeading as="h4" styleAs="h4" mt={0} mb={5}>
          <a
            href="https://jobs.t3n.de"
            className="t-header__burger-link"
            tabIndex={tabbable ? 0 : -1}
          >
            Jobs
          </a>
        </BurgerHeading>
        <BurgerHeading as="h4" styleAs="h4" mt={0} mb={5}>
          <a
            href="/events"
            className="t-header__burger-link"
            tabIndex={tabbable ? 0 : -1}
          >
            Events
          </a>
        </BurgerHeading>
      </MenuContainer>
    </Box>
  );
};

export default BurgerNav;
