import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';
import { SectionVariants } from '../Section';
declare const LegacySection: ({ variant, anchor, narrow, wide, innerGap, children, }: {
    variant?: SectionVariants;
    anchor?: string;
    narrow?: boolean;
    wide?: boolean;
    innerGap?: SpaceProps["py"];
    children?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export default LegacySection;
