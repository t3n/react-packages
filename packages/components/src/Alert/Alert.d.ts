import { PropsWithChildren } from 'react';
import { SpaceProps } from 'styled-system';
export type AlertStatus = 'success' | 'notice' | 'warning' | 'error';
export interface AlertProps extends SpaceProps, PropsWithChildren {
    status: AlertStatus;
}
export declare const AlertText: ({ children }: Required<PropsWithChildren>) => import("react/jsx-runtime").JSX.Element;
declare const Alert: ({ status, children, ...rest }: AlertProps) => import("react/jsx-runtime").JSX.Element;
export default Alert;
