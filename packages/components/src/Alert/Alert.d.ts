import React, { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';
export type AlertStatus = 'success' | 'notice' | 'warning' | 'error';
export interface AlertProps extends SpaceProps {
    status: AlertStatus;
    children?: ReactNode;
}
export declare const AlertText: React.FC<{
    children?: ReactNode;
}>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
