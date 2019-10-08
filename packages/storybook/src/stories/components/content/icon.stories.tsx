import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { Icon } from '@t3n/components';
import { MaterialVisibility } from '@t3n/icons';
import { theme } from '@t3n/theme';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Content/Icon',
  component: Icon,
  decorators: [withKnobs, storyContainerDecorator]
};

export const defaultStory = () => <Icon component={MaterialVisibility} />;

defaultStory.story = {
  name: 'Default'
};

// storiesOf('Components|Content/Loader', module)
//   .addDecorator(withKnobs)
//   .add(
//     'Default',
//     () => (
//       <Loader
//         small={boolean('small', false)}
//         backgroundColor={select<LoaderVariants>(
//           'Farbe',
//           Object.keys(theme.colors.background) as LoaderVariants[],
//           'inverse'
//         )}
//       />
//     ),
//     {
//       options: {
//         showPanel: true
//       }
//     }
//   );
