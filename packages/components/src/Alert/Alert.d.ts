import React from 'react';
import { SpaceProps } from 'styled-system';
export declare type AlertStatus = 'success' | 'notice' | 'warning' | 'error';
export interface AlertProps extends SpaceProps {
    status: AlertStatus;
}
export declare const AlertText: React.FC;
declare const Alert: React.FC<AlertProps>;
export default Alert;
