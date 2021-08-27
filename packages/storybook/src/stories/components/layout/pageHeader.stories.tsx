import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { PageHeader, UserMenu } from '@t3n/components';
import { UserMenuProps } from '@t3n/components/src/UserMenu';

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

const standardUser: UserMenuProps['user'] = {
  label: 'john.doe@beispiel.de',
  name: 'John Doe',
  avatarUrl:
    'https://storage.googleapis.com/t3n-de/pioneers/2a363b7c2b439bb50cec3d7caef6b5b0d1c68af3/undefined?auto=format&fit=crop&h=100&w=100&ixlib=react-9.0.2&h=100&w=100',
};

const nickName = 'jan.christe';

const standardLinkGroups: UserMenuProps['itemGroups'] = [
  {
    item: [
      <a href={`https://t3n.de/pioneers/profile/${nickName}`}>
        Mein Pioneers-Profil
      </a>,
      <a href="https://t3n.de/account">Mein Konto / Pro</a>,
    ],
  },
  {
    item: [<a href="https://faq.t3n.de/">FAQ</a>],
  },
];

export const defaultStory = () => (
  <>
    <PageHeader transparent={boolean('Transparenter Hintergrund', false)} />
  </>
);

defaultStory.story = {
  name: 'Default',
};

export const displayUserMenu = () => (
  <PageHeader>
    <UserMenu
      loading={false}
      loggedIn
      user={standardUser}
      itemGroups={standardLinkGroups}
    />
  </PageHeader>
);

displayUserMenu.story = {
  name: 'Mit Usermenü',
};

export const linkedLogo = () => <PageHeader logoHref="https://t3n.de" />;

linkedLogo.story = {
  name: 'Verlinktes Logo',
};
