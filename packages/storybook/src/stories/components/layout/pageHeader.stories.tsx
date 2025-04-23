import { Meta, StoryObj } from '@storybook/react';

import { PageHeader } from '@t3n/components';
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

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
  title: 'Components/Layout/PageHeader',
  parameters: { controls: { sort: 'requiredFirst' }, layout: 'fullscreen' },
  args: {
    pinnedTeaser,
    tags,
    ressorts,
    skills,
    brands,
    magazines,
    headerCampaignUrl: 'https://t3n.de/headercampaign',
    headerCampaignImage:
      'https://storage.googleapis.com/t3n-media/t3n-headercampaign-mobile.png',
    burgerCampaignUrl: 'https://t3n.de/burgercampaign',
    burgerCampaignImage:
      'https://storage.googleapis.com/t3n-de/static/promo-burger.png',
  },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const pageHeader: Story = {};
