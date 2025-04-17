/* eslint-disable react-hooks/rules-of-hooks */
import React, { ComponentType, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, SearchBox, Text } from '@t3n/components';
import { SearchBoxProps } from '@t3n/components/src/SearchBox';

import { storyContainerContentDecorator } from '../../../utils/decorators';

interface TSuggestion {
  type: 'ITEM' | 'MORE';
  title: string;
  value: string;
  url: string;
  description: string;
}

const allSuggestions: TSuggestion[] = [
  {
    type: 'ITEM',
    title: 'Erstes Ergebnis',
    description: 'Some description content',
    url: '/news',
    value: '1',
  },
  {
    type: 'ITEM',
    title: 'Zweites Ergebnis',
    description: 'Some description content',
    url: '/news',
    value: '2',
  },
  {
    type: 'ITEM',
    title: 'Drittes Ergebnis',
    description: 'Some description content',
    url: '/news',
    value: '3',
  },
];

const meta: Meta<ComponentType<SearchBoxProps<TSuggestion>>> = {
  component: SearchBox as ComponentType<SearchBoxProps<TSuggestion>>,
  title: 'Components/Inputs/SearchBox',
  decorators: [
    (Story) => {
      return (
        <Box height="30vh">
          <Story />
        </Box>
      );
    },
    storyContainerContentDecorator,
  ],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    variant: 'grey',
    width: 'auto',
    suggestions: allSuggestions,
    isLoading: false,
    placeholder: 'Suche nach News und mehr',
    handleSuggestionFetchRequested: () => {},
    renderSuggestion: (suggestion: TSuggestion) => (
      <Text>{suggestion.title}</Text>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const searchBox: Story = {};

export const light: Story = {
  args: { variant: 'light' },
};

export const highlight: Story = {
  args: { variant: 'highlight' },
};

export const loading: Story = {
  args: { isLoading: true },
};

export const withSearchTermChange: Story = {
  render: (args) => {
    const [term, setTerm] = useState('');

    return (
      <>
        <SearchBox {...args} onSearchTermChange={(t) => setTerm(t)} />
        <Text>Suchbegriff: {term}</Text>
      </>
    );
  },
};
