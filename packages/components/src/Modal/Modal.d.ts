import React, { PropsWithChildren } from 'react';
import { WidthProps } from 'styled-system';
import { HeadingProps } from '../Heading';
export interface ModalProps extends WidthProps, PropsWithChildren {
    headline: string;
    headlineIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    alwaysCentered?: boolean;
    wide?: boolean;
    onClose: () => void;
}
export interface ModalHeadingProps extends HeadingProps {
    headlineIcon: boolean;
}
declare const Modal: ({ headline, headlineIcon, wide, alwaysCentered, width: widthProp, onClose, children, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
