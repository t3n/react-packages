import React from 'react';
export type LogoVariant = 'default';
export interface LogoProps extends React.SVGAttributes<SVGElement> {
    variant?: LogoVariant;
}
declare const Logo: import("styled-components").StyledComponent<({ variant, ...props }: any) => React.JSX.Element, any, LogoProps, never>;
export default Logo;
