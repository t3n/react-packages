import React from 'react';
export interface HeroCardProps {
    title: string;
    imageUrl: string;
    author: string;
    url: string;
    publishedAt: Date;
}
declare const HeroCard: ({ title, imageUrl, publishedAt, author, url, }: HeroCardProps) => React.JSX.Element;
export default HeroCard;
