import React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { color } from 'styled-system';

import { Box, LegacyHeader } from '@t3n/components';
import { TagNavTagsType } from '@t3n/components/src/LegacyHeader/components/LegacyTagNav';

const Wrapper = styled(Box)`
  min-height: 200vh;
  ${({ theme }) => color({ theme, bg: 'shades.grey232' })}
`;

const LegacyHeaderWrapper = styled(Box)`
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
    image: 'https://assets.t3n.de/t3n-media/t3n-headercampaign.png',
    imageMobile:
      'https://assets.t3n.de/t3n-media/t3n-headercampaign-mobile.png',
    href: 'https://t3n.de/headercampaign',
  },
];

const randomNumber = Math.floor(variants.length * Math.random());

export default {
  title: 'Legacy/Layout/Header',
  component: LegacyHeader,
  decorators: [withKnobs],
};

export const defaultStory = () => (
  <Wrapper display="flex">
    <LegacyHeaderWrapper>
      <LegacyHeader
        tags={tagNavTags}
        headerCampaignUrl={variants[randomNumber].href}
        headerCampaignImage={variants[randomNumber].image}
        headerCampaignImageMobile={variants[randomNumber].imageMobile}
        isProMember={boolean('Pro-Member?', true)}
        userEmail="john.doe@beispiel.de"
      />
    </LegacyHeaderWrapper>
  </Wrapper>
);

defaultStory.storyName = 'Default';

export const notLoggedInStory = () => (
  <Wrapper display="flex">
    <LegacyHeaderWrapper>
      <LegacyHeader
        tags={tagNavTags}
        headerCampaignUrl={variants[randomNumber].href}
        headerCampaignImage={variants[randomNumber].image}
        headerCampaignImageMobile={variants[randomNumber].imageMobile}
      />
    </LegacyHeaderWrapper>
  </Wrapper>
);

notLoggedInStory.storyName = 'Not logged in';
