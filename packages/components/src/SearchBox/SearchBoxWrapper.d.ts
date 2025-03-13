import React from 'react';
export type SearchBoxVariantType = 'red' | 'light' | 'grey';
type SearchBoxWrapperProps = {
    variantProp: SearchBoxVariantType;
    isLoading: boolean;
    term: string;
    setTerm: (term: string) => void;
    children: React.ReactNode;
};
declare const SearchBoxWrapper: React.FC<SearchBoxWrapperProps>;
export default SearchBoxWrapper;
