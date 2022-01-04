import React from 'react';
export interface PageFooterProps {
    contactLink: string;
    showPrivacySettingsLink?: boolean;
    privacySettingsModal?: PrivacyManagerType;
}
export declare type PrivacyManagerType = 'Pur' | 'Standard';
export declare const privacyManagerIdByType: {
    Pur: number;
    Standard: number;
};
export declare const FooterLink: import("styled-components").StyledComponent<"a", any, import("../Link").LinkProps & {
    small: boolean;
}, "small">;
export declare const PageFooter: React.FC<PageFooterProps>;
