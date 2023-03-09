import * as React from 'react';
import { SpaceProps } from 'styled-system';
import { SectionVariants } from '../Section';
declare const LegacySection: React.FC<{
    variant?: SectionVariants;
    anchor?: string;
    narrow?: boolean;
    wide?: boolean;
    innerGap?: SpaceProps['py'];
}>;
export default LegacySection;
