import React from 'react';
import { ModalProps } from '../Modal';
export interface ConfirmDialogProps extends ModalProps {
    onConfirm: () => void;
    buttonLabel: string;
}
export declare const ConfirmDialog: React.FC<ConfirmDialogProps>;
