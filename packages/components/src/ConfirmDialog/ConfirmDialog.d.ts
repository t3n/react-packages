import React from 'react';
import { ModalProps } from '../Modal';
export interface ConfirmDialogProps extends ModalProps {
    onConfirm: () => void;
    buttonLabel: string;
    buttonDisabled?: boolean;
    loading?: boolean;
}
declare const ConfirmDialog: React.FC<ConfirmDialogProps>;
export default ConfirmDialog;
