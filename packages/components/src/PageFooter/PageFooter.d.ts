import React from 'react';
export interface PageFooterProps {
    showPrivacySettingsLink?: boolean;
    privacyManagerId?: string;
}
export declare const FooterLink: import("styled-components").StyledComponent<"a", any, import("../Link").LinkProps & {
    small: boolean;
}, "small">;
declare const PageFooter: React.FC<PageFooterProps>;
export default PageFooter;
