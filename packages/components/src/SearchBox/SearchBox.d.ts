import React from 'react';
import { GetSuggestionValue, OnSuggestionsClearRequested, OnSuggestionSelected, RenderSuggestion, SuggestionsFetchRequested } from 'react-autosuggest';
import { WidthProps } from 'styled-system';
export interface GroupedSuggestions<S> {
    title: string;
    suggestions: S[];
}
export declare type SearchBoxVariantType = 'red' | 'light' | 'grey';
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
}
declare function SearchBox<S>({ variant: variantProp, width, placeholder, defaultValue, multiSection, isLoading, renderSuggestion, renderSuggestionsEmpty: SuggestionsEmpty, suggestions, onSelect, clearOnSelect, onSearchTermChange, getSuggestionValue, handleSuggestionFetchRequested, handleSuggestionClearRequested, }: SearchBoxProps<S>): JSX.Element;
declare namespace SearchBox {
    var defaultProps: {
        isLoading: boolean;
        suggestions: null;
        variant: string;
        placeholder: string;
        clearOnSelect: boolean;
    };
}
export { SearchBox };
