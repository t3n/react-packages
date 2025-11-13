import { ReactNode } from 'react';
export interface BadgeProps {
    variant: 'inverse' | 'highlight' | 'light';
    children?: ReactNode;
}
declare const Badge: (props: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export default Badge;
