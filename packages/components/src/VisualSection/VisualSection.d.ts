import React from 'react';
import { SpaceProps } from 'styled-system';
export declare type VisualSectionVariants = 'primary' | 'highlight';
export interface VisualSectionProps {
    variant: VisualSectionVariants;
    innerGap?: SpaceProps['py'];
    wide?: boolean;
}
declare const VisualSection: React.FC<VisualSectionProps>;
export default VisualSection;
