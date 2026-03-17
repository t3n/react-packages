import React, { PropsWithChildren } from 'react';
import { RatioProps } from '../Ratio';
export interface CardHeaderProps extends PropsWithChildren {
    as?: 'div' | 'a';
    big?: boolean;
    ratio?: RatioProps['ratio'] | 'auto';
    color?: string;
    image?: string;
}
export declare const CardHeaderContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
declare const CardHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<CardHeaderProps, CardHeaderProps>> & string & Omit<({ big, ratio, image, children, ...props }: CardHeaderProps) => import("react/jsx-runtime").JSX.Element, keyof React.Component<any, {}, any>>;
export default CardHeader;
