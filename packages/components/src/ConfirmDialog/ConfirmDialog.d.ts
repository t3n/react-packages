import { ReactNode } from 'react';
import { ModalProps } from '../Modal';
export interface ConfirmDialogProps extends ModalProps {
    onConfirm: () => void;
    buttonLabel: string;
    buttonDisabled?: boolean;
    loading?: boolean;
    children?: ReactNode;
}
declare const ConfirmDialog: ({ headline, onConfirm, onClose, buttonLabel, buttonDisabled, loading, wide: modalPropWide, width: modalPropWidth, children, }: ConfirmDialogProps) => import("react/jsx-runtime").JSX.Element;
export default ConfirmDialog;
