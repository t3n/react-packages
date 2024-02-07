import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import { PageHeader, UserMenu } from '@t3n/components';
import { UserMenuProps } from '@t3n/components/src/UserMenu';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: UserMenu,
  title: 'Components/Content/UserMenu',
  decorators: [storyContainerDecorator],
};

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

export const defaultStory = () => {
  return (
    <PageHeader light={boolean('Hell?', false)}>
      <UserMenu
        light={boolean('Hell?', false)}
        isProMember={boolean('Pro-Member?', true)}
        userEmail="john.doe@beispiel.de"
      />
    </PageHeader>
  );
};

defaultStory.storyName = 'Default';

export const notLoggedInStory = () => {
  return (
    <PageHeader light={boolean('Hell?', false)}>
      <UserMenu light={boolean('Hell?', false)} />
    </PageHeader>
  );
};

notLoggedInStory.storyName = 'Not Logged In';

export const extraContentStory = () => {
  return (
    <PageHeader>
      <UserMenu
        light={boolean('Hell?', false)}
        isProMember={boolean('Pro-Member?', true)}
        userEmail="john.doe@beispiel.de"
        userMenuItems={links}
      />
    </PageHeader>
  );
};

extraContentStory.storyName = 'Extra Content';
