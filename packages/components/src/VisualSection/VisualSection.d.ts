import React from 'react';
import { SpaceProps } from 'styled-system';
export declare type VisualSectionVariants = 'primary' | 'highlight';
export interface VisualSectionProps {
    variant: VisualSectionVariants;
    innerGap?: SpaceProps['py'];
}
export declare const VisualSection: React.FC<VisualSectionProps>;
