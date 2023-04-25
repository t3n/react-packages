import React from 'react';
import { LegacyHeaderProps } from '../LegacyHeader';
export declare enum AdNames {
    T3N_D_Top = "T3N_D_Top",
    T3N_D_Right = "T3N_D_Right",
    T3N_D_Incontent_1 = "T3N_D_Incontent-1",
    T3N_D_Incontent_2 = "T3N_D_Incontent-2",
    T3N_D_Incontent_3 = "T3N_D_Incontent-3",
    T3N_D_Incontent_4 = "T3N_D_Incontent-4",
    T3N_D_Incontent_5 = "T3N_D_Incontent-5",
    T3N_D_Incontent_6 = "T3N_D_Incontent-6",
    T3N_D_Incontent_7 = "T3N_D_Incontent-7",
    T3N_D_Incontent_8 = "T3N_D_Incontent-8",
    T3N_D_Incontent_9 = "T3N_D_Incontent-9",
    T3N_D_Incontent_10 = "T3N_D_Incontent-10",
    T3N_D_Incontent_11 = "T3N_D_Incontent-11",
    T3N_D_Sidebar_1 = "T3N_D_Sidebar-1",
    T3N_D_Sidebar_2 = "T3N_D_Sidebar-2",
    T3N_D_Sidebar_3 = "T3N_D_Sidebar-3",
    T3N_M_Incontent_1 = "T3N_M_Incontent-1",
    T3N_M_Incontent_2 = "T3N_M_Incontent-2",
    T3N_M_Incontent_3 = "T3N_M_Incontent-3",
    T3N_M_Incontent_4 = "T3N_M_Incontent-4",
    T3N_M_Incontent_5 = "T3N_M_Incontent-5",
    T3N_M_Incontent_6 = "T3N_M_Incontent-6",
    T3N_M_Incontent_7 = "T3N_M_Incontent-7",
    T3N_M_Incontent_8 = "T3N_M_Incontent-8",
    T3N_M_Incontent_9 = "T3N_M_Incontent-9",
    T3N_M_Incontent_10 = "T3N_M_Incontent-10",
    T3N_M_Sticky = "T3N_M_Sticky"
}
export interface LegacyPageLayoutProps extends LegacyHeaderProps {
    privacyManagerId: string;
    overflow?: string;
    adUnits?: AdNames[];
    previewAdUnits?: boolean;
}
declare const LegacyPageLayout: React.FC<LegacyPageLayoutProps>;
export default LegacyPageLayout;
