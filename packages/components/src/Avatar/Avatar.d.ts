import React from 'react';
import { TextColorProps } from 'styled-system';
export interface AvatarImageProps {
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
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
