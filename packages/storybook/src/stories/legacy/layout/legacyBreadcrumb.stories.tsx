import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import {
  Box,
  Content,
  LegacyBreadcrumb,
  LegacyBreadcrumbItem,
} from '@t3n/components';

const Wrapper = styled(Box)`
  ${({ theme }) => color({ theme, bg: 'background.secondary' })}
`;

const LegacyBreadcrumbWrapper = styled(Box)`
  ${({ theme }) => color({ theme, bg: 'background.primary' })}
  height: 30rem;
`;

export default {
  title: 'Legacy/Layout/Breadcrumb',
  component: LegacyBreadcrumb,
};

export const defaultStory = () => (
  <Wrapper display="flex" justifyContent="center">
    <Content small>
      <LegacyBreadcrumbWrapper>
        <LegacyBreadcrumb>
          <LegacyBreadcrumbItem label="Home" href="/" />
          <LegacyBreadcrumbItem label="Titel eines Artikels" />
        </LegacyBreadcrumb>
      </LegacyBreadcrumbWrapper>
    </Content>
  </Wrapper>
);

defaultStory.storyName = 'Default';

export const scrollingStory = () => (
  <Wrapper display="flex" justifyContent="center">
    <Content small>
      <LegacyBreadcrumbWrapper>
        <LegacyBreadcrumb>
          <LegacyBreadcrumbItem label="Home" href="/" />
          <LegacyBreadcrumbItem label="News" href="/news/" />
          <LegacyBreadcrumbItem label="Das hier ist ein wirklich langer Titel eines Artikels um zu demonstrieren, wie die Scrollversion aussieht" />
        </LegacyBreadcrumb>
      </LegacyBreadcrumbWrapper>
    </Content>
  </Wrapper>
);

scrollingStory.storyName = 'Scrolling';
