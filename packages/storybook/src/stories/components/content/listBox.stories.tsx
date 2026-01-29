import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';
import { space, SpaceProps, typography } from 'styled-system';

import { Heading, ListBox } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const OrderedList = styled.ol<SpaceProps>`
  margin: 0;
  ${space}
`;

const ListItem = styled.li<SpaceProps>`
  ${space}
  ${({ theme }) => typography({ theme, lineHeight: 2 })};
`;

const meta: Meta<typeof ListBox> = {
  component: ListBox,
  title: 'Components/Content/ListBox',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    children: (
      <>
        <Heading as="h3" mt={0}>
          Inhalt
        </Heading>
        <OrderedList pl={4}>
          <ListItem py={2}>Ein Punkt</ListItem>
          <ListItem py={2}>Noch ein Punkt</ListItem>
          <ListItem py={2}>Ein weiterer Punkt</ListItem>
        </OrderedList>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const listBox: Story = {};
