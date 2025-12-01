export interface LegacyPaginationProps {
    currentPage: number;
    totalPages: number;
    maxPageLinks: number;
    onClick: (currentPage: number) => void;
}
export interface LegacyPaginationContainerProps {
    disabled?: boolean;
}
declare const LegacyPagination: ({ currentPage, totalPages, maxPageLinks, onClick, }: LegacyPaginationProps) => import("react/jsx-runtime").JSX.Element;
export default LegacyPagination;
