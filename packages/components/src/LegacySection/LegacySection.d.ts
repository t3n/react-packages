import { PropsWithChildren } from 'react';
import { SpaceProps } from 'styled-system';
import { SectionVariants } from '../Section';
declare const LegacySection: ({ variant, anchor, narrow, wide, innerGap, children, }: PropsWithChildren<{
    variant?: SectionVariants;
    anchor?: string;
    narrow?: boolean;
    wide?: boolean;
    innerGap?: SpaceProps["py"];
}>) => import("react/jsx-runtime").JSX.Element;
export default LegacySection;
