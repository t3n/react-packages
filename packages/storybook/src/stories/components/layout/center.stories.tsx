import React from 'react';
import { storiesOf } from '@storybook/react';

import { Center } from '@t3n/components';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  SpaceProps,
  compose,
  space
} from 'styled-system';
import StoryContainer from '../../../components/StoryContainer';

const Box = styled.div<ColorProps & LayoutProps & SpaceProps>(
  compose(
    layout,
    space,
    color
  )
);

storiesOf('Components|Layout/Center', module).add(
  'Default',
  () => (
    <StoryContainer>
      <Center>
        <Box width={1 / 2} height="200px" p={3} bg="background.secondary">
          Zentrierte Box
        </Box>
      </Center>
    </StoryContainer>
  ),
  {
    options: {
      showPanel: false
    }
  }
);
