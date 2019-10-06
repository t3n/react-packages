/// <reference types="react" />
import { RenderSuggestion, SuggestionsFetchRequested, OnSuggestionsClearRequested, GetSuggestionValue, OnSuggestionSelected } from 'react-autosuggest';
import { WidthProps } from 'styled-system';
export interface SearchBoxProps<S> extends WidthProps {
    placeholder: string;
    isLoading: boolean;
    showMoreLink: boolean;
    suggestions: S[] | null;
    getSuggestionValue: GetSuggestionValue<S>;
    handleSuggestionFetchRequested: SuggestionsFetchRequested;
    handleSuggestionClearRequested: OnSuggestionsClearRequested;
    renderSuggestion: RenderSuggestion<S>;
    onSelect: OnSuggestionSelected<S>;
}
declare function SearchBox<T>({ width, placeholder, isLoading, showMoreLink, renderSuggestion, suggestions, onSelect, getSuggestionValue, handleSuggestionFetchRequested, handleSuggestionClearRequested }: SearchBoxProps<T>): JSX.Element;
declare namespace SearchBox {
    var defaultProps: {
        isLoading: boolean;
        showMoreLink: boolean;
        suggestions: null;
        placeholder: string;
    };
}
export { SearchBox };
