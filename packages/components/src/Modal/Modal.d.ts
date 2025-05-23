import React, { ReactNode } from 'react';
import { WidthProps } from 'styled-system';
import { HeadingProps } from '../Heading';
export interface ModalProps extends WidthProps {
    headline: string;
    headlineIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
    alwaysCentered?: boolean;
    wide?: boolean;
    onClose: () => void;
    children?: ReactNode;
}
export interface ModalHeadingProps extends HeadingProps {
    headlineIcon: boolean;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
