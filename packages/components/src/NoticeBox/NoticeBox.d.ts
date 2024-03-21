import React, { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';
export interface NoticeBoxProps extends SpaceProps {
    children?: ReactNode;
}
export declare const NoticeBoxText: React.FC<{
    children?: ReactNode;
}>;
declare const NoticeBox: React.FC<NoticeBoxProps>;
export default NoticeBox;
