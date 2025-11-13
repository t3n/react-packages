import { ReactNode } from 'react';
import { CardProps } from '../Card';
import { HeadingElements } from '../Heading';
export interface TitleCardProps extends Omit<CardProps, 'splitted'> {
    title: string;
    titleAs?: HeadingElements;
    centerTitle?: boolean;
    children?: ReactNode;
}
declare const TitleCard: ({ children, title, titleAs, centerTitle, ...props }: TitleCardProps) => import("react/jsx-runtime").JSX.Element;
export default TitleCard;
