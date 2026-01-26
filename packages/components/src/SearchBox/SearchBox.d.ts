import React, { ReactNode } from 'react';
import { GetSuggestionValue, OnSuggestionsClearRequested, OnSuggestionSelected, RenderSuggestion, SuggestionsFetchRequested } from 'react-autosuggest';
import { WidthProps } from 'styled-system';
import { SearchBoxVariantType } from './SearchBoxWrapper';
export interface GroupedSuggestions<S> {
    title: string;
    suggestions: S[];
}
export interface SearchBoxProps<S> extends WidthProps {
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
    renderSuggestionsEmpty?: React.ReactNode;
    onSelect: OnSuggestionSelected<S>;
    clearOnSelect?: boolean;
    onSearchTermChange?: (term: string) => void;
    children?: ReactNode;
}
declare const SearchBox: <S>({ variant: variantProp, placeholder, defaultValue, multiSection, isLoading, renderSuggestion, renderSuggestionsEmpty: SuggestionsEmpty, suggestions, onSelect, clearOnSelect, onSearchTermChange, getSuggestionValue, handleSuggestionFetchRequested, handleSuggestionClearRequested, }: SearchBoxProps<S>) => import("react/jsx-runtime").JSX.Element;
export default SearchBox;
