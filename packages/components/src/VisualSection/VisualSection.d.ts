import React from 'react';
import { SpaceProps } from 'styled-system';
export declare type VisualSectionVariants = 'primary' | 'highlight';
export interface VisualSectionProps {
    variant: VisualSectionVariants;
    innerGap?: SpaceProps['py'];
    wide?: boolean;
}
export declare const VisualSection: React.FC<VisualSectionProps>;
