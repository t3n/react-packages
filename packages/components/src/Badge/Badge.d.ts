import { PropsWithChildren } from 'react';
export interface BadgeProps extends PropsWithChildren {
    variant: 'inverse' | 'highlight' | 'light';
}
declare const Badge: (props: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export default Badge;
