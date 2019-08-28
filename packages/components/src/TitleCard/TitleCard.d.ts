import React from 'react';
import { CardProps } from '../Card';
import { HeadingElements } from '../Heading';
export interface TitleCardProps extends Omit<CardProps, 'splitted'> {
    title: string;
    titleAs?: HeadingElements;
}
export declare const TitleCard: React.FC<TitleCardProps>;
