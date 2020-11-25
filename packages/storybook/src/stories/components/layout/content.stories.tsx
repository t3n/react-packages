import React from 'react';

import { Content } from '@t3n/components';

export default {
  title: 'Components/Layout/Content',
  component: Content,
};

export const defaultStory = () => <Content>Hello</Content>;

defaultStory.story = {
  name: 'Default',
};
