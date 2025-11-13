import { ReactNode } from 'react';
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';
export interface CardSplitContentProps {
    variant?: ThemeBackgroundColor;
    children?: ReactNode;
}
declare const CardSplitContent: ({ children, variant }: CardSplitContentProps) => import("react/jsx-runtime").JSX.Element;
export default CardSplitContent;
