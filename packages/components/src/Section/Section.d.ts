import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';
export declare type SectionVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';
export interface SectionProps {
    variant?: SectionVariants;
    wide?: boolean;
    small?: boolean;
    children: ReactNode;
    innerGap?: SpaceProps['py'];
}
export declare const Section: {
    ({ variant, wide, small, children, innerGap, }: SectionProps): JSX.Element;
    displayName: string;
    defaultProps: {
        innerGap: number;
    };
};
