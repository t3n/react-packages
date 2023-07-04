import React from 'react';
import { AdProps } from '../Ad';
export declare type LegacyAdName = 'T3N_D_Top' | 'T3N_D_Right' | 'T3N_D_Incontent-1' | 'T3N_D_Incontent-2' | 'T3N_D_Incontent-3' | 'T3N_D_Incontent-4' | 'T3N_D_Incontent-5' | 'T3N_D_Incontent-6' | 'T3N_D_Incontent-7' | 'T3N_D_Incontent-8' | 'T3N_D_Incontent-9' | 'T3N_D_Incontent-10' | 'T3N_D_Incontent-11' | 'T3N_D_Sidebar-1' | 'T3N_D_Sidebar-2' | 'T3N_D_Sidebar-3' | 'T3N_M_Incontent-1' | 'T3N_M_Incontent-2' | 'T3N_M_Incontent-3' | 'T3N_M_Incontent-4' | 'T3N_M_Incontent-5' | 'T3N_M_Incontent-6' | 'T3N_M_Incontent-7' | 'T3N_M_Incontent-8' | 'T3N_M_Incontent-9' | 'T3N_M_Incontent-10' | 'T3N_M_Sticky';
export interface LegacyAdProps extends Pick<AdProps, 'preview'> {
    name: LegacyAdName;
}
declare const LegacyAd: React.FC<LegacyAdProps>;
export default LegacyAd;
