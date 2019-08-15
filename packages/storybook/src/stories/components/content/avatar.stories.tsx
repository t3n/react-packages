import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Avatar, Text, Center, PageLayout } from '@t3n/components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import StoryContainer from '../../../components/StoryContainer';

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

  if (loading || !data.viewer) {
    return <p>Anmelden</p>;
  }

  const {
    viewer: { firstName, lastName, avatarUrl }
  } = data;

  return (
    <Avatar label={`${firstName} ${lastName}`} src={avatarUrl} size="40" />
  );
};

storiesOf('Components|Content/Avatar', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <div>
        <Avatar
          size={text('Größe', '40')}
          src={text(
            'Image URL',
            'https://images.unsplash.com/photo-1565588668820-6f19adba4646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
          )}
          label={text('Label', '')}
          textColor={select('Textfarbe', options, 'black')}
        />
      </div>
    ),
    {
      options: {
        showPanel: true
      }
    }
  )
  .add(
    'Mit Text',
    () => (
      <div>
        <Avatar
          size={text('Größe', '40')}
          src={text(
            'Image URL',
            'https://images.unsplash.com/photo-1565588668820-6f19adba4646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
          )}
          label={text('Label', 'John Doe')}
          textColor={select('Textfarbe', options, 'black')}
        />
      </div>
    ),
    {
      options: {
        showPanel: true
      }
    }
  )
  .add('Live-Daten', () => (
    <>
      <PageLayout showHeader headerContent={<UserAvatar />}>
        <Center>
          <Text>
            Sollte im Header &apos;Anmelden&apos; stehen, melde dich bitte erst
            bei t3n.de an damit deine Live-Daten abgefragt werden können!
          </Text>
        </Center>
      </PageLayout>
    </>
  ));
