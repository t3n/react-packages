import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import { withKnobs } from '@storybook/addon-knobs';
import { Box, LegacyHeader } from '@t3n/components';

const Wrapper = styled(Box)`
  min-height: 100vh;
  ${({ theme }) => color({ theme, bg: 'shades.grey232' })}
`;

const LegacyHeaderWrapper = styled(Box)`
  width: 61.25rem;
  margin: 0 auto auto;
  position: relative;
`;

export default {
  title: 'Legacy|Layout/Header',
  component: LegacyHeader,
  decorators: [withKnobs],
};

export const defaultStory = () => (
  <Wrapper display="flex">
    <LegacyHeaderWrapper>
      <LegacyHeader />
    </LegacyHeaderWrapper>
  </Wrapper>
);

defaultStory.story = {
  name: 'Default',
};
