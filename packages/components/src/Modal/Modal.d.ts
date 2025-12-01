import React, { ReactNode } from 'react';
import { WidthProps } from 'styled-system';
import { HeadingProps } from '../Heading';
export interface ModalProps extends WidthProps {
    headline: string;
    headlineIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    alwaysCentered?: boolean;
    wide?: boolean;
    onClose: () => void;
    children?: ReactNode;
}
export interface ModalHeadingProps extends HeadingProps {
    headlineIcon: boolean;
}
declare const Modal: ({ headline, headlineIcon, wide, alwaysCentered, width: widthProp, onClose, children, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
