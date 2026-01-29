import React from 'react';
export interface LegacyBookmarkProps {
    onClick: () => void;
    isBookmarked: boolean;
}
export declare const TooltipContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("../Box").BoxProps> & import("../Box").BoxProps, never>> & string;
export declare const Tooltip: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>> & string;
declare const LegacyBookmark: ({ onClick, isBookmarked }: LegacyBookmarkProps) => import("react/jsx-runtime").JSX.Element;
export default LegacyBookmark;
