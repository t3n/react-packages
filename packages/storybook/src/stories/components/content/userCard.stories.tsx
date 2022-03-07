import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import { Grid, GridItem, H2, UserCard } from '@t3n/components';
import { UserCardProps } from '@t3n/components/src/UserCard';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: UserCard,
  title: 'Components/Content/UserCard',
  decorators: [storyContainerDecorator],
};

const defaultUserStatic: Pick<UserCardProps, 'user' | 'link'> = {
  user: {
    id: 1,
    name: 'Jörg Mugke',
    avatarUrl:
      'https://storage.googleapis.com/t3n-de/pioneers/12b8bf4426d98e112345838a22e6cc7434204ff9/joerg%20Kopie.jpg',
    email: 'beispiel@t3n.de',
    position: 'Geschäftsführer',
    phone: '01234/567890',
    flag: '',
    socialLinks: [
      {
        url: 'https://de.linkedin.com/company/t3n-magazin-yeebase-media-gmbh',
        type: 'LINKEDIN',
      },
      {
        url: 'https://twitter.com/t3n',
        type: 'TWITTER',
      },
      {
        url: 'https://www.xing.com/pages/t3nmagazin-yeebasemediagmbh',
        type: 'XING',
      },
    ],
  },
  link: {
    url: 'https://t3n.de/pioneers/profile/joerg-mugke/',
    title: 'Pioneers-Profil',
  },
};

const compactUser: Pick<UserCardProps, 'user' | 'link'> = {
  user: {
    id: 2,
    name: 'Jörg Mugke',
    avatarUrl:
      'https://storage.googleapis.com/t3n-de/pioneers/12b8bf4426d98e112345838a22e6cc7434204ff9/joerg%20Kopie.jpg',
    email: '',
    position: 'Geschäftsführer',
    phone: '',
    flag: '',
    socialLinks: [
      {
        url: 'https://de.linkedin.com/company/t3n-magazin-yeebase-media-gmbh',
        type: 'LINKEDIN',
      },
      {
        url: 'https://twitter.com/t3n',
        type: 'TWITTER',
      },
      {
        url: 'https://www.xing.com/pages/t3nmagazin-yeebasemediagmbh',
        type: 'XING',
      },
    ],
  },
  link: {
    url: 'https://t3n.de/pioneers/profile/joerg-mugke/',
    title: 'Pioneers-Profil',
  },
};

const flagUser: Pick<UserCardProps, 'user' | 'link'> = {
  user: {
    id: 4,
    name: 'Jan Christe',
    avatarUrl:
      'https://storage.googleapis.com/t3n-de/pioneers/2a363b7c2b439bb50cec3d7caef6b5b0d1c68af3/undefined',
    email: 'beispiel@t3n.de',
    position: 'Gründer & Management Advisor',
    phone: '01234/567890',
    flag: 'Elternzeit',
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
  },
  link: {
    url: 'https://t3n.de/pioneers/profile/jan.christe/',
    title: 'Pioneers-Profil',
  },
};

const compactFlagUser: Pick<UserCardProps, 'user' | 'link'> = {
  user: {
    id: 4,
    name: 'Jan Christe',
    avatarUrl:
      'https://storage.googleapis.com/t3n-de/pioneers/2a363b7c2b439bb50cec3d7caef6b5b0d1c68af3/undefined',
    email: '',
    position: 'Gründer & Management Advisor',
    phone: '',
    flag: 'Elternzeit',
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
  },
  link: {
    url: 'https://t3n.de/pioneers/profile/jan.christe/',
    title: 'Pioneers-Profil',
  },
};

const thirdUser: Pick<UserCardProps, 'user' | 'link'> = {
  user: {
    id: 3,
    name: 'Andreas Lenz',
    avatarUrl:
      'https://storage.googleapis.com/t3n-de/neos/e80a662daac7dc2d910550e0a6bba514dd56d699/andy%20small.png',
    email: 'beispiel@t3n.de',
    position: 'Gründer & Management Advisor',
    phone: '01234/567890',
    flag: '',
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
  },
  link: {
    url: 'https://t3n.de/pioneers/profile/andylenz77/',
    title: 'Pioneers-Profil',
  },
};

const compactThirdUser: Pick<UserCardProps, 'user' | 'link'> = {
  user: {
    id: 3,
    name: 'Andreas Lenz',
    avatarUrl:
      'https://storage.googleapis.com/t3n-de/neos/e80a662daac7dc2d910550e0a6bba514dd56d699/andy%20small.png',
    email: '',
    position: 'Gründer & Management Advisor',
    phone: '',
    flag: '',
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
  },
  link: {
    url: 'https://t3n.de/pioneers/profile/andylenz77/',
    title: 'Pioneers-Profil',
  },
};

const fourthUser: Pick<UserCardProps, 'user' | 'link'> = {
  user: {
    id: 3,
    name: 'Tobias Schäffer',
    avatarUrl:
      'https://storage.googleapis.com/t3n-de/pioneers/64480da599b81e03e34fa5fed5d2eec2456ff443/IMG_TS_Quer.jpg',
    email: '',
    position: 'Geschäftsführer',
    phone: '',
    flag: '',
    socialLinks: [
      {
        url: 'https://de.linkedin.com/company/t3n-magazin-yeebase-media-gmbh',
        type: 'LINKEDIN',
      },
      {
        url: 'https://twitter.com/t3n',
        type: 'TWITTER',
      },
      {
        url: 'https://www.xing.com/pages/t3nmagazin-yeebasemediagmbh',
        type: 'XING',
      },
    ],
  },
  link: {
    url: 'https://t3n.de/pioneers/profile/tobias-schaeffer/',
    title: 'Pioneers-Profil',
  },
};

export const defaultStory = () => {
  const defaultUser: Pick<UserCardProps, 'user' | 'link'> = {
    user: {
      id: 1,
      name: text('Name', 'Jörg Mugke', 'user'),
      avatarUrl: text(
        'Avatar URL',
        'https://storage.googleapis.com/t3n-de/pioneers/12b8bf4426d98e112345838a22e6cc7434204ff9/joerg%20Kopie.jpg',
        'user'
      ),
      email: text('E-Mail Adresse', 'beispiel@t3n.de', 'user'),
      position: text('Position', 'Geschäftsführer', 'user'),
      phone: text('Telefon', '01234/567890', 'user'),
      flag: text('Flag', '', 'user'),
      socialLinks: [
        {
          url: 'https://www.linkedin.com/company/t3n-magazin-yeebase-media-gmbh',
          type: 'LINKEDIN',
        },
        {
          url: 'https://twitter.com/t3n',
          type: 'TWITTER',
        },
        {
          url: 'https://www.xing.com/pages/t3nmagazin-yeebasemediagmbh',
          type: 'XING',
        },
      ],
    },
    link: {
      fullCard: boolean('Ganze Card verlinkt', true, 'user'),
      url: text(
        'Pioneers Network Profil',
        'https://t3n.de/pioneers/profile/joerg-mugke/',
        'user'
      ),
      target: text('Target (default is target: _blank)', '_self', 'user'),
      title: text('URL Title', 'Pioneers Profil', 'user'),
    },
  };

  return (
    <Grid justifyContent="center">
      <GridItem width={[1, 1, 2 / 5]}>
        <UserCard
          compact={boolean('Compact', false, 'card')}
          user={defaultUser.user}
          link={defaultUser.link}
          secondary={boolean('Secondary', false, 'card')}
        />
      </GridItem>
    </Grid>
  );
};

defaultStory.storyName = 'Default';

export const customAvatarStory = () => {
  return (
    <Grid justifyContent="center">
      <GridItem width={[1, 1, 2 / 5]}>
        <UserCard
          compact={boolean('Compact', false, 'card')}
          user={{
            ...defaultUserStatic.user,
            avatarUrl:
              'https://assets.t3n.de/t3n-de/pioneers/12b8bf4426d98e112345838a22e6cc7434204ff9/joerg%20Kopie.jpg?class=avatar-large',
          }}
          link={defaultUserStatic.link}
          optimizeAvatar={false}
          secondary={boolean('Secondary', false, 'card')}
        />
      </GridItem>
    </Grid>
  );
};

customAvatarStory.storyName = 'Custom Avatar-URL';

export const compactStory = () => {
  return (
    <Grid justifyContent="center">
      <GridItem width={[1, 1, 2 / 5]}>
        <UserCard compact user={compactUser.user} link={compactUser.link} />
      </GridItem>
    </Grid>
  );
};

compactStory.storyName = 'Compact';

export const flagStory = () => {
  return (
    <>
      <H2>Default mit Flag</H2>
      <Grid>
        <GridItem width={[1, 1, 2 / 5]}>
          <UserCard user={flagUser.user} link={flagUser.link} compact={false} />
        </GridItem>
      </Grid>
      <H2>Compact mit Flag</H2>
      <Grid>
        <GridItem width={[1, 1, 2 / 5]}>
          <UserCard
            compact
            user={compactFlagUser.user}
            link={compactFlagUser.link}
          />
        </GridItem>
      </Grid>
    </>
  );
};

flagStory.storyName = 'Flag';

export const variantStory = () => {
  return (
    <>
      <H2>Default: 3 Cards</H2>
      <Grid>
        <GridItem width={[1, 1 / 2, 1 / 3]} mb={2}>
          <UserCard
            user={thirdUser.user}
            link={thirdUser.link}
            compact={false}
          />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3]} mb={2}>
          <UserCard user={flagUser.user} link={flagUser.link} compact={false} />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3]} mb={2}>
          <UserCard
            user={defaultUserStatic.user}
            link={defaultUserStatic.link}
            compact={false}
          />
        </GridItem>
      </Grid>

      <H2>Default: 4 Cards</H2>
      <Grid>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard
            user={thirdUser.user}
            link={thirdUser.link}
            compact={false}
          />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard user={flagUser.user} link={flagUser.link} compact={false} />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard
            user={defaultUserStatic.user}
            link={defaultUserStatic.link}
            compact={false}
          />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard
            user={fourthUser.user}
            link={fourthUser.link}
            compact={false}
          />
        </GridItem>
      </Grid>

      <H2>Compact: 3 Cards</H2>
      <Grid>
        <GridItem width={[1, 1 / 2, 1 / 3]} mb={2}>
          <UserCard
            compact
            user={compactThirdUser.user}
            link={compactThirdUser.link}
          />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3]} mb={2}>
          <UserCard
            compact
            user={compactFlagUser.user}
            link={compactFlagUser.link}
          />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3]} mb={2}>
          <UserCard compact user={compactUser.user} link={compactUser.link} />
        </GridItem>
      </Grid>

      <H2>Compact: 4 Cards</H2>
      <Grid>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard
            compact
            user={compactThirdUser.user}
            link={compactThirdUser.link}
          />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard
            compact
            user={compactFlagUser.user}
            link={compactFlagUser.link}
          />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard compact user={compactUser.user} link={compactUser.link} />
        </GridItem>
        <GridItem width={[1, 1 / 2, 1 / 3, 1 / 4]} mb={2}>
          <UserCard compact user={fourthUser.user} link={fourthUser.link} />
        </GridItem>
      </Grid>
    </>
  );
};

variantStory.storyName = 'Varianten';

export const wholeCardLinked = () => {
  const minimalUser: Pick<UserCardProps, 'user' | 'link'> = {
    user: {
      id: 1,
      name: text('Name', 'Jörg Mugke', 'user'),
      avatarUrl: text(
        'Avatar URL',
        'https://storage.googleapis.com/t3n-de/pioneers/12b8bf4426d98e112345838a22e6cc7434204ff9/joerg%20Kopie.jpg',
        'user'
      ),
      position: text('Position', 'Geschäftsführer', 'user'),
      socialLinks: [],
    },
    link: {
      fullCard: boolean('Ganze Card verlinkt', true, 'user'),
      url: text('Link', 'https://t3n.de/pioneers/profile/joerg-mugke/', 'user'),
      title: text('URL Title', 'Pioneers Profil', 'user'),
    },
  };

  return (
    <Grid justifyContent="center">
      <GridItem width={[1, 1, 2 / 5]}>
        <UserCard
          compact={boolean('Compact', false, 'card')}
          user={minimalUser.user}
          link={minimalUser.link}
          secondary={boolean('Secondary', false, 'card')}
        />
      </GridItem>
    </Grid>
  );
};

defaultStory.storyName = 'Default';
