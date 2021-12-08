import React from 'react';
import { AdProps } from '../Ad';
export declare type LegacyAdName = 'p0' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'p7' | 'p8' | 'p11' | 'p12' | 'p13' | 'p14' | 'p15' | 'p16' | 'p17' | 'p18' | 'p19' | 'p20' | 'Ads_BA_SKY';
export interface LegacyAdProps extends Pick<AdProps, 'preview'> {
    name: LegacyAdName;
    forceBackground?: boolean;
    forceHint?: boolean;
}
export declare const LegacyAd: React.FC<LegacyAdProps>;
