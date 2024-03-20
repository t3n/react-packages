import React, { ReactNode } from 'react';
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';
export interface CardSplitContentProps {
    variant?: ThemeBackgroundColor;
    children?: ReactNode;
}
declare const CardSplitContent: React.FC<CardSplitContentProps>;
export default CardSplitContent;
