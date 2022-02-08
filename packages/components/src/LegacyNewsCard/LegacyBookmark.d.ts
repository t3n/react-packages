import React from 'react';
export interface LegacyBookmarkProps {
    onClick: () => void;
    isBookmarked: boolean;
}
export declare const TooltipContainer: import("styled-components").StyledComponent<"div", any, import("../Box").BoxProps, never>;
export declare const Tooltip: import("styled-components").StyledComponent<"span", any, {}, never>;
declare const LegacyBookmark: React.FC<LegacyBookmarkProps>;
export default LegacyBookmark;
