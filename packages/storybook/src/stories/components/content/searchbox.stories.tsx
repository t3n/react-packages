import React, { useState } from 'react';
import { SearchBox, PageHeader, Avatar, Section, Text } from '@t3n/components';
import { withKnobs } from '@storybook/addon-knobs';
import {
  SuggestionsFetchRequestedParams,
  SuggestionSelectedEventData,
} from 'react-autosuggest';
import {
  GroupedSuggestions,
  SearchBoxVariantType,
} from '@t3n/components/src/SearchBox';
import { storyContainerDecorator } from '../../../utils/decorators';

const placeholderText = 'Suche nach digitialen Pionieren, News und mehr';

export default {
  component: SearchBox,
  title: 'Components|Content/SearchBox',
  decorators: [withKnobs, storyContainerDecorator],
};

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

const categorizedSuggestions: GroupedSuggestions<TSuggestion>[] = [
  {
    title: 'Pioniere',
    suggestions: allSuggestions,
  },
  {
    title: 'Interessen',
    suggestions: allSuggestions,
  },
  {
    title: 'Tools',
    suggestions: allSuggestions,
  },
];

const SearchBoxWithData: React.FC<{
  isLoading: boolean;
  width: any;
  variant: SearchBoxVariantType;
  initialSuggestions: TSuggestion[];
  withMore?: boolean;
  onSearchTermChange?: (term: string) => void;
  clearOnSelect?: boolean;
}> = ({
  isLoading,
  width,
  onSearchTermChange,
  variant,
  withMore = false,
  clearOnSelect,
}) => {
  const [suggestions, setSuggestions] = useState<TSuggestion[] | null>(null);
  const [loading, setLoading] = useState(isLoading);

  const handleSuggestionChange = (r: SuggestionsFetchRequestedParams) => {
    if (r.reason === 'input-changed') {
      setLoading(true);
      setTimeout(() => {
        setSuggestions(
          withMore
            ? [
                ...allSuggestions,
                {
                  type: 'MORE',
                  title: 'Alle Ergebnisse anzeigen',
                  value: 'more',
                  url: '/news',
                  description: '',
                },
              ]
            : allSuggestions
        );
        setLoading(false);
      }, 1000);
    }
  };

  const onSelect = (
    event: React.FormEvent,
    data: SuggestionSelectedEventData<TSuggestion>
  ) => {
    if (data.suggestion.type === 'ITEM') {
      // eslint-disable-next-line no-alert
      alert(`Deine Auswahl: ${data.suggestion.title}`);
    } else {
      // eslint-disable-next-line no-alert
      alert('Du willst mehr Ergebnisse sehen');
    }
    setSuggestions([]);
  };

  return (
    <SearchBox<TSuggestion>
      width={width}
      variant={variant}
      onSelect={onSelect}
      handleSuggestionFetchRequested={handleSuggestionChange}
      handleSuggestionClearRequested={() => setSuggestions(null)}
      getSuggestionValue={(s) => s.title}
      suggestions={suggestions}
      renderSuggestion={(s) => <div>{s.title}</div>}
      isLoading={loading}
      onSearchTermChange={onSearchTermChange}
      placeholder={placeholderText}
      clearOnSelect={clearOnSelect}
    />
  );
};

export const defaultStory = () => (
  <SearchBoxWithData
    variant="red"
    width="auto"
    initialSuggestions={[]}
    isLoading={false}
  />
);

defaultStory.story = {
  name: 'Default',
};

export const lightStory = () => (
  <>
    <Section variant="secondary">
      <SearchBoxWithData
        variant="light"
        width="auto"
        initialSuggestions={[]}
        isLoading={false}
      />
    </Section>
    <Section variant="highlight">
      <SearchBoxWithData
        variant="light"
        width="auto"
        initialSuggestions={[]}
        isLoading={false}
      />
    </Section>
  </>
);

lightStory.story = {
  name: 'Helle Variante',
};

export const greyStory = () => (
  <>
    <Section variant="primary">
      <SearchBoxWithData
        variant="grey"
        width="auto"
        initialSuggestions={[]}
        isLoading={false}
      />
    </Section>
  </>
);

greyStory.story = {
  name: 'Graue Variante',
};

export const loadingStory = () => {
  return (
    <SearchBoxWithData
      variant="red"
      initialSuggestions={[]}
      width="auto"
      isLoading
    />
  );
};

loadingStory.story = {
  name: 'Ladend',
};

const SearchBoxWithNoData: React.FC<{
  renderSuggestionsEmpty?: React.ReactNode;
}> = ({ renderSuggestionsEmpty }) => {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<TSuggestion[] | null>(null);

  const handleSuggestionChange = (r: SuggestionsFetchRequestedParams) => {
    if (r.reason === 'input-changed' && r.value.length > 2) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuggestions([]);
      }, 1000);
    }
  };

  return (
    <SearchBox<TSuggestion>
      width="auto"
      onSelect={() => {
        console.log('selected');
      }}
      handleSuggestionFetchRequested={handleSuggestionChange}
      handleSuggestionClearRequested={() => setSuggestions(null)}
      getSuggestionValue={(s) => s.title}
      suggestions={suggestions}
      renderSuggestion={(s) => <div>{s.title}</div>}
      renderSuggestionsEmpty={renderSuggestionsEmpty}
      isLoading={loading}
      placeholder={placeholderText}
    />
  );
};

export const noResults = () => {
  return <SearchBoxWithNoData />;
};

noResults.story = {
  name: 'Ohne Treffer',
};

export const customNoResults = () => {
  return (
    <SearchBoxWithNoData
      renderSuggestionsEmpty={
        <Text color="feedback.error" p={[2, 3]} m={0}>
          Es gab leider ein Problem beim Laden der Ergebnisse!
        </Text>
      }
    />
  );
};

customNoResults.story = {
  name: 'Individuelle Fehlermeldung',
};

export const keepSelectionStory = () => (
  <SearchBoxWithData
    variant="red"
    width="auto"
    initialSuggestions={[]}
    isLoading={false}
    clearOnSelect={false}
  />
);

keepSelectionStory.story = {
  name: 'Auswahl nicht zurücksetzen',
};

const SearchBoxWithCategorizedData: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<
    GroupedSuggestions<TSuggestion>[] | null
  >(null);

  const handleSuggestionChange = (r: SuggestionsFetchRequestedParams) => {
    if (r.reason === 'input-changed' && r.value.length > 2) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuggestions(categorizedSuggestions);
      }, 1000);
    }
  };

  return (
    <SearchBox<TSuggestion>
      width="auto"
      multiSection
      onSelect={() => {
        console.log('selected');
      }}
      handleSuggestionFetchRequested={handleSuggestionChange}
      handleSuggestionClearRequested={() => setSuggestions(null)}
      getSuggestionValue={(s) => s.title}
      suggestions={suggestions}
      renderSuggestion={(s) => <div>{s.title}</div>}
      isLoading={loading}
      placeholder={placeholderText}
    />
  );
};

export const withCategorizedData = () => {
  return <SearchBoxWithCategorizedData />;
};

withCategorizedData.story = {
  name: 'Ergebnisse in Kategorien',
};

export const inHeaderStory = () => {
  return (
    <PageHeader>
      <SearchBoxWithData
        variant="red"
        initialSuggestions={[]}
        isLoading={false}
        width={[0.3, 0.5, 0.7]}
      />
      <Avatar
        src="https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
        alt="Avatar"
      />
    </PageHeader>
  );
};

inHeaderStory.story = {
  name: 'Im Header',
};

export const withMoreLinkStory = () => (
  <SearchBoxWithData
    variant="red"
    width="auto"
    initialSuggestions={[]}
    isLoading={false}
    withMore
  />
);

withMoreLinkStory.story = {
  name: 'Mit Mehr Link',
};

const SearchTermChangeStory = () => {
  const [term, setTerm] = useState('');

  return (
    <>
      <SearchBoxWithData
        variant="red"
        width="auto"
        initialSuggestions={[]}
        isLoading={false}
        withMore
        onSearchTermChange={(t) => setTerm(t)}
      />
      <Text>Suchbegriff: {term}</Text>
    </>
  );
};

export const withSearchTermChangeStory = () => <SearchTermChangeStory />;

withSearchTermChangeStory.story = {
  name: 'Auslesen des Suchbegriffs',
};
