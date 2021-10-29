import React from 'react';
import { LegacyHeaderProps } from '../LegacyHeader';
export interface LegacyPageLayoutProps extends LegacyHeaderProps {
    showP0?: boolean;
    previewP0?: boolean;
    showP2?: boolean;
    previewP2?: boolean;
    showP13?: boolean;
    previewP13?: boolean;
}
export declare const LegacyPageLayout: React.FC<LegacyPageLayoutProps>;
