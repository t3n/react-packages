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
  burgerCampaignUrl: string;
  burgerCampaignImage: string;
  isLoggedIn?: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
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

const MenuToggle = styled(Icon)<{
  doNotDisplayMobile?: boolean;
  doNotDisplayDesktop?: boolean;
}>`
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
  font-size: 1.25rem;

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
  burgerCampaignUrl,
  burgerCampaignImage,
  isLoggedIn,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [term, setTerm] = useState('');

  return (
    <Box>
      <MenuToggleBox position="relative">
        <MenuToggle
          doNotDisplayMobile
          fill="#2a2a2a"
          width="2rem"
          component={MaterialMenu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <MenuToggle
          doNotDisplayDesktop
          fill="#2a2a2a"
          width="2rem"
          component={isMenuOpen ? MaterialClose : MaterialMenu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </MenuToggleBox>
      <MenuContainer isMenuOpen={isMenuOpen}>
        <Box
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
            />
          ) : (
            <RoundedButton
              as="a"
              icon={MaterialPerson}
              href="/login"
              variant="secondary"
              size="small"
              expanded
              label="Anmelden"
            />
          )}
          <MenuToggle
            doNotDisplayMobile
            fill="shades.grey42"
            width="2rem"
            component={MaterialClose}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </Box>
        <form action="/suche" method="get">
          <SearchBoxWrapper
            variantProp="light"
            isLoading={false}
            term={term}
            setTerm={setTerm}
          >
            <Input
              type="text"
              placeholder="Suche"
              name="q"
              id="js-search-box"
              hideReset
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </SearchBoxWrapper>
        </form>
        <a href={burgerCampaignUrl} title="Kampagne">
          <Image
            src={burgerCampaignImage}
            width={['100%', 334]}
            lazy
            mt={3}
            mb={5}
          />
        </a>
        <BurgerAccordion title="Brands" initialOpen>
          <Grid mx={-2}>
            {brands.map((brand) => (
              <GridItem width={1 / 2} px={2} key={brand.title}>
                <a href={brand.url} title={brand.title}>
                  <ObjectFitImage
                    src={brand.image}
                    title={brand.title}
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
          <a href="/news" title="News">
            News
          </a>
        </BurgerHeading>
        <BurgerAccordion title="Themen">
          {ressorts.map((link) => (
            <SubMenuItem key={link.label} href={link.url} title={link.label}>
              {link.label}
            </SubMenuItem>
          ))}
        </BurgerAccordion>
        <BurgerAccordion title="Magazine" initialOpen>
          <Grid mx={-2}>
            {magazines.map((magazine) => (
              <GridItem width={1 / 2} px={2} key={magazine.title}>
                <a href={magazine.url} title={magazine.title}>
                  <ObjectFitImage
                    src={magazine.image}
                    title={magazine.title}
                    width={115}
                    height={162}
                    lazy
                  />
                </a>
              </GridItem>
            ))}
          </Grid>
        </BurgerAccordion>
        <BurgerAccordion title="Skills" initialOpen>
          {skills.map((link) => (
            <SubMenuItem key={link.label} href={link.url} title={link.label}>
              {link.label}
            </SubMenuItem>
          ))}
        </BurgerAccordion>
        <BurgerHeading as="h4" styleAs="h4" mt={0} mb={5}>
          <a href="/podcast" title="Podcast">
            Podcast
          </a>
        </BurgerHeading>
        <BurgerHeading as="h4" styleAs="h4" mt={0} mb={5}>
          <a href="shop.t3n.de" title="Shop">
            Shop
          </a>
        </BurgerHeading>
        <BurgerHeading as="h4" styleAs="h4" mt={0} mb={5}>
          <a href="jobs.t3n.de" title="Jobs">
            Jobs
          </a>
        </BurgerHeading>
        <BurgerHeading as="h4" styleAs="h4" mt={0} mb={5}>
          <a href="/events" title="Events">
            Events
          </a>
        </BurgerHeading>
      </MenuContainer>
    </Box>
  );
};

export default BurgerNav;
