import React from 'react';

import { Link, NoticeBox, NoticeBoxText } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  component: NoticeBox,
  title: 'Components/Content/NoticeBox',
  decorators: [storyContainerContentDecorator],
};

export const defaultStory = () => (
  <NoticeBox m={2}>
    <NoticeBoxText>
      <b>Pro-Talk-Terminierung:</b> Zu früh? Zu spät? Genau richtig?{' '}
      <Link href="https://t3n.de" rel="noreferrer">
        {' '}
        Zur Umfrage{' '}
      </Link>
    </NoticeBoxText>
  </NoticeBox>
);

defaultStory.storyName = 'Default';
