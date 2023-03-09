import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import { Box, LegacySection } from '@t3n/components';

export default {
  title: 'Legacy/Layout/Section',
  component: LegacySection,
};

const Wrapper = styled(Box)`
  ${({ theme }) => color({ theme, bg: 'shades.grey204' })}
`;

const LegacyPageLayoutWrapper = styled(Box)`
  width: 61.25rem;
  height: 200px;
  margin: 50px auto auto;
  position: relative;
`;

export const defaultStory = () => (
  <Wrapper display="flex">
    <LegacyPageLayoutWrapper>
      <LegacySection>Hallo Welt</LegacySection>
    </LegacyPageLayoutWrapper>
  </Wrapper>
);

defaultStory.storyName = 'Default';

export const narrowStory = () => (
  <Wrapper display="flex">
    <LegacyPageLayoutWrapper>
      <LegacySection narrow>Hallo Welt</LegacySection>
    </LegacyPageLayoutWrapper>
  </Wrapper>
);

narrowStory.storyName = 'Content schmal';

export const greyBackgroundStory = () => (
  <Wrapper display="flex">
    <LegacyPageLayoutWrapper>
      <LegacySection variant="secondary">Hallo Welt</LegacySection>
    </LegacyPageLayoutWrapper>
  </Wrapper>
);

greyBackgroundStory.storyName = 'Grauer Hintergrund';

export const wideStory = () => (
  <Wrapper display="flex">
    <LegacyPageLayoutWrapper>
      <LegacySection wide>Hallo Welt</LegacySection>
    </LegacyPageLayoutWrapper>
  </Wrapper>
);

wideStory.storyName = 'Content breit';
