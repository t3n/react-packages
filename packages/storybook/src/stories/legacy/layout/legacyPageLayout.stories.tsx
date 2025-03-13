import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { layout } from 'styled-system';

import {
  Box,
  LegacyBreadcrumb,
  LegacyBreadcrumbItem,
  LegacyPageLayout,
  LegacySection,
  Text,
} from '@t3n/components';
import {
  PageHeaderLinksType,
  PageHeaderTeaserImageType,
} from '@t3n/components/src/PageHeader';

const pinnedTeaser = {
  label:
    'Cybersecurity: Wie Tabletop-Übungen dein Team auf den Ernstfall vorbereiten',
  url: '/',
  isSponsored: true,
};

const tags: PageHeaderLinksType[] = [
  {
    label: 'Deepseek',
    url: '/',
  },
  {
    label: 'Künstliche Intelligenz',
    url: '/',
  },
  {
    label: 'DSGVO',
    url: '/',
  },
  {
    label: 'Tesla News',
    url: '/',
  },
  {
    label: 'Amazon Prime Day',
    url: '/',
  },
  {
    label: 'Hybrid Work',
    url: '/',
  },
  {
    label: 'Digitales Deutschland',
    url: '/',
  },
  {
    label: 'Technology Research Hub',
    url: '/',
  },
  {
    label: 'KIckstarter',
    url: '/',
  },
  {
    label: 'SIE',
    url: '/',
  },
  {
    label: 'Cybersecurity',
    url: '/',
  },
  {
    label: 'Bitcoin',
    url: '/',
  },
];

const ressorts: PageHeaderLinksType[] = [
  {
    label: 'Software & Entwicklung',
    url: '/tag/software-entwicklung/',
  },
  {
    label: 'UX & Design',
    url: '/tag/ux-and-design/',
  },
  {
    label: 'Marketing',
    url: '/tag/marketing/',
  },
  {
    label: 'Hardware & Gadgets',
    url: '/tag/hardware-gadgets/',
  },
  {
    label: 'Startups & Economy',
    url: '/tag/startups-economy/',
  },
  {
    label: 'Arbeitswelt',
    url: '/tag/arbeitswelt/',
  },
  {
    label: 'E-Commerce',
    url: '/tag/e-commerce/',
  },
  {
    label: 'New Finance',
    url: '/tag/finance/',
  },
  {
    label: 'Gaming',
    url: '/tag/gaming/',
  },
  {
    label: 'Mobilität',
    url: '/tag/mobilitaet/',
  },
  {
    label: 'Future & Science',
    url: '/tag/future-science/',
  },
];

const skills: PageHeaderLinksType[] = [
  {
    label: 'Guides',
    url: '/guides/',
  },
  {
    label: 'Paper',
    url: '/paper/',
  },
  {
    label: 'Onlinekurse',
    url: '/online-kurse/',
  },
];

const brands: PageHeaderTeaserImageType[] = [
  {
    title: 't3n',
    url: '/',
    image: 'https://storage.googleapis.com/t3n-de/static/t3n-logo-burger.png',
  },
  {
    title: 'MIT Technology Review',
    url: '/technology-review/',
    image: 'https://storage.googleapis.com/t3n-de/static/tr-logo-burger.png',
  },
];

const magazines: PageHeaderTeaserImageType[] = [
  {
    title: 't3n Magazin Aktuelle Ausgabe',
    url: 'https://shop.t3n.de/collections/t3n-magazin',
    image: 'https://storage.googleapis.com/t3n-media/t3n-magazin-preview.png',
  },
  {
    title: 'MIT Technology Review Magazin Aktuelle Ausgabe',
    url: 'https://shop.heise.de/magazine/mit-technology-review/',
    image:
      'https://storage.googleapis.com/t3n-media/mit-tr-magazine-cover-1.png',
  },
];

const Wrapper = styled(Box)`
  margin: 0 auto;

  ${({ theme }) => layout({ theme, width: [1, 1, 1, '61.25rem'] })};
`;

const meta: Meta<typeof LegacyPageLayout> = {
  component: LegacyPageLayout,
  title: 'Legacy/Layout/PageLayout',
  parameters: { controls: { sort: 'requiredFirst' }, layout: 'fullscreen' },
  args: {
    privacyManagerId: '123456',
    pinnedTeaser,
    tags,
    ressorts,
    skills,
    brands,
    magazines,
    headerCampaignUrl: 'https://t3n.de/headercampaign',
    headerCampaignImage:
      'https://storage.googleapis.com/t3n-media/t3n-headercampaign.png',
    burgerCampaignUrl: 'https://t3n.de/burgercampaign',
    burgerCampaignImage:
      'https://storage.googleapis.com/t3n-de/static/promo-burger.png',
    isLoggedIn: true,
    children: (
      <Wrapper>
        <LegacyBreadcrumb>
          <LegacyBreadcrumbItem label="Home" href="/" />
          <LegacyBreadcrumbItem label="News" href="/news/" />
          <LegacyBreadcrumbItem label="Das hier ist ein wirklich langer Titel eines Artikels um zu demonstrieren, wie die Scrollversion aussieht" />
        </LegacyBreadcrumb>
        <LegacySection variant="primary" narrow>
          <Text my={9}>Narrow Dummy LegacySection</Text>
        </LegacySection>
        <LegacySection variant="secondary">
          <Text my={9}>Dummy LegacySection</Text>
        </LegacySection>
        <LegacySection variant="primary" wide>
          <Text my={9}>Wide Dummy LegacySection</Text>
        </LegacySection>
        <LegacySection variant="secondary">
          <Text my={9}>Dummy LegacySection</Text>
        </LegacySection>
        <LegacySection variant="primary">
          <Text my={9}>Dummy LegacySection</Text>
        </LegacySection>
        <LegacySection variant="secondary">
          <Text my={9}>Dummy LegacySection</Text>
        </LegacySection>
        <LegacySection variant="primary">
          <Text my={9}>Dummy LegacySection</Text>
        </LegacySection>
      </Wrapper>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof LegacyPageLayout>;

export const legacyPageLayout: Story = {};
