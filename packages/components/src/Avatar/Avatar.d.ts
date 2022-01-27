import React from 'react';
import { TextColorProps } from 'styled-system';
interface AvatarImageProps {
    optimizeSrc?: boolean;
    src?: string;
    size?: number;
    className?: string;
    alt?: string;
    loading?: boolean;
}
export interface AvatarProps extends Omit<AvatarImageProps, 'className'> {
    label?: string;
    textColor?: TextColorProps['color'];
}
export declare const Avatar: React.FC<AvatarProps>;
export {};
