import React from 'react';
export interface ModalProps {
    headline: string;
    wide?: boolean;
    width?: string | number[];
    onClose: () => void;
}
export declare const Modal: React.FC<ModalProps>;
