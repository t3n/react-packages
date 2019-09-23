import React from 'react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';

import { Avatar, Text, Center, PageLayout } from '@t3n/components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: Avatar,
  title: 'Components|Content/Avatar',
  decorators: [withKnobs, storyContainerDecorator]
};

const options = {
  White: 'white',
  Black: 'black'
};

const AVATAR_QUERY = gql`
  query storybook_avatarStory {
    viewer {
      me {
        firstName
        lastName
        avatarUrl
      }
    }
  }
`;

const UserAvatar = () => {
  const { data, loading } = useQuery(AVATAR_QUERY);

  if (loading || !data.viewer || !data.viewer.me) {
    return <p>Anmelden</p>;
  }

  const {
    viewer: {
      me: { firstName, lastName, avatarUrl }
    }
  } = data;

  return (
    <Avatar label={`${firstName} ${lastName}`} src={avatarUrl} size={40} />
  );
};

export const defaultStory = () => (
  <div>
    <Avatar
      size={number('Größe', 40)}
      src={text(
        'Image URL',
        'https://images.unsplash.com/photo-1565588668820-6f19adba4646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
      )}
      label={text('Label', '')}
      textColor={select('Textfarbe', options, 'black')}
    />
  </div>
);

defaultStory.story = {
  name: 'Default'
};

export const withText = () => (
  <div>
    <Avatar
      size={number('Größe', 40)}
      src={text(
        'Image URL',
        'https://images.unsplash.com/photo-1565588668820-6f19adba4646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
      )}
      label={text('Label', 'John Doe')}
      textColor={select('Textfarbe', options, 'black')}
    />
  </div>
);

withText.story = {
  name: 'Mit Text'
};

export const liveData = () => (
  <PageLayout showHeader headerContent={<UserAvatar />}>
    <Center>
      <Text>
        Sollte im Header &apos;Anmelden&apos; stehen, melde dich bitte erst bei
        t3n.de an damit deine Live-Daten abgefragt werden können!
      </Text>
    </Center>
  </PageLayout>
);

liveData.story = {
  name: 'Live-Daten'
};

// {
//   options: {
//     showPanel: true
//   }
// }
