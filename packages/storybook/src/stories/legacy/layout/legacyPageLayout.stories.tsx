import React from 'react';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';
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
import { LegacyUserMenuProps } from '@t3n/components/src/LegacyUserMenu';

const Wrapper = styled(Box)`
  ${({ theme }) => color({ theme, bg: 'shades.grey204' })}
`;

const LegacyPageLayoutWrapper = styled(Box)`
  width: 61.25rem;
  margin: 0 auto auto;
  position: relative;
`;

const standardUser: LegacyUserMenuProps['user'] = {
  name: 'Jan Christe',
  nickName: 'jan.christe',
  avatarUrl:
    'https://storage.googleapis.com/t3n-de/pioneers/2a363b7c2b439bb50cec3d7caef6b5b0d1c68af3/undefined?auto=format&fit=crop&h=100&w=100&ixlib=react-9.0.2&h=100&w=100',
};

const standardLinkGroup: LegacyUserMenuProps['itemGroups'] = [
  {
    item: [
      <a href="https://t3n.de/pioneers/profile/">Pioneers-Profil</a>,
      <a href="https://t3n.de/account">Konto / Pro</a>,
      <a href="https://t3n.de/account/merkliste">Merkliste</a>,
    ],
  },
];

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
          user={standardUser}
          userMenuLabelUrl="/account/"
          userMenuLinkGroups={standardLinkGroup}
          tags={tagNavTags}
          headerCampaignUrl={variants[randomNumber].href}
          headerCampaignImage={variants[randomNumber].image}
          headerCampaignImageMobile={variants[randomNumber].imageMobile}
          newsIndicator={number('News Indikator', 3)}
          proIndicator={number('Pro Indikator', 1)}
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
        userMenuLabelUrl="/account/"
        userMenuLinkGroups={standardLinkGroup}
        tags={tagNavTags}
        headerCampaignUrl={variants[randomNumber].href}
        headerCampaignImage={variants[randomNumber].image}
        headerCampaignImageMobile={variants[randomNumber].imageMobile}
        newsIndicator={number('Indikator', 3)}
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
          user={standardUser}
          userMenuLabelUrl="/account/"
          userMenuLinkGroups={standardLinkGroup}
          tags={tagNavTags}
          headerCampaignUrl={variants[randomNumber].href}
          headerCampaignImage={variants[randomNumber].image}
          headerCampaignImageMobile={variants[randomNumber].imageMobile}
          newsIndicator={number('Indikator', 3)}
          showP0={boolean('Show p0', true)}
          previewP0={boolean('Preview p0', true)}
          showP2={boolean('Show p2', true)}
          previewP2={boolean('Preview p2', true)}
          showP13={boolean('Show p13', true)}
          previewP13={boolean('Preview p13', true)}
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
