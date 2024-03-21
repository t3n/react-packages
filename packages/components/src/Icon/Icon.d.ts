import React from 'react';
import { ColorProps, HeightProps, MarginProps, PositionProps, WidthProps } from 'styled-system';
export interface BaseIconProps extends React.SVGProps<SVGSVGElement>, MarginProps, PositionProps {
    component: React.FC<React.SVGProps<SVGSVGElement>>;
}
export interface IconProps extends Omit<BaseIconProps, 'width' | 'height' | 'fill'>, WidthProps, HeightProps {
    fill?: ColorProps['color'];
}
declare const Icon: import("styled-components").StyledComponent<({ component: IconComponent, width, height, m, margin, mt, marginTop, mb, marginBottom, ml, marginLeft, mr, marginRight, my, mx, top, bottom, left, right, ...props }: BaseIconProps) => React.JSX.Element, any, IconProps, never>;
export default Icon;
