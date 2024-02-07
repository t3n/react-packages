import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import {
  Content,
  H1,
  PageLayout,
  Section,
  Text,
  UserMenu,
  VisualSection,
} from '@t3n/components';

export default {
  title: 'Components/Layout/PageLayout',
  component: PageLayout,
};

export const defaultStory = () => {
  const noContentPadding = boolean('Kein Inhaltsabstand', false);
  const showHeader = boolean('Mit Header', true);

  return (
    <PageLayout
      noContentPadding={noContentPadding}
      showHeader={showHeader}
      light={boolean('Helle Variante', false)}
      headerContent={<UserMenu isProMember userEmail="john.doe@beispiel.de" />}
      showPrivacySettingsLink
      privacyManagerId="123456"
    >
      Content
    </PageLayout>
  );
};

defaultStory.storyName = 'Default';

export const withTransparentHeader = () => {
  const noContentPadding = boolean('Kein Inhaltsabstand', false);
  const showHeader = boolean('Mit Header', true);

  return (
    <PageLayout
      initialTransparent
      noContentPadding={noContentPadding}
      showHeader={showHeader}
      headerContent={<UserMenu isProMember userEmail="john.doe@beispiel.de" />}
      showPrivacySettingsLink
      privacyManagerId="123456"
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

withTransparentHeader.storyName = 'Transparenter Header';
