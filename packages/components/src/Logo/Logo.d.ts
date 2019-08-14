import React from 'react';
export declare type LogoVariant = 'default';
interface LogoProps {
    height?: string;
    width?: string;
    variant?: LogoVariant;
}
declare const Logo: React.FC<LogoProps>;
export default Logo;
