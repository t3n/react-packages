import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';

import {
  Avatar,
  Content,
  H1,
  PageLayout,
  Section,
  Text,
  VisualSection,
} from '@t3n/components';

export default {
  title: 'Components/Layout/PageLayout',
  component: PageLayout,
};

export const defaultStory = () => {
  const noContentPadding = boolean('Kein Inhaltsabstand', false);
  const showHeader = boolean('Mit Header', true);
  const contactLink = text('Kontaktlink', 'mailto:info@t3n.de');

  return (
    <PageLayout
      noContentPadding={noContentPadding}
      showHeader={showHeader}
      contactLink={contactLink}
      light={boolean('Helle Variante Header', false)}
    >
      Content
    </PageLayout>
  );
};

defaultStory.story = {
  name: 'Default',
};

export const withTransparentHeader = () => {
  const noContentPadding = boolean('Kein Inhaltsabstand', false);
  const showHeader = boolean('Mit Header', true);
  const contactLink = text('Kontaktlink', 'mailto:info@t3n.de');

  return (
    <PageLayout
      initialTransparent
      noContentPadding={noContentPadding}
      showHeader={showHeader}
      contactLink={contactLink}
      headerContent={
        <Avatar
          src="https://storage.googleapis.com/t3n-de/pioneers/ee08e42d57b7c75290f40f8d9a56489b8db91cd6/Thelen_Frank_Portrait_03%20-%20Lena%20He%C3%9Fbru%CC%88gge.jpg"
          alt="Avatar"
        />
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
  name: 'Transparenter Header',
};
