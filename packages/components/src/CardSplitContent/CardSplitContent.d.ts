import { PropsWithChildren } from 'react';
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';
export interface CardSplitContentProps extends PropsWithChildren {
    variant?: ThemeBackgroundColor;
}
declare const CardSplitContent: ({ children, variant }: CardSplitContentProps) => import("react/jsx-runtime").JSX.Element;
export default CardSplitContent;
