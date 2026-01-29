import { PropsWithChildren } from 'react';
import { ColorProps, FlexboxProps, LayoutProps, TextColorProps } from 'styled-system';
export interface AvatarImageProps extends PropsWithChildren {
    optimizeSrc?: boolean;
    src?: string;
    size?: number;
    className?: string;
    alt?: string;
    loading?: boolean;
}
export interface AvatarProps extends Omit<AvatarImageProps, 'className'>, Omit<LayoutProps, 'size'>, FlexboxProps, ColorProps {
    label?: string;
    textColor?: TextColorProps['color'];
}
declare const Avatar: ({ label, textColor, children, ...rest }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
export default Avatar;
