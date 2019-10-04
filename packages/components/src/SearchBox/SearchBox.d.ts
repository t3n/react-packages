import React from 'react';
import { WidthProps } from 'styled-system';
export interface SearchBoxProps {
    placeholder: string;
    isLoading: boolean;
}
declare const SearchBox: React.FC<SearchBoxProps & WidthProps>;
export { SearchBox };
