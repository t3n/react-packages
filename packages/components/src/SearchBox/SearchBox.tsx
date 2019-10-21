import React, { useState, FormEvent } from 'react';
import AutoSuggest, {
  RenderSuggestion,
  SuggestionsFetchRequested,
  OnSuggestionsClearRequested,
  GetSuggestionValue,
  RenderSuggestionsContainerParams,
  OnSuggestionSelected,
  SuggestionSelectedEventData
} from 'react-autosuggest';
import styled from 'styled-components';

import { darken } from 'polished';
import { ThemeProps, composeTextStyle, theme as t3nTheme } from '@t3n/theme';
import { space, WidthProps, layout, variant } from 'styled-system';
import { MaterialClear, T3nLoupe, MaterialArrowForward } from '@t3n/icons';
import { useDebouncedCallback } from 'use-debounce';
import { Loader } from '../Loader';
import { Text } from '../Text';
import { Box } from '../Box';

const IconWrapper = styled.div<{ variant: SearchBoxVariantType }>`
  width: 25px;
  display: flex;
  align-items: center;
  ${({ theme }) => space({ theme, ml: 3 })}

  &:hover {
    cursor: pointer;
  }

  svg {
    ${variant({
      variants: {
        red: {
          fill: 'text.inverse'
        },
        light: {
          fill: 'text.primary'
        }
      }
    })};
    width: 23px;
    height: 23px;
  }
`;

const InputWrapper = styled.div<{ variant: SearchBoxVariantType }>`
  flex-grow: 2;

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    line-height: 40px;
    height: 40px;

    ${variant({
      variants: {
        red: {
          color: 'text.inverse'
        },
        light: {
          color: 'text.primary'
        }
      }
    })};

    &::placeholder {
      ${variant({
        variants: {
          red: {
            color: 'text.inverse'
          },
          light: {
            color: 'text.primary'
          }
        }
      })};
    }

    ${({ theme }) => composeTextStyle({ textStyle: 'regular', theme })};

    &:focus {
      border-color: #2a2a2a;
      outline: 0;
    }
  }
`;

const Wrapper = styled.div<
  { variant: SearchBoxVariantType } & WidthProps & ThemeProps
>`
  ${variant({
    variants: {
      red: {
        color: 'text.primary',
        bg: darken(0.17, t3nTheme.colors.brand.red)
      },
      light: {
        bg: 'shades.white'
      }
    }
  })};

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
  z-index: 200;

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
  ${({ theme }) => space({ theme, p: [2, 3] })}
  color: ${({ theme }: ThemeProps) => theme.colors.text.primary};
  border-bottom: 1px solid ${({ theme }: ThemeProps) =>
    theme.colors.shades.grey244};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }: ThemeProps) =>
      theme.colors.background.secondary};
  }
`;

export interface GroupedSuggestions<S> {
  title: string;
  suggestions: S[];
}

export type SearchBoxVariantType = 'red' | 'light';

export interface SearchBoxProps<S> extends WidthProps {
  variant: SearchBoxVariantType;
  placeholder: string;
  isLoading: boolean;
  multiSection?: boolean;
  showMoreLink: boolean;
  suggestions: GroupedSuggestions<S>[] | S[] | null;
  getSuggestionValue: GetSuggestionValue<S>;
  handleSuggestionFetchRequested: SuggestionsFetchRequested;
  handleSuggestionClearRequested: OnSuggestionsClearRequested;
  renderSuggestion: RenderSuggestion<S>;
  onSelect: OnSuggestionSelected<S>;
}

function SearchBox<S>({
  variant: variantProp,
  width,
  placeholder,
  multiSection,
  isLoading,
  showMoreLink,
  renderSuggestion,
  suggestions,
  onSelect,
  getSuggestionValue,
  handleSuggestionFetchRequested,
  handleSuggestionClearRequested
}: SearchBoxProps<S>) {
  const [term, setTerm] = useState('');
  const [debounced] = useDebouncedCallback(handleSuggestionFetchRequested, 400);

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
      term.length >= 3 && (
        <SuggestionContainer {...containerProps}>
          {children}
          {showMoreLink && suggestions && suggestions.length > 0 && (
            <SuggestionItem>
              <Text m={0} align="center">
                {`Alle Ergebnisse für "${query}"`} <MaterialArrowForward />
              </Text>
            </SuggestionItem>
          )}
          {suggestions !== null && suggestions.length === 0 && !isLoading && (
            <Text color="text.primary" p={[2, 3]} m={0}>
              Keine Treffer gefunden
            </Text>
          )}
        </SuggestionContainer>
      )
    );
  };

  const handleSuggestionSelected = (
    event: React.FormEvent<any>,
    data: SuggestionSelectedEventData<S>
  ) => {
    setTerm('');
    onSelect(event, data);
  };

  return (
    <Wrapper variant={variantProp} width={width}>
      <InputWrapper variant={variantProp}>
        <AutoSuggest<S>
          multiSection={multiSection}
          renderSuggestionsContainer={renderSuggestionContainer}
          getSuggestionValue={getSuggestionValue}
          suggestions={suggestions === null ? [] : (suggestions as S[])}
          getSectionSuggestions={(section: GroupedSuggestions<S>) =>
            section.suggestions
          }
          shouldRenderSuggestions={() => term.length >= 2}
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
            placeholder
          }}
        />
      </InputWrapper>
      <IconWrapper variant={variantProp}>
        {isLoading ? (
          <Loader
            color={
              variantProp === 'red'
                ? 'background.primary'
                : 'background.inverse'
            }
            small
          />
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
  suggestions: null,
  variant: 'red',
  placeholder: 'Suche nach Pionieren'
};

export { SearchBox };
