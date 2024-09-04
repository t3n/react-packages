import React from 'react';
export type NewsCardType = 'HERO' | 'AUTHOR';
export interface NewsCardProps {
    loading: boolean;
    type: NewsCardType;
    news?: {
        title: string;
        type: string;
        author: {
            name: string;
            avatar: string;
        };
        imageUrl: string;
        publishedAt: Date;
        url: string;
    };
}
declare const NewsCard: ({ loading, type, news }: NewsCardProps) => React.JSX.Element | null;
export default NewsCard;
