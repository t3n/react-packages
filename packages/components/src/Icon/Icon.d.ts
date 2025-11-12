import React from 'react';
import { ColorProps, HeightProps, MarginProps, PositionProps, WidthProps } from 'styled-system';
export interface BaseIconProps extends React.SVGProps<SVGSVGElement>, MarginProps, PositionProps {
    component: React.FC<React.SVGProps<SVGSVGElement>>;
}
export interface IconProps extends Omit<BaseIconProps, 'width' | 'height' | 'fill'>, WidthProps, HeightProps {
    fill?: ColorProps['color'];
}
declare const Icon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<Omit<BaseIconProps, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<SVGSVGElement> | null | undefined;
}, Omit<BaseIconProps, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<SVGSVGElement> | null | undefined;
}>, never>, IconProps>> & string & Omit<({ component: IconComponent, width, height, m, margin, mt, marginTop, mb, marginBottom, ml, marginLeft, mr, marginRight, my, mx, top, bottom, left, right, ...props }: BaseIconProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export default Icon;
