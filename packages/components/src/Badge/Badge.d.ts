import React, { ReactNode } from 'react';
export interface BadgeProps {
    variant: 'inverse' | 'highlight' | 'light';
    children?: ReactNode;
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
