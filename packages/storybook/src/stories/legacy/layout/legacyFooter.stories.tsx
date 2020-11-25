import React from 'react';
import styled from 'styled-components';

import { Box, LegacyFooter } from '@t3n/components';

const Wrapper = styled(Box)`
  min-height: 100vh;
`;

const LegacyFooterWrapper = styled(Box)`
  width: 61.25rem;
  margin: auto auto 0;
  position: relative;
`;

export default {
  title: 'Legacy/Layout/Footer',
  component: LegacyFooter,
};

export const defaultStory = () => (
  <Wrapper display="flex">
    <LegacyFooterWrapper>
      <LegacyFooter />
    </LegacyFooterWrapper>
  </Wrapper>
);

defaultStory.story = {
  name: 'Default',
};
