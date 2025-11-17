import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';
export type VisualSectionVariants = 'primary' | 'highlight' | 'inverse';
export interface VisualSectionProps {
    variant: VisualSectionVariants;
    innerGap?: SpaceProps['py'];
    wide?: boolean;
    children?: ReactNode;
}
declare const VisualSection: {
    ({ variant, innerGap, wide, children, }: VisualSectionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default VisualSection;
