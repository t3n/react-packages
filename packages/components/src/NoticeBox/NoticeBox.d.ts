import { PropsWithChildren } from 'react';
import { SpaceProps } from 'styled-system';
export type NoticeBoxProps = PropsWithChildren<SpaceProps>;
export declare const NoticeBoxText: ({ children }: Required<PropsWithChildren>) => import("react/jsx-runtime").JSX.Element;
declare const NoticeBox: ({ children, ...rest }: NoticeBoxProps) => import("react/jsx-runtime").JSX.Element;
export default NoticeBox;
