import React from 'react';
export interface LegacyPaginationProps {
    currentPage: number;
    totalPages: number;
    maxPageLinks: number;
    onClick: (currentPage: number) => void;
}
export interface LegacyPaginationContainerProps {
    disabled?: boolean;
}
declare const LegacyPagination: React.FC<LegacyPaginationProps>;
export default LegacyPagination;
