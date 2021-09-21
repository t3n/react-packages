import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { color } from 'styled-system';

import { Box, LegacyUserMenu, Text } from '@t3n/components';
import { LegacyUserMenuProps } from '@t3n/components/src/LegacyUserMenu';

import { storyContainerDecorator } from '../../../utils/decorators';

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  ${({ theme }) => color({ theme, bg: 'shades.grey232' })}
`;

const LegacyPageHeader = styled(Box)`
  width: 61.25rem;
  margin: 0 auto;
  position: relative;
  ${({ theme }) => color({ theme, bg: 'shades.white' })}
`;

const Content = styled(Box)`
  width: 61.25rem;
  height: 300px;
  margin: 0 auto;
  position: relative;
  ${({ theme }) => color({ theme, bg: 'shades.white' })}
`;

export default {
  component: LegacyUserMenu,
  title: 'Legacy/Content/UserMenu',
  decorators: [storyContainerDecorator],
};

const standardUser: LegacyUserMenuProps['user'] = {
  name: 'Jan Christe',
  nickName: 'jan.christe',
  avatarUrl:
    'https://storage.googleapis.com/t3n-de/pioneers/2a363b7c2b439bb50cec3d7caef6b5b0d1c68af3/undefined?auto=format&fit=crop&h=100&w=100&ixlib=react-9.0.2&h=100&w=100',
};

const nickName = 'jan.christe';

const standardLinkGroup: LegacyUserMenuProps['itemGroups'] = [
  {
    item: [
      <a href={`https://t3n.de/pioneers/profile/${nickName}`}>
        Pioneers-Profil
      </a>,
      <a href="https://t3n.de/account">Konto / Pro</a>,
      <a href="https://t3n.de/account/merkliste">Merkliste</a>,
    ],
  },
];

const extraLinkGroups: LegacyUserMenuProps['itemGroups'] = [
  {
    item: [
      <a href="/">Ein toller Link</a>,
      <Text>
        Eine{' '}
        <span role="img" aria-label="Sonnenblume">
          🌻
        </span>{' '}
        Blume
      </Text>,
      <a href="/">Ein famoser Link</a>,
    ],
  },
  {
    item: [
      <a href={`https://t3n.de/pioneers/profile/${nickName}`}>
        Pioneers-Profil
      </a>,
      <a href="https://t3n.de/account">Konto / Pro</a>,
      <a href="https://t3n.de/account/merkliste">Merkliste</a>,
    ],
  },
  {
    item: [<a href="https://faq.t3n.de/">FAQ</a>],
  },
];

export const defaultStory = () => {
  const defaultUser: LegacyUserMenuProps['user'] = {
    name: text('Name', 'Jan Christe'),
    nickName: text('Pioneers-URL', 'jan.christe'),
    avatarUrl: text(
      'Avatar-URL',
      'https://storage.googleapis.com/t3n-de/pioneers/2a363b7c2b439bb50cec3d7caef6b5b0d1c68af3/undefined?auto=format&fit=crop&h=100&w=100&ixlib=react-9.0.2&h=100&w=100'
    ),
  };

  return (
    <Wrapper>
      <LegacyPageHeader display="flex" justifyContent="flex-end" pr={2}>
        <LegacyUserMenu
          loading={boolean('Lädt?', false)}
          user={defaultUser}
          itemGroups={standardLinkGroup}
          labelUrl={text('UserLabel-Link', 'https://t3n.de/account')}
        />
      </LegacyPageHeader>
      <Content />
    </Wrapper>
  );
};

defaultStory.story = {
  name: 'Default',
};

export const loadingStory = () => {
  return (
    <Wrapper>
      <LegacyPageHeader display="flex" justifyContent="flex-end" pr={2}>
        <LegacyUserMenu
          loading
          user={standardUser}
          itemGroups={standardLinkGroup}
        />
      </LegacyPageHeader>
      <Content />
    </Wrapper>
  );
};

loadingStory.story = {
  name: 'Loading',
};

export const notLoggedInStory = () => {
  return (
    <Wrapper>
      <LegacyPageHeader display="flex" justifyContent="flex-end" pr={2}>
        <LegacyUserMenu loading={false} />
      </LegacyPageHeader>
      <Content />
    </Wrapper>
  );
};

notLoggedInStory.story = {
  name: 'Not Logged In',
};

export const extraContentStory = () => {
  return (
    <Wrapper>
      <LegacyPageHeader display="flex" justifyContent="flex-end" pr={2}>
        <LegacyUserMenu
          loading={false}
          user={standardUser}
          itemGroups={extraLinkGroups}
          labelUrl={text('UserLabel-Link', 'https://t3n.de/account')}
        />
      </LegacyPageHeader>
      <Content />
    </Wrapper>
  );
};

extraContentStory.story = {
  name: 'Extra Content',
};
