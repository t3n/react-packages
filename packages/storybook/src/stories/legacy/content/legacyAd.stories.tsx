import React from 'react';
import { boolean, number, select } from '@storybook/addon-knobs';
import type { Story } from '@storybook/react';
import styled from 'styled-components';
import { color } from 'styled-system';

import {
  Box,
  LegacyAd,
  LegacyBreadcrumb,
  LegacyBreadcrumbItem,
  LegacyPageLayout,
  LegacySection,
  Text,
} from '@t3n/components';
import { LegacyAdName } from '@t3n/components/src/LegacyAd/LegacyAd';
import { TagNavTagsType } from '@t3n/components/src/LegacyHeader/components/LegacyTagNav';
import { LegacyUserMenuProps } from '@t3n/components/src/LegacyUserMenu';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: LegacyAd,
  title: 'Legacy/Content/Ad',
  decorators: [storyContainerDecorator],
};

export const defaultStory: Story = () => (
  <Box
    backgroundColor="background.secondary"
    width="1024px"
    height="1000px"
    pt="4"
  >
    <LegacyAd
      name={
        select(
          'Name',
          [
            'T3N_D_Top',
            'T3N_D_Right',
            'T3N_D_Incontent-1',
            'T3N_D_Incontent-2',
            'T3N_D_Incontent-3',
            'T3N_D_Incontent-4',
            'T3N_D_Incontent-5',
            'T3N_D_Incontent-6',
            'T3N_D_Incontent-7',
            'T3N_D_Incontent-8',
            'T3N_D_Incontent-9',
            'T3N_D_Incontent-10',
            'T3N_D_Incontent-11',
            'T3N_D_Sidebar-1',
            'T3N_D_Sidebar-2',
            'T3N_D_Sidebar-3',
            'T3N_M_Incontent-1',
            'T3N_M_Incontent-2',
            'T3N_M_Incontent-3',
            'T3N_M_Incontent-4',
            'T3N_M_Incontent-5',
            'T3N_M_Incontent-6',
            'T3N_M_Incontent-7',
            'T3N_M_Incontent-8',
            'T3N_M_Incontent-9',
            'T3N_M_Incontent-10',
            'T3N_M_Sticky',
          ],
          'T3N_D_Top'
        ) as LegacyAdName
      }
      preview={boolean('Preview', true)}
    />
  </Box>
);

defaultStory.storyName = 'Default';

const Wrapper = styled(Box)`
  ${({ theme }) => color({ theme, bg: 'shades.grey204' })}
  width: 100%;
  height: 235rem;
`;

const LegacyPageLayoutWrapper = styled(Box)`
  width: 61.25rem;
  margin: 0 auto auto;
  position: relative;
  top: 20px;
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

export const pageLayoutStory: Story = () => {
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
          adUnits={['T3N_D_Top', 'T3N_D_Right']}
          previewAdUnits={boolean('Preview', true)}
        >
          <LegacyBreadcrumb>
            <LegacyBreadcrumbItem label="Home" href="/" />
            <LegacyBreadcrumbItem label="News" href="/news/" />
            <LegacyBreadcrumbItem label="Das hier ist ein wirklich langer Titel eines Artikels um zu demonstrieren, wie die Scrollversion aussieht" />
          </LegacyBreadcrumb>
          <LegacyAd
            name="T3N_D_Incontent-1"
            preview={boolean('Preview', true)}
          />
          <LegacySection variant="secondary" narrow>
            <Text my={9}>Narrow Dummy LegacySection</Text>
          </LegacySection>
          <LegacySection variant="secondary">
            <Text my={9}>Dummy LegacySection</Text>
          </LegacySection>
          <LegacyAd
            name="T3N_D_Incontent-2"
            preview={boolean('Preview', true)}
          />
          <LegacySection variant="secondary" wide>
            <Text my={9}>Wide Dummy LegacySection</Text>
          </LegacySection>
          <LegacySection variant="secondary">
            <Text my={9}>Dummy LegacySection</Text>
          </LegacySection>
          <LegacyAd
            name="T3N_D_Incontent-3"
            preview={boolean('Preview', true)}
          />
          <LegacySection variant="secondary">
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

pageLayoutStory.storyName = 'PageLayout';
