/// <reference types="react" />
import { RenderSuggestion, SuggestionsFetchRequested, OnSuggestionsClearRequested, GetSuggestionValue, OnSuggestionSelected } from 'react-autosuggest';
import { WidthProps } from 'styled-system';
export interface GroupedSuggestions<S> {
    title: string;
    suggestions: S[];
}
export declare type SearchBoxVariantType = 'red' | 'light';
export interface SearchBoxProps<S> extends WidthProps {
    variant: SearchBoxVariantType;
    placeholder: string;
    isLoading: boolean;
    multiSection?: boolean;
    suggestions: GroupedSuggestions<S>[] | S[] | null;
    getSuggestionValue: GetSuggestionValue<S>;
    handleSuggestionFetchRequested: SuggestionsFetchRequested;
    handleSuggestionClearRequested: OnSuggestionsClearRequested;
    renderSuggestion: RenderSuggestion<S>;
    onSelect: OnSuggestionSelected<S>;
    onSearchTermChange?: (term: string) => void;
}
declare function SearchBox<S>({ variant: variantProp, width, placeholder, multiSection, isLoading, renderSuggestion, suggestions, onSelect, onSearchTermChange, getSuggestionValue, handleSuggestionFetchRequested, handleSuggestionClearRequested, }: SearchBoxProps<S>): JSX.Element;
declare namespace SearchBox {
    var defaultProps: {
        isLoading: boolean;
        suggestions: null;
        variant: string;
        placeholder: string;
    };
}
export { SearchBox };
