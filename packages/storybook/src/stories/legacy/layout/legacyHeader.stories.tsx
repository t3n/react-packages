import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import { withKnobs } from '@storybook/addon-knobs';
import { Box, LegacyHeader } from '@t3n/components';
import { LegacyUserMenuProps } from '@t3n/components/src/LegacyUserMenu';
import { TagNavTagsType } from '@t3n/components/src/LegacyHeader/LegacyTagNav';

const Wrapper = styled(Box)`
  min-height: 100vh;
  ${({ theme }) => color({ theme, bg: 'shades.grey232' })}
`;

const LegacyHeaderWrapper = styled(Box)`
  width: 61.25rem;
  margin: 0 auto auto;
  position: relative;
`;

const standardUser: LegacyUserMenuProps['user'] = {
  name: 'Jan Christe',
  avatarUrl:
    'https://storage.googleapis.com/t3n-de/pioneers/2a363b7c2b439bb50cec3d7caef6b5b0d1c68af3/undefined?auto=format&fit=crop&h=100&w=100&ixlib=react-9.0.2&h=100&w=100',
};

const standardLinkGroup: LegacyUserMenuProps['itemGroups'] = [
  {
    item: [
      <a href="https://t3n.de/pioneers/profile/">Mein Pioneers-Profil</a>,
      <a href="https://t3n.de/account">Mein Konto / Pro</a>,
    ],
  },
];

const tagNavTags: TagNavTagsType = [
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
    image: 'https://storage.googleapis.com/t3n-media/t3n-headercampaign-a.png',
    imageMobile:
      'https://storage.googleapis.com/t3n-media/t3n-headercampaign-a-mobile.png',
    href: 'https://t3n.de/headercampaign-a',
  },
  {
    image: 'https://storage.googleapis.com/t3n-media/t3n-headercampaign-b.png',
    imageMobile:
      'https://storage.googleapis.com/t3n-media/t3n-headercampaign-b-mobile.png',
    href: 'https://t3n.de/headercampaign-b',
  },
];

const randomNumber = Math.floor(variants.length * Math.random());

export default {
  title: 'Legacy|Layout/Header',
  component: LegacyHeader,
  decorators: [withKnobs],
};

export const defaultStory = () => (
  <Wrapper display="flex">
    <LegacyHeaderWrapper>
      <LegacyHeader
        user={standardUser}
        userMenuLabelUrl="/account/"
        userMenuLinkGroups={standardLinkGroup}
        tagNavTags={tagNavTags}
        headerCampaignUrl={variants[randomNumber].href}
        headerCampaignImage={variants[randomNumber].image}
        headerCampaignImageMobile={variants[randomNumber].imageMobile}
      />
    </LegacyHeaderWrapper>
  </Wrapper>
);

defaultStory.story = {
  name: 'Default',
};
