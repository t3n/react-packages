import { Position } from 'toasted-notes';
import { AlertStatus } from '../Alert';
interface ToastProps {
    id: string;
    status: AlertStatus;
    text: string;
    isClosable: boolean;
    onClose: () => void;
}
export declare const Toast: ({ status, text, isClosable, onClose }: ToastProps) => JSX.Element;
interface NotifyOptions {
    status: AlertStatus;
    text: string;
    duration: number | null;
    position: keyof typeof Position;
    isClosable: boolean;
}
export declare const useToast: () => (({ text, status, duration, position }: NotifyOptions) => any)[];
export {};
