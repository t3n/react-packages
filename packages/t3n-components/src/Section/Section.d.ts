import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';
interface SectionProps {
    variant?: 'primary' | 'secondary' | 'inverse' | 'highlight';
    wide?: boolean;
    children: ReactNode;
    innerGap?: SpaceProps['py'];
}
declare const Section: {
    ({ variant, wide, children, innerGap }: SectionProps): JSX.Element;
    displayName: string;
    defaultProps: {
        innerGap: number;
    };
};
export default Section;
