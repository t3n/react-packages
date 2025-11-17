import React, { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';
export type AlertStatus = 'success' | 'notice' | 'warning' | 'error';
export interface AlertProps extends SpaceProps {
    status: AlertStatus;
    children?: ReactNode;
}
export declare const AlertText: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
declare const Alert: ({ status, children, ...rest }: AlertProps) => import("react/jsx-runtime").JSX.Element;
export default Alert;
