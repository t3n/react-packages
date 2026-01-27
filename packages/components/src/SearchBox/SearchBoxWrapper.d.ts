import { PropsWithChildren } from 'react';
export type SearchBoxVariantType = 'highlight' | 'light' | 'grey';
interface SearchBoxWrapperProps extends Required<PropsWithChildren> {
    variantProp: SearchBoxVariantType;
    isLoading: boolean;
    tabbable?: boolean;
}
declare const SearchBoxWrapper: ({ variantProp, isLoading, tabbable, children, }: SearchBoxWrapperProps) => import("react/jsx-runtime").JSX.Element;
export default SearchBoxWrapper;
