import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Link } from '@t3n/components';
import {
  LinkVariantType,
  LinkUnderlineType
} from '@t3n/components/src/Link/Link';

import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Inputs/Link', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <Link
        href={text('URL', 'https://t3n.de')}
        variant={select(
          'Variante',
          ['primary', 'secondary', 'highlight', 'inverse'] as LinkVariantType[],
          'primary'
        )}
        small={boolean('Kleiner Text', false)}
        underline={select(
          'Unterstreichen',
          ['none', 'hover', 'always'] as LinkUnderlineType[],
          'none'
        )}
        target="_blank"
      >
        {text('Text', 'weiter zu t3n.de')}
      </Link>
    ),
    {
      options: {
        showPanel: true
      }
    }
  );
