import { PropsWithChildren } from 'react';
import { SpaceProps } from 'styled-system';
export type SectionVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';
export interface SectionProps extends PropsWithChildren {
    variant?: SectionVariants;
    wide?: boolean;
    small?: boolean;
    innerGap?: SpaceProps['py'];
}
declare const Section: {
    ({ variant, wide, small, children, innerGap, }: SectionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Section;
