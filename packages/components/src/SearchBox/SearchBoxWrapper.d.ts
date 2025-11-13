import React from 'react';
export type SearchBoxVariantType = 'highlight' | 'light' | 'grey';
type SearchBoxWrapperProps = {
    variantProp: SearchBoxVariantType;
    isLoading: boolean;
    children: React.ReactNode;
    tabbable?: boolean;
};
declare const SearchBoxWrapper: ({ variantProp, isLoading, tabbable, children, }: SearchBoxWrapperProps) => import("react/jsx-runtime").JSX.Element;
export default SearchBoxWrapper;
