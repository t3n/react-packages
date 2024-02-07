import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { PageHeader, UserMenu } from '@t3n/components';

const StoryWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  z-index: 1;
`;

export default {
  title: 'Components/Layout/PageHeader',
  component: PageHeader,
  decorators: [(story: any) => <StoryWrapper>{story()}</StoryWrapper>],
};

export const defaultStory = () => (
  <PageHeader
    transparent={boolean('Transparenter Hintergrund', false)}
    light={boolean('Helle Variante', false)}
  />
);

defaultStory.storyName = 'Default';

export const displayUserMenu = () => (
  <PageHeader
    transparent={boolean('Transparenter Hintergrund', false)}
    light={boolean('Helle Variante', false)}
  >
    <UserMenu
      light={boolean('Helle Variante', false)}
      isProMember={boolean('Pro-Member?', true)}
      userEmail="john.doe@beispiel.de"
    />
  </PageHeader>
);

displayUserMenu.storyName = 'Mit Usermenü';

export const linkedLogo = () => <PageHeader logoHref="https://t3n.de" />;

linkedLogo.storyName = 'Verlinktes Logo';
