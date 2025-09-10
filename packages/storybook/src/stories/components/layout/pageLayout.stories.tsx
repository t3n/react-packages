import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  LegacyBreadcrumb,
  LegacyBreadcrumbItem,
  LegacySection,
  PageLayout,
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
  isSponsored: false,
  isPaidArticle: true,
};

const tags: PageHeaderLinksType[] = [
  { label: 'Deepseek', url: '/' },
  { label: 'Künstliche Intelligenz', url: '/' },
  { label: 'DSGVO', url: '/' },
  { label: 'Tesla News', url: '/' },
  { label: 'Amazon Prime Day', url: '/' },
  { label: 'Hybrid Work', url: '/' },
  { label: 'Digitales Deutschland', url: '/' },
  { label: 'Technology Research Hub', url: '/' },
  { label: 'KIckstarter', url: '/' },
  { label: 'SIE', url: '/' },
  { label: 'Cybersecurity', url: '/' },
  { label: 'Bitcoin', url: '/' },
];

const ressorts: PageHeaderLinksType[] = [
  { label: 'Software & Entwicklung', url: '/tag/software-entwicklung/' },
  { label: 'UX & Design', url: '/tag/ux-and-design/' },
  { label: 'Marketing', url: '/tag/marketing/' },
  { label: 'Hardware & Gadgets', url: '/tag/hardware-gadgets/' },
  { label: 'Startups & Economy', url: '/tag/startups-economy/' },
  { label: 'Arbeitswelt', url: '/tag/arbeitswelt/' },
  { label: 'E-Commerce', url: '/tag/e-commerce/' },
  { label: 'New Finance', url: '/tag/finance/' },
  { label: 'Gaming', url: '/tag/gaming/' },
  { label: 'Mobilität', url: '/tag/mobilitaet/' },
  { label: 'Future & Science', url: '/tag/future-science/' },
];

const skills: PageHeaderLinksType[] = [
  { label: 'Guides', url: '/guides/' },
  { label: 'Paper', url: '/paper/' },
  { label: 'Onlinekurse', url: '/online-kurse/' },
];

const brands: PageHeaderTeaserImageType[] = [
  {
    title: 't3n',
    url: '/',
    image: 'https://cdn.t3n.de/js-frontend/static/t3n-logo-burger.png',
  },
  {
    title: 'MIT Technology Review',
    url: '/technology-review/',
    image: 'https://cdn.t3n.de/js-frontend/static/tr-logo-burger.png',
  },
];

const magazines: PageHeaderTeaserImageType[] = [
  {
    title: 't3n Magazin Aktuelle Ausgabe',
    url: 'https://shop.t3n.de/collections/t3n-magazin',
    image:
      'https://cdn.t3n.de/strapi/t3n_neu_4a9dc17210/t3n_neu_4a9dc17210.png',
  },
  {
    title: 'MIT Technology Review Magazin Aktuelle Ausgabe',
    url: 'https://shop.heise.de/magazine/mit-technology-review/',
    image:
      'https://cdn.t3n.de/strapi/TR_Cover_04_25_9fddbf5ab7/TR_Cover_04_25_9fddbf5ab7.png',
  },
];

const meta: Meta<typeof PageLayout> = {
  component: PageLayout,
  title: 'Components/Layout/PageLayout',
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
      'https://cdn.t3n.de/strapi/10_t3n_Headergrafik_Magazinumstellung_A_2x_1_4724f60c72/10_t3n_Headergrafik_Magazinumstellung_A_2x_1_4724f60c72.png',
    burgerCampaignUrl: 'https://t3n.de/burgercampaign',
    burgerCampaignImage:
      'https://cdn.t3n.de/js-frontend/static/promo-burger.png',
    children: (
      <>
        <LegacySection variant="primary" wide innerGap={-4}>
          <LegacyBreadcrumb>
            <LegacyBreadcrumbItem label="Home" href="/" />
            <LegacyBreadcrumbItem label="News" href="/news/" />
            <LegacyBreadcrumbItem label="Das hier ist ein wirklich langer Titel eines Artikels um zu demonstrieren, wie die Scrollversion aussieht" />
          </LegacyBreadcrumb>
        </LegacySection>
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
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

export const pageLayout: Story = {};
