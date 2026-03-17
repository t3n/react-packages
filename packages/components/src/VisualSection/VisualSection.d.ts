import { PropsWithChildren } from 'react';
import { SpaceProps } from 'styled-system';
export type VisualSectionVariants = 'primary' | 'highlight' | 'inverse';
export interface VisualSectionProps extends PropsWithChildren {
    variant: VisualSectionVariants;
    innerGap?: SpaceProps['py'];
    wide?: boolean;
}
declare const VisualSection: {
    ({ variant, innerGap, wide, children, }: VisualSectionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default VisualSection;
