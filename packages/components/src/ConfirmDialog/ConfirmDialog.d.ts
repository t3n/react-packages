import React, { ReactNode } from 'react';
import { ModalProps } from '../Modal';
export interface ConfirmDialogProps extends ModalProps {
    onConfirm: () => void;
    buttonLabel: string;
    buttonDisabled?: boolean;
    loading?: boolean;
    children?: ReactNode;
}
declare const ConfirmDialog: React.FC<ConfirmDialogProps>;
export default ConfirmDialog;
