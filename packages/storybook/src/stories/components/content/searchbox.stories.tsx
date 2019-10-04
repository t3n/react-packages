import React, { useState } from 'react';
import { SearchBox, PageHeader, Avatar } from '@t3n/components';
import { withKnobs } from '@storybook/addon-knobs';
import {
  SuggestionsFetchRequestedParams,
  SuggestionSelectedEventData
} from 'react-autosuggest';
import { storyContainerDecorator } from '../../../utils/decorators';

const placeholderText = 'Suche nach digitialen Pionieren, News und mehr';

export default {
  component: SearchBox,
  title: 'Components|Content/SearchBox',
  decorators: [withKnobs, storyContainerDecorator]
};

interface TSuggestion {
  title: string;
  value: string;
  url: string;
  description: string;
}

const allSuggestions: TSuggestion[] = [
  {
    title: 'Erstes Ergebnis',
    description: 'Some description content',
    url: '/news',
    value: '1'
  },
  {
    title: 'Zweites Ergebnis',
    description: 'Some description content',
    url: '/news',
    value: '2'
  },
  {
    title: 'Drittes Ergebnis',
    description: 'Some description content',
    url: '/news',
    value: '3'
  }
];

const SearchBoxWithData: React.FC<{
  isLoading: boolean;
  width: any;
  initialSuggestions: TSuggestion[];
}> = ({ isLoading, width }) => {
  const [suggestions, setSuggestions] = useState<TSuggestion[]>([]);
  const [loading, setLoading] = useState(isLoading);

  const handleSuggestionChange = (r: SuggestionsFetchRequestedParams) => {
    if (r.reason === 'input-changed') {
      setLoading(true);
      setTimeout(() => {
        setSuggestions(allSuggestions);
        setLoading(false);
      }, 1000);
    }
  };

  const onSelect = (
    event: React.FormEvent,
    data: SuggestionSelectedEventData<TSuggestion>
  ) => {
    // eslint-disable-next-line no-alert
    alert(`Deine Auswahl: ${data.suggestion.title}`);
    setSuggestions([]);
  };

  return (
    <SearchBox<TSuggestion>
      width={width}
      onSelect={onSelect}
      handleSuggestionFetchRequested={handleSuggestionChange}
      handleSuggestionClearRequested={() => setSuggestions([])}
      getSuggestionValue={s => s.title}
      suggestions={suggestions}
      renderSuggestion={s => <div>{s.title}</div>}
      isLoading={loading}
      placeholder={placeholderText}
    />
  );
};

export const defaultStory = () => (
  <SearchBoxWithData width="auto" initialSuggestions={[]} isLoading={false} />
);

defaultStory.story = {
  name: 'Default'
};

export const loadingStory = () => {
  return <SearchBoxWithData initialSuggestions={[]} width="auto" isLoading />;
};

loadingStory.story = {
  name: 'Ladend'
};

export const inHeaderStory = () => {
  return (
    <PageHeader>
      <SearchBoxWithData
        initialSuggestions={[]}
        isLoading={false}
        width={[0.3, 0.5, 0.7]}
      />
      <Avatar src="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80" />
    </PageHeader>
  );
};

inHeaderStory.story = {
  name: 'Im Header'
};
