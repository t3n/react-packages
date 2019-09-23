import React from 'react';
import { SpaceProps } from 'styled-system';
export declare type AlertStatus = 'success' | 'notice' | 'warning' | 'error';
interface AlertProps extends SpaceProps {
    status: AlertStatus;
}
declare const AlertText: React.FC;
declare const Alert: React.FC<AlertProps>;
export { Alert, AlertText };
