import React from 'react';
export interface LegacyPaginationProps {
    page: number;
    pages: number;
    onClick: (page: number) => void;
}
export interface LegacyPaginationContainerProps {
    disabled?: boolean;
}
export declare const LegacyPagination: React.FC<LegacyPaginationProps>;
