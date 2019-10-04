import React, { useState, FormEvent } from 'react';
import AutoSuggest, {
  RenderSuggestion,
  SuggestionsFetchRequested,
  OnSuggestionsClearRequested,
  GetSuggestionValue,
  RenderSuggestionsContainerParams,
  OnSuggestionSelected
} from 'react-autosuggest';
import styled from 'styled-components';

import { darken } from 'polished';
import { ThemeProps, composeTextStyle } from '@t3n/theme';
import { space, WidthProps, layout } from 'styled-system';
import { MaterialClear, T3nLoupe, MaterialArrowForward } from '@t3n/icons';
import { useDebouncedCallback } from 'use-debounce';
import { Loader } from '../Loader';
import { Text } from '../Text';

const IconWrapper = styled.div`
  width: 25px;
  display: flex;
  align-items: center;
  ${({ theme }) => space({ theme, ml: 2 })}

  &:hover {
    cursor: pointer;
  }

  svg {
    fill: ${({ theme }: ThemeProps) => theme.colors.text.inverse};
    width: 23px;
    height: 23px;
  }
`;

const InputWrapper = styled.div`
  flex-grow: 2;

  input {
    background-color: transparent;
    border: none;
    color: ${({ theme }: ThemeProps) => theme.colors.text.inverse};
    width: 100%;
    line-height: 40px;
    height: 40px;

    &::placeholder {
      color: ${({ theme }: ThemeProps) => theme.colors.text.inverse};
    }

    ${({ theme }) => composeTextStyle({ textStyle: 'regular', theme })};

    &:focus {
      border-color: #2a2a2a;
      outline: 0;
    }
  }
`;

const Wrapper = styled.div<WidthProps & ThemeProps>`
  background-color: ${({ theme }: ThemeProps) =>
    darken(0.17, theme.colors.brand.red)};

  position: relative;
  border-radius: ${({ theme }: ThemeProps) => `${theme.border.radii[1]}`};
  display: flex;
  max-width: 500px;
  height: 40px;

  ${({ theme }) => space({ theme, px: 2 })}
  ${layout}
`;

const SuggestionContainer = styled.div`
  background-color: ${({ theme }: ThemeProps) =>
    theme.colors.background.primary};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  right: 0;

  .react-autosuggest__suggestion--highlighted {
    background-color: ${({ theme }: ThemeProps) =>
      theme.colors.background.secondary};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const SuggestionItem = styled.div`
  ${({ theme }) => space({ theme, p: [1, 2] })}
  color: ${({ theme }: ThemeProps) => theme.colors.text.primary};
  border-bottom: 1px solid ${({ theme }: ThemeProps) =>
    theme.colors.shades.grey244};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }: ThemeProps) =>
      theme.colors.background.secondary};
  }
`;

export interface SearchBoxProps<S> extends WidthProps {
  placeholder: string;
  isLoading: boolean;
  showMoreLink: boolean;
  suggestions: S[];
  getSuggestionValue: GetSuggestionValue<S>;
  handleSuggestionFetchRequested: SuggestionsFetchRequested;
  handleSuggestionClearRequested: OnSuggestionsClearRequested;
  renderSuggestion: RenderSuggestion<S>;
  onSelect: OnSuggestionSelected<S>;
}

function SearchBox<T>({
  width,
  placeholder,
  isLoading,
  showMoreLink,
  renderSuggestion,
  suggestions,
  onSelect,
  getSuggestionValue,
  handleSuggestionFetchRequested,
  handleSuggestionClearRequested
}: SearchBoxProps<T>) {
  const [term, setTerm] = useState('');
  const [debounced] = useDebouncedCallback(handleSuggestionFetchRequested, 200);

  const handleOnChange = (
    event: FormEvent<any>,
    { newValue }: { newValue: string }
  ) => {
    setTerm(newValue);
  };

  const renderSuggestionContainer = ({
    children,
    query,
    containerProps
  }: RenderSuggestionsContainerParams) => {
    return (
      term.length > 0 &&
      suggestions.length > 0 && (
        <SuggestionContainer {...containerProps}>
          {children}
          {showMoreLink && (
            <SuggestionItem>
              <Text m={0}>
                {`Alle Ergebnisse für "${query}"`} <MaterialArrowForward />
              </Text>
            </SuggestionItem>
          )}
        </SuggestionContainer>
      )
    );
  };

  return (
    <Wrapper width={width}>
      <InputWrapper>
        <AutoSuggest
          alwaysRenderSuggestions
          renderSuggestionsContainer={renderSuggestionContainer}
          getSuggestionValue={getSuggestionValue}
          suggestions={suggestions}
          shouldRenderSuggestions={() => term.length >= 3}
          onSuggestionsFetchRequested={debounced}
          onSuggestionsClearRequested={handleSuggestionClearRequested}
          onSuggestionSelected={onSelect}
          renderSuggestion={(suggestion, params) => (
            <SuggestionItem>
              {renderSuggestion(suggestion, params)}
            </SuggestionItem>
          )}
          inputProps={{
            value: term,
            onChange: handleOnChange,
            placeholder
          }}
        />
      </InputWrapper>
      <IconWrapper>
        {isLoading ? (
          <Loader small />
        ) : (
          <>
            {!term || term.length === 0 ? (
              <T3nLoupe />
            ) : (
              <MaterialClear onClick={() => setTerm('')} />
            )}
          </>
        )}
      </IconWrapper>
    </Wrapper>
  );
}

SearchBox.defaultProps = {
  isLoading: true,
  showMoreLink: true,
  placeholder: 'Suche nach Pionieren'
};

export { SearchBox };