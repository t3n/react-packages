import React from 'react';
import { UserCard, Grid, GridItem, H2 } from '@t3n/components';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { UserCardProps } from '@t3n/components/src/UserCard';
import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: UserCard,
  title: 'Components|Content/UserCard',
  decorators: [withKnobs, storyContainerDecorator],
};

const defaultUserStatic: UserCardProps['user'] = {
  id: 1,
  name: 'Björn Assmann',
  avatarUrl:
    'https://storage.googleapis.com/t3n-de/pioneers/f9f2668d807b632523c9a8ffefe481719c15b0a8/BAN_sw.png',
  email: 'beispiel@t3n.de',
  position: 'Geschäftsführer | CFO',
  phone: '01234/567890',
  flag: '',
  profileUrl: 'https://t3n.de/pioneers/profile/bjoern.assmann/',
  socialLinks: [
    {
      url: 'https://www.linkedin.com/in/bjoernassmann',
      type: 'LINKEDIN',
    },
    {
      url: 'https://twitter.com/BjoernAssmann',
      type: 'TWITTER',
    },
    {
      url: 'https://www.xing.com/profile/Bjoern_Assmann',
      type: 'XING',
    },
  ],
};

const compactUser: UserCardProps['user'] = {
  id: 2,
  name: 'Björn Assmann',
  avatarUrl:
    'https://storage.googleapis.com/t3n-de/pioneers/f9f2668d807b632523c9a8ffefe481719c15b0a8/BAN_sw.png',
  email: '',
  position: 'Geschäftsführer | CFO',
  phone: '',
  flag: '',
  profileUrl: 'https://t3n.de/pioneers/profile/bjoern.assmann/',
  socialLinks: [
    {
      url: 'https://www.linkedin.com/in/bjoernassmann',
      type: 'LINKEDIN',
    },
    {
      url: 'https://twitter.com/BjoernAssmann',
      type: 'TWITTER',
    },
    {
      url: 'https://www.xing.com/profile/Bjoern_Assmann',
      type: 'XING',
    },
  ],
};

const flagUser: UserCardProps['user'] = {
  id: 4,
  name: 'Jan Christe',
  avatarUrl:
    'https://storage.googleapis.com/t3n-de/pioneers/2a363b7c2b439bb50cec3d7caef6b5b0d1c68af3/undefined',
  email: 'beispiel@t3n.de',
  position: 'Geschäftsführer | CCO & CPO',
  phone: '01234/567890',
  flag: 'Elternzeit',
  profileUrl: 'https://t3n.de/pioneers/profile/jan.christe/',
  socialLinks: [
    {
      url: 'https://www.linkedin.com/in/janchriste',
      type: 'LINKEDIN',
    },
    {
      url: 'https://twitter.com/janchriste',
      type: 'TWITTER',
    },
    {
      url: 'https://www.xing.com/profile/Jan_Christe',
      type: 'XING',
    },
  ],
};

const compactFlagUser: UserCardProps['user'] = {
  id: 4,
  name: 'Jan Christe',
  avatarUrl:
    'https://storage.googleapis.com/t3n-de/pioneers/2a363b7c2b439bb50cec3d7caef6b5b0d1c68af3/undefined',
  email: '',
  position: 'Geschäftsführer | CCO & CPO',
  phone: '',
  flag: 'Elternzeit',
  profileUrl: 'https://t3n.de/pioneers/profile/jan.christe/',
  socialLinks: [
    {
      url: 'https://www.linkedin.com/in/janchriste',
      type: 'LINKEDIN',
    },
    {
      url: 'https://twitter.com/janchriste',
      type: 'TWITTER',
    },
    {
      url: 'https://www.xing.com/profile/Jan_Christe',
      type: 'XING',
    },
  ],
};

const thirdUser: UserCardProps['user'] = {
  id: 3,
  name: 'Andreas Lenz',
  avatarUrl:
    'https://storage.googleapis.com/t3n-de/neos/e80a662daac7dc2d910550e0a6bba514dd56d699/andy%20small.png',
  email: 'beispiel@t3n.de',
  position: 'Geschäftsführer | CEO',
  phone: '01234/567890',
  flag: '',
  profileUrl: 'https://t3n.de/pioneers/profile/andylenz77/',
  socialLinks: [
    {
      url: 'https://www.linkedin.com/in/andreaslenz',
      type: 'LINKEDIN',
    },
    {
      url: 'https://twitter.com/andylenz',
      type: 'TWITTER',
    },
    {
      url: 'https://www.xing.com/profile/Andreas_Lenz4',
      type: 'XING',
    },
  ],
};

const compactThirdUser: UserCardProps['user'] = {
  id: 3,
  name: 'Andreas Lenz',
  avatarUrl:
    'https://storage.googleapis.com/t3n-de/neos/e80a662daac7dc2d910550e0a6bba514dd56d699/andy%20small.png',
  email: '',
  position: 'Geschäftsführer | CEO',
  phone: '',
  flag: '',
  profileUrl: 'https://t3n.de/pioneers/profile/andylenz77/',
  socialLinks: [
    {
      url: 'https://www.linkedin.com/in/andreaslenz',
      type: 'LINKEDIN',
    },
    {
      url: 'https://twitter.com/andylenz',
      type: 'TWITTER',
    },
    {
      url: 'https://www.xing.com/profile/Andreas_Lenz4',
      type: 'XING',
    },
  ],
};

const fourthUser: UserCardProps['user'] = {
  id: 3,
  name: 'Martin Brüggemann',
  avatarUrl:
    'https://storage.googleapis.com/t3n-de/pioneers/2e2e317ae61957e8178c4cfd60b4afb1fa72582c/brgmn-profile-500.jpg',
  email: '',
  position: 'Mitgründer',
  phone: '',
  flag: '',
  profileUrl: 'https://t3n.de/pioneers/profile/brgmn/',
  socialLinks: [
    {
      url: 'https://www.linkedin.com/in/martin-brueggemann-45b438185',
      type: 'LINKEDIN',
    },
    {
      url: 'https://twitter.com/brgmn',
      type: 'TWITTER',
    },
    {
      url: 'https://www.xing.com/profile/Martin_Brueggemann7/cv',
      type: 'XING',
    },
  ],
};

export const defaultStory = () => {
  const defaultUser: UserCardProps['user'] = {
    id: 1,
    name: text('Name', 'Björn Assmann', 'user'),
    avatarUrl: text(
      'Avatar URL',
      'https://storage.googleapis.com/t3n-de/pioneers/f9f2668d807b632523c9a8ffefe481719c15b0a8/BAN_sw.png',
      'user'
    ),
    email: text('E-Mail Adresse', 'beispiel@t3n.de', 'user'),
    position: text('Position', 'Geschäftsführer | CFO', 'user'),
    phone: text('Telefon', '01234/567890', 'user'),
    flag: text('Flag', '', 'user'),
    profileUrl: text(
      'Pioneers Network Profil',
      'https://t3n.de/pioneers/profile/bjoern.assmann/',
      'user'
    ),
    link: {
      noTargetBlank: boolean(
        'No target: _blank (default is target: _blank)',
        false,
        'user'
      ),
      title: text('URL Title', 'Pioneers Profil', 'user'),
    },
    socialLinks: [
      {
        url: 'https://www.linkedin.com/in/bjoernassmann',
        type: 'LINKEDIN',
      },
      {
        url: 'https://twitter.com/BjoernAssmann',
        type: 'TWITTER',
      },
      {
        url: 'https://www.xing.com/profile/Bjoern_Assmann',
        type: 'XING',
      },
    ],
  };

  return (
    <Grid justifyContent="center">
      <GridItem width={[1, 1, 2 / 5]}>
        <UserCard
          compact={boolean('Compact', false, 'card')}
          user={defaultUser}
          secondary={boolean('Secondary', false, 'card')}
        />
      </GridItem>
    </Grid>
  );
};

defaultStory.story = {
  name: 'Default',
};

export const compactStory = () => {
  return (
    <Grid justifyContent="center">
      <GridItem width={[1, 1, 2 / 5]}>
        <UserCard compact user={compactUser} />
      </GridItem>
    </Grid>
  );
};

compactStory.story = {
  name: 'Compact',
};

export const flagStory = () => {
  return (
    <>
      <H2>Default mit Flag</H2>
      <Grid>
        <GridItem width={[1, 1, 2 / 5]}>
          <UserCard user={flagUser} compact={false} />
        </GridItem>
      </Grid>
      <H2>Compact mit Flag</H2>
      <Grid>
        <GridItem width={[1, 1, 2 / 5]}>
          <UserCard compact user={compactFlagUser} />
        </GridItem>
      </Grid>
    </>
  );
};

flagStory.story = {
  name: 'Flag',
};

export const variantStory = () => {
  return (
    <>
      <H2>Default: 3 Cards</H2>
      <Grid>
        <GridItem width={[1, 1 / 2, 1 / 3]} mb={2}>
          <UserCard user={thirdUser} compact={false} />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3]} mb={2}>
          <UserCard user={flagUser} compact={false} />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3]} mb={2}>
          <UserCard user={defaultUserStatic} compact={false} />
        </GridItem>
      </Grid>

      <H2>Default: 4 Cards</H2>
      <Grid>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard user={thirdUser} compact={false} />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard user={flagUser} compact={false} />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard user={defaultUserStatic} compact={false} />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard user={fourthUser} compact={false} />
        </GridItem>
      </Grid>

      <H2>Compact: 3 Cards</H2>
      <Grid>
        <GridItem width={[1, 1 / 2, 1 / 3]} mb={2}>
          <UserCard compact user={compactThirdUser} />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3]} mb={2}>
          <UserCard compact user={compactFlagUser} />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3]} mb={2}>
          <UserCard compact user={compactUser} />
        </GridItem>
      </Grid>

      <H2>Compact: 4 Cards</H2>
      <Grid>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard compact user={compactThirdUser} />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard compact user={compactFlagUser} />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard compact user={compactUser} />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard compact user={fourthUser} />
        </GridItem>
      </Grid>
    </>
  );
};

variantStory.story = {
  name: 'Varianten',
};
