import React from 'react';
export type SearchBoxVariantType = 'highlight' | 'light' | 'grey';
type SearchBoxWrapperProps = {
    variantProp: SearchBoxVariantType;
    isLoading: boolean;
    children: React.ReactNode;
    tabbable?: boolean;
};
declare const SearchBoxWrapper: React.FC<SearchBoxWrapperProps>;
export default SearchBoxWrapper;
