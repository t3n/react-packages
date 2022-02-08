import React from 'react';
import { SpaceProps } from 'styled-system';
export declare type SectionVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';
export interface SectionProps {
    variant?: SectionVariants;
    wide?: boolean;
    small?: boolean;
    innerGap?: SpaceProps['py'];
}
declare const Section: React.FC<SectionProps>;
export default Section;
