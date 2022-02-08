import React from 'react';
import { WidthProps } from 'styled-system';
import { HeadingProps } from '../Heading';
export interface ModalProps extends WidthProps {
    headline: string;
    headlineIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
    wide?: boolean;
    onClose: () => void;
}
export interface ModalHeadingProps extends HeadingProps {
    headlineIcon: boolean;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
