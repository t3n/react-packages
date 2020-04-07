import React from 'react';
export interface ModalProps {
    headline: string;
    onClose: () => void;
    onConfirm: () => void;
    buttonLabel: string;
}
export declare const Modal: React.FC<ModalProps>;
