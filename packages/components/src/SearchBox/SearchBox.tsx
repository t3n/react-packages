import React, {
  FormEvent,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import AutoSuggest, {
  GetSuggestionValue,
  OnSuggestionsClearRequested,
  OnSuggestionSelected,
  RenderSuggestion,
  RenderSuggestionsContainerParams,
  SuggestionSelectedEventData,
  SuggestionsFetchRequested,
} from 'react-autosuggest';
import { styled } from 'styled-components';
import { space, WidthProps } from 'styled-system';
import { useDebouncedCallback } from 'use-debounce';

import Box from '../Box';
import Text from '../Text';
import SearchBoxWrapper, { SearchBoxVariantType } from './SearchBoxWrapper';

export interface GroupedSuggestions<S> {
  title: string;
  suggestions: S[];
}

export interface SearchBoxProps<S> extends WidthProps, PropsWithChildren {
  variant: SearchBoxVariantType;
  placeholder: string;
  isLoading: boolean;
  defaultValue?: string;
  multiSection?: boolean;
  suggestions: GroupedSuggestions<S>[] | S[] | null;
  getSuggestionValue: GetSuggestionValue<S>;
  handleSuggestionFetchRequested: SuggestionsFetchRequested;
  handleSuggestionClearRequested: OnSuggestionsClearRequested;
  renderSuggestion: RenderSuggestion<S>;
  renderSuggestionsEmpty?: ReactNode;
  onSelect: OnSuggestionSelected<S>;
  clearOnSelect?: boolean;
  onSearchTermChange?: (term: string) => void;
}

const SuggestionItem = styled.div`
  ${({ theme }) => space({ theme, p: [2, 3] })}
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.shades.grey244};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;

const SuggestionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  right: 0;
  z-index: 200;

  .react-autosuggest__suggestion--highlighted {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const SearchBox = <S,>({
  variant: variantProp = 'highlight',
  placeholder = 'Suche',
  defaultValue,
  multiSection,
  isLoading = true,
  renderSuggestion,
  renderSuggestionsEmpty: SuggestionsEmpty,
  suggestions = null,
  onSelect,
  clearOnSelect = true,
  onSearchTermChange,
  getSuggestionValue,
  handleSuggestionFetchRequested,
  handleSuggestionClearRequested,
}: SearchBoxProps<S>) => {
  const [term, setTerm] = useState(defaultValue || '');
  const debounced = useDebouncedCallback(handleSuggestionFetchRequested, 400);

  useEffect(() => {
    if (onSearchTermChange) {
      onSearchTermChange(term);
    }
  }, [onSearchTermChange, term]);

  const handleOnChange = (
    event: FormEvent<any>,
    { newValue }: { newValue: string },
  ) => {
    setTerm(newValue);
  };

  const renderSuggestionContainer = ({
    children,
    containerProps,
  }: RenderSuggestionsContainerParams) => {
    return (
      term.length >= 3 && (
        <SuggestionContainer {...containerProps}>
          {children}
          {suggestions !== null &&
            suggestions.length === 0 &&
            !isLoading &&
            (SuggestionsEmpty || (
              <Text color="text.primary" p={[2, 3]} m={0}>
                Keine Treffer gefunden
              </Text>
            ))}
        </SuggestionContainer>
      )
    );
  };

  const handleSuggestionSelected = (
    event: React.FormEvent<any>,
    data: SuggestionSelectedEventData<S>,
  ) => {
    if (clearOnSelect) setTerm('');
    onSelect(event, data);
  };

  return (
    <SearchBoxWrapper variantProp={variantProp} isLoading={isLoading}>
      {multiSection ? (
        <AutoSuggest<S>
          multiSection
          renderSuggestionsContainer={renderSuggestionContainer}
          getSuggestionValue={getSuggestionValue}
          focusInputOnSuggestionClick={false}
          suggestions={suggestions === null ? [] : (suggestions as S[])}
          getSectionSuggestions={(section: GroupedSuggestions<S>) =>
            section.suggestions
          }
          shouldRenderSuggestions={(value) => value.length > 1}
          renderSectionTitle={(section: GroupedSuggestions<S>) => (
            <Box px={[3]} py={[2]} bg="shades.grey232">
              <Text m={0} bold>
                {section.title}
              </Text>
            </Box>
          )}
          onSuggestionsFetchRequested={debounced}
          onSuggestionsClearRequested={handleSuggestionClearRequested}
          onSuggestionSelected={handleSuggestionSelected}
          renderSuggestion={(suggestion, params) => (
            <SuggestionItem>
              {renderSuggestion(suggestion, params)}
            </SuggestionItem>
          )}
          inputProps={{
            value: term,
            onChange: handleOnChange,
            placeholder,
          }}
        />
      ) : (
        <AutoSuggest<S>
          renderSuggestionsContainer={renderSuggestionContainer}
          getSuggestionValue={getSuggestionValue}
          focusInputOnSuggestionClick={false}
          suggestions={suggestions === null ? [] : (suggestions as S[])}
          shouldRenderSuggestions={(value) => value.length > 1}
          onSuggestionsFetchRequested={debounced}
          onSuggestionsClearRequested={handleSuggestionClearRequested}
          onSuggestionSelected={handleSuggestionSelected}
          renderSuggestion={(suggestion, params) => (
            <SuggestionItem>
              {renderSuggestion(suggestion, params)}
            </SuggestionItem>
          )}
          inputProps={{
            value: term,
            onChange: handleOnChange,
            placeholder,
          }}
        />
      )}
    </SearchBoxWrapper>
  );
};

export default SearchBox;
