import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { UserMenu, PageHeader, Text } from '@t3n/components';
import { UserMenuProps } from '@t3n/components/src/UserMenu';
import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: UserMenu,
  title: 'Components|Content/UserMenu',
  decorators: [withKnobs, storyContainerDecorator],
};

const standardUser: UserMenuProps['user'] = {
  name: 'Jan Christe',
  nickName: 'jan.christe',
  avatarUrl:
    'https://storage.googleapis.com/t3n-de/pioneers/2a363b7c2b439bb50cec3d7caef6b5b0d1c68af3/undefined?auto=format&fit=crop&h=100&w=100&ixlib=react-9.0.2&h=100&w=100',
};

const standardLinkGroups: UserMenuProps['itemGroups'] = [
  {
    item: [
      {
        label: (
          <>
            <a
              href={`https://t3n.de/pioneers/profile/${standardUser.nickName}`}
            >
              Mein Pioneers-Profil
            </a>
          </>
        ),
      },
      {
        label: (
          <>
            <a href="https://t3n.de/account">Mein Konto / Pro</a>
          </>
        ),
      },
    ],
  },
  {
    item: [
      {
        label: (
          <>
            <a href="https://faq.t3n.de/">FAQ</a>
          </>
        ),
      },
    ],
  },
];

const extraContentLinkGroups: UserMenuProps['itemGroups'] = [
  {
    item: [
      {
        label: (
          <>
            <a href="/">Ein toller Link</a>
          </>
        ),
      },
      {
        label: (
          <Text>
            Eine{' '}
            <span role="img" aria-label="Sonnenblume">
              🌻
            </span>{' '}
            Blume
          </Text>
        ),
      },
      {
        label: (
          <>
            <a href="/">Ein famoser Link</a>
          </>
        ),
      },
    ],
  },
  {
    item: [
      {
        label: (
          <>
            <a
              href={`https://t3n.de/pioneers/profile/${standardUser.nickName}`}
            >
              Mein Pioneers-Profil
            </a>
          </>
        ),
      },
      {
        label: (
          <>
            <a href="https://t3n.de/account">Mein Konto / Pro</a>
          </>
        ),
      },
    ],
  },
  {
    item: [
      {
        label: (
          <>
            <a href="https://faq.t3n.de/">FAQ</a>
          </>
        ),
      },
    ],
  },
];

export const defaultStory = () => {
  const defaultUser: UserMenuProps['user'] = {
    name: text('Name', 'Jan Christe'),
    nickName: text('Pioneers Nickname', 'jan.christe'),
    avatarUrl: text(
      'Avatar-URL',
      'https://storage.googleapis.com/t3n-de/pioneers/2a363b7c2b439bb50cec3d7caef6b5b0d1c68af3/undefined?auto=format&fit=crop&h=100&w=100&ixlib=react-9.0.2&h=100&w=100'
    ),
  };

  return (
    <PageHeader>
      <UserMenu
        loading={boolean('Lädt?', false)}
        loggedIn={boolean('Eingeloggt?', true)}
        user={defaultUser}
        itemGroups={standardLinkGroups}
      />
    </PageHeader>
  );
};

defaultStory.story = {
  name: 'Default',
};

export const loadingStory = () => {
  return (
    <PageHeader>
      <UserMenu loggedIn loading itemGroups={standardLinkGroups} />
    </PageHeader>
  );
};

loadingStory.story = {
  name: 'Loading',
};

export const notLoggedInStory = () => {
  return (
    <PageHeader>
      <UserMenu
        loading={false}
        loggedIn={false}
        itemGroups={standardLinkGroups}
      />
    </PageHeader>
  );
};

notLoggedInStory.story = {
  name: 'Not Logged In',
};

export const extraContentStory = () => {
  return (
    <PageHeader>
      <UserMenu
        loading={false}
        loggedIn
        user={standardUser}
        itemGroups={extraContentLinkGroups}
      />
    </PageHeader>
  );
};

extraContentStory.story = {
  name: 'Extra Content',
};
