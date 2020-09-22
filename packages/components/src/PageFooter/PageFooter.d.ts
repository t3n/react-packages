import React from 'react';
export interface PageFooterProps {
    contactLink: string;
    showPrivacySettingsLink?: boolean;
}
export declare const FooterLink: import("styled-components").StyledComponent<"a", any, import("../Link").LinkProps & {
    small: boolean;
}, "small">;
export declare const PageFooter: React.FC<PageFooterProps>;
