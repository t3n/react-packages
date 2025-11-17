import React, { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';
export interface NoticeBoxProps extends SpaceProps {
    children?: ReactNode;
}
export declare const NoticeBoxText: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
declare const NoticeBox: ({ children, ...rest }: NoticeBoxProps) => import("react/jsx-runtime").JSX.Element;
export default NoticeBox;
