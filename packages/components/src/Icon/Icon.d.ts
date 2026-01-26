import React, { SVGProps } from 'react';
import { ColorProps, HeightProps, MarginProps, PositionProps, WidthProps } from 'styled-system';
export interface BaseIconProps extends SVGProps<SVGSVGElement>, MarginProps, PositionProps {
    component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export interface IconProps extends Omit<BaseIconProps, 'width' | 'height' | 'fill'>, WidthProps, HeightProps {
    fill?: ColorProps['color'];
}
declare const Icon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<BaseIconProps, BaseIconProps>, never>, IconProps>> & string & Omit<({ component: IconComponent, width, height, m, margin, mt, marginTop, mb, marginBottom, ml, marginLeft, mr, marginRight, my, mx, top, bottom, left, right, ...props }: BaseIconProps) => import("react/jsx-runtime").JSX.Element, keyof React.Component<any, {}, any>>;
export default Icon;
