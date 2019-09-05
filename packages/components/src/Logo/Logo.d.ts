import React from 'react';
export declare type LogoVariant = 'default';
interface LogoProps extends React.SVGAttributes<SVGElement> {
    variant?: LogoVariant;
}
export declare const Logo: import("styled-components").StyledComponent<({ variant, ...props }: any) => JSX.Element, any, LogoProps, never>;
export {};
