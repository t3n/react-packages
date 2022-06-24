import React from 'react';
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';
export interface BadgeProps {
    variant?: ThemeBackgroundColor | 'success';
    small?: boolean;
    rounded?: boolean;
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
