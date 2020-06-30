import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { UserMenu, PageHeader } from '@t3n/components';
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

const standardLinkGroups: UserMenuProps['linkGroups'] = [
  {
    link: [
      {
        url: `https://t3n.de/pioneers/profile/${standardUser.nickName}`,
        label: 'Mein Pioneers-Profil',
      },
      {
        url: 'https://t3n.de/account',
        label: 'Mein Konto / Pro',
      },
    ],
  },
  {
    link: [
      {
        url: 'https://faq.t3n.de/',
        label: 'FAQ',
      },
    ],
  },
];

const extraContentLinkGroups: UserMenuProps['linkGroups'] = [
  {
    link: [
      {
        url: '/',
        label: 'Ein toller Link',
      },
      {
        url: '/',
        label: (
          <>
            Ein{' '}
            <span role="img" aria-label="Sonnenblume">
              🌻
            </span>{' '}
            Link
          </>
        ),
      },
      {
        url: '/',
        label: 'Ein famoser Link',
      },
    ],
  },
  {
    link: [
      {
        url: `https://t3n.de/pioneers/profile/${standardUser.nickName}`,
        label: 'Mein Pioneers-Profil',
      },
      {
        url: 'https://t3n.de/account',
        label: 'Mein Konto / Pro',
      },
    ],
  },
  {
    link: [
      {
        url: 'https://faq.t3n.de/',
        label: 'FAQ',
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

  const defaultLinkGroups: UserMenuProps['linkGroups'] = [
    {
      link: [
        {
          url: text(
            '1. Link URL',
            `https://t3n.de/pioneers/profile/${defaultUser.nickName}`
          ),
          label: text('1. Linktext', 'Mein Pioneers-Profil'),
        },
        {
          url: text('2. Link URL', 'https://t3n.de/account'),
          label: text('2. Linktext', 'Mein Konto / Pro'),
        },
      ],
    },
    {
      link: [
        {
          url: text('3. Link URL', 'https://faq.t3n.de/'),
          label: text('3. Linktext', 'FAQ'),
        },
      ],
    },
  ];

  return (
    <PageHeader>
      <UserMenu
        loading={boolean('Lädt?', false)}
        loggedIn={boolean('Eingeloggt?', true)}
        user={defaultUser}
        linkGroups={defaultLinkGroups}
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
      <UserMenu loggedIn loading linkGroups={standardLinkGroups} />
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
        linkGroups={standardLinkGroups}
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
        linkGroups={extraContentLinkGroups}
      />
    </PageHeader>
  );
};

extraContentStory.story = {
  name: 'Extra Content',
};
