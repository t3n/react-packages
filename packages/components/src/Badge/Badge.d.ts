import React from 'react';
export interface BadgeProps {
    variant: 'inverse' | 'highlight' | 'light';
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
