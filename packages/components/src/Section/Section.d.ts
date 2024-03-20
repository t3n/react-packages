import React, { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';
export type SectionVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';
export interface SectionProps {
    variant?: SectionVariants;
    wide?: boolean;
    small?: boolean;
    innerGap?: SpaceProps['py'];
    children?: ReactNode;
}
declare const Section: React.FC<SectionProps>;
export default Section;
