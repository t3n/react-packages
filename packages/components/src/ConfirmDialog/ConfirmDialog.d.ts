import React from 'react';
import { ModalProps } from '../Modal';
export interface ConfirmDialogProps extends ModalProps {
    onConfirm: () => void;
    buttonLabel: string;
    buttonDisabled?: boolean;
    loading?: boolean;
    wide?: boolean;
    width?: string | number[];
}
export declare const ConfirmDialog: React.FC<ConfirmDialogProps>;
