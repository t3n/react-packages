import React from 'react';
import { WidthProps } from 'styled-system';
export interface ModalProps extends WidthProps {
    headline: string;
    wide?: boolean;
    onClose: () => void;
}
export declare const Modal: React.FC<ModalProps>;
