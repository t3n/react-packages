import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Link, NoticeBox, NoticeBoxText } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof NoticeBox> = {
  component: NoticeBox,
  title: 'Components/Content/NoticeBox',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    children: (
      <NoticeBoxText>
        <b>Pro-Talk-Terminierung:</b> Zu früh? Zu spät? Genau richtig?{' '}
        <Link href="https://t3n.de" rel="noreferrer">
          Zur Umfrage{' '}
        </Link>
      </NoticeBoxText>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof NoticeBox>;

export const noticeBox: Story = {};
