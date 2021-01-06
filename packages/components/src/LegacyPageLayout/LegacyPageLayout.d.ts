import React from 'react';
import { LegacyHeaderProps } from '../LegacyHeader';
export interface LegacyPageLayoutProps extends LegacyHeaderProps {
    showAds?: boolean;
    adsPreview?: boolean;
}
export declare const LegacyPageLayout: React.FC<LegacyPageLayoutProps>;
