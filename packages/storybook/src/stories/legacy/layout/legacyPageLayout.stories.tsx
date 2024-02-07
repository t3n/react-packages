import React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Story } from '@storybook/react';
import styled from 'styled-components';
import { color } from 'styled-system';

import {
  Box,
  Content,
  H1,
  LegacyBreadcrumb,
  LegacyBreadcrumbItem,
  LegacyPageLayout,
  LegacySection,
  Text,
  VisualSection,
} from '@t3n/components';
import { TagNavTagsType } from '@t3n/components/src/LegacyHeader/components/LegacyTagNav';
import { UserMenuProps } from '@t3n/components/src/UserMenu';

const Wrapper = styled(Box)`
  ${({ theme }) => color({ theme, bg: 'shades.grey204' })}
`;

const LegacyPageLayoutWrapper = styled(Box)`
  width: 61.25rem;
  margin: 0 auto auto;
  position: relative;
`;

const tagNavTags: TagNavTagsType[] = [
  {
    label: 'Homeoffice 🖥',
    url: 'https://t3n.de/tag/homeoffice/',
  },
  {
    label: 't3n Adventskalender 🎄',
    url: 'https://t3n.de/adventskalender',
  },
  {
    label: 'Apple-Event',
    url: 'https://t3n.de/news/m1-macbooks-mehr-highlights-apple-event-1336654/',
  },
  {
    label: 'iPhone 12',
    url: 'https://t3n.de/tag/iphone/',
  },
  {
    label: 'PS5',
    url: 'https://t3n.de/tag/playstation/',
  },
  {
    label: 't3n Deals',
    url: 'https://t3n.de/deals/',
  },
  {
    label: 'Adobe',
    url: 'https://t3n.de/brandhub/adobe/',
  },
];

const variants = [
  {
    image: 'https://storage.googleapis.com/t3n-media/t3n-headercampaign.png',
    imageMobile:
      'https://storage.googleapis.com/t3n-media/t3n-headercampaign-mobile.png',
    href: 'https://t3n.de/headercampaign',
  },
];

const randomNumber = Math.floor(variants.length * Math.random());

const links: UserMenuProps['userMenuItems'] = [
  <a href="/">
    Eine
    <span role="img" aria-label="Sonnenblume">
      🌻
    </span>
    Blume
  </a>,
  <a href="https://faq.t3n.de/">FAQ</a>,
];

export default {
  title: 'Legacy/Layout/PageLayout',
  component: LegacyPageLayout,
  decorators: [withKnobs],
};

export const defaultStory: Story = () => {
  return (
    <Wrapper display="flex">
      <LegacyPageLayoutWrapper>
        <LegacyPageLayout
          privacyManagerId="123456"
          tags={tagNavTags}
          headerCampaignUrl={variants[randomNumber].href}
          headerCampaignImage={variants[randomNumber].image}
          headerCampaignImageMobile={variants[randomNumber].imageMobile}
          isProMember={boolean('Pro-Member?', true)}
          userEmail="john.doe@beispiel.de"
        >
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
        </LegacyPageLayout>
      </LegacyPageLayoutWrapper>
    </Wrapper>
  );
};

defaultStory.storyName = 'Default';

export const notLoggedInStory: Story = () => (
  <Wrapper display="flex">
    <LegacyPageLayoutWrapper>
      <LegacyPageLayout
        privacyManagerId="123456"
        tags={tagNavTags}
        headerCampaignUrl={variants[randomNumber].href}
        headerCampaignImage={variants[randomNumber].image}
        headerCampaignImageMobile={variants[randomNumber].imageMobile}
      >
        <VisualSection variant="highlight">
          <Content>
            <H1 mb={8} color="shades.white">
              Some Headline
            </H1>
          </Content>
        </VisualSection>
        <LegacySection variant="primary">
          <Text my={9}>Dummy LegacySection</Text>
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
        <LegacySection variant="secondary">
          <Text my={9}>Dummy LegacySection</Text>
        </LegacySection>
        <LegacySection variant="primary">
          <Text my={9}>Dummy LegacySection</Text>
        </LegacySection>
      </LegacyPageLayout>
    </LegacyPageLayoutWrapper>
  </Wrapper>
);

notLoggedInStory.storyName = 'Not logged in';

export const adZonesStory: Story = () => {
  return (
    <Wrapper display="flex">
      <LegacyPageLayoutWrapper>
        <LegacyPageLayout
          privacyManagerId="123456"
          tags={tagNavTags}
          headerCampaignUrl={variants[randomNumber].href}
          headerCampaignImage={variants[randomNumber].image}
          headerCampaignImageMobile={variants[randomNumber].imageMobile}
          adUnits={['T3N_D_Top', 'T3N_D_Right', 'T3N_M_Incontent-1']}
          previewAdUnits={boolean('Preview AdUnits', true)}
          isProMember={boolean('Pro-Member?', true)}
          userEmail="john.doe@beispiel.de"
          userMenuItems={links}
        >
          <LegacySection variant="primary">
            <Text my={9}>Dummy LegacySection</Text>
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
          <LegacySection variant="secondary">
            <Text my={9}>Dummy LegacySection</Text>
          </LegacySection>
          <LegacySection variant="primary">
            <Text my={9}>Dummy LegacySection</Text>
          </LegacySection>
        </LegacyPageLayout>
      </LegacyPageLayoutWrapper>
    </Wrapper>
  );
};

adZonesStory.storyName = 'With AdZones';
