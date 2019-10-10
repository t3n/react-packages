import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import {
  PageLayout,
  Section,
  Text,
  H1,
  Avatar,
  VisualSection,
  Content
} from '@t3n/components';

export default {
  title: 'Components|Layout/PageLayout',
  component: PageLayout,
  decorators: [withKnobs]
};

export const defaultStory = () => {
  const noContentPadding = boolean('Kein Inhaltsabstand', false);
  const showHeader = boolean('Mit Header', true);

  return (
    <PageLayout noContentPadding={noContentPadding} showHeader={showHeader}>
      Content
    </PageLayout>
  );
};

defaultStory.story = {
  name: 'Default'
};

export const withTransparentHeader = () => {
  const noContentPadding = boolean('Kein Inhaltsabstand', false);
  const showHeader = boolean('Mit Header', true);

  return (
    <PageLayout
      initialTransparent
      noContentPadding={noContentPadding}
      showHeader={showHeader}
      headerContent={
        <Avatar src="https://storage.googleapis.com/t3n-de/pioneers/ee08e42d57b7c75290f40f8d9a56489b8db91cd6/Thelen_Frank_Portrait_03%20-%20Lena%20He%C3%9Fbru%CC%88gge.jpg" />
      }
    >
      <VisualSection variant="highlight">
        <Content>
          <H1 mb={8} color="shades.white">
            Some Headline
          </H1>
        </Content>
      </VisualSection>
      <Section variant="primary">
        <Text my={9}>Dummy Section</Text>
      </Section>
      <Section variant="secondary">
        <Text my={9}>Dummy Section</Text>
      </Section>
      <Section variant="primary">
        <Text my={9}>Dummy Section</Text>
      </Section>
      <Section variant="secondary">
        <Text my={9}>Dummy Section</Text>
      </Section>
      <Section variant="primary">
        <Text my={9}>Dummy Section</Text>
      </Section>
      <Section variant="secondary">
        <Text my={9}>Dummy Section</Text>
      </Section>
      <Section variant="primary">
        <Text my={9}>Dummy Section</Text>
      </Section>
    </PageLayout>
  );
};

withTransparentHeader.story = {
  name: 'Transparenter Header'
};
