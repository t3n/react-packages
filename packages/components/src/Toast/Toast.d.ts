/// <reference types="react" />
import { ToastId, ToastPosition } from '@chakra-ui/toast';
import { AlertStatus } from '../Alert';
export interface ToastProps {
    id: ToastId;
    status: AlertStatus;
    text: string;
    isClosable: boolean;
    onClose: () => void;
}
export interface NotifyOptions {
    status: AlertStatus;
    text: string;
    duration: number | null;
    position: ToastPosition;
    isClosable: boolean;
}
declare const Toast: ({ status, text, isClosable, onClose }: ToastProps) => JSX.Element;
export declare const useToast: () => (({ text, status, duration, position }: NotifyOptions) => void)[];
export default Toast;
