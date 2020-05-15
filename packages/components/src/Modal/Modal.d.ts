import React from 'react';
export interface ModalProps {
    headline: string;
    onClose: () => void;
}
export declare const Modal: React.FC<ModalProps>;
