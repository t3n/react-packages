import React, { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';
export type VisualSectionVariants = 'primary' | 'highlight' | 'inverse';
export interface VisualSectionProps {
    variant: VisualSectionVariants;
    innerGap?: SpaceProps['py'];
    wide?: boolean;
    children?: ReactNode;
}
declare const VisualSection: React.FC<VisualSectionProps>;
export default VisualSection;
