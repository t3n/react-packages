import React from 'react';
export interface LegacyNewsCardProps {
    loading: boolean;
    popular?: boolean;
    sponsored?: boolean;
    hero?: boolean;
    plus?: boolean;
    tr?: boolean;
    withImage?: boolean;
    withTeaser?: boolean;
    withAuthor?: boolean;
    isBookmarked?: boolean;
    onBookmarkClick: () => void;
    news?: {
        title: string;
        type: string;
        teaser: string;
        author: {
            name: string;
        };
        imageUrl: string;
        publishedAt: Date;
        url: string;
        readingTime?: number;
    };
}
export declare const LegacyLoadingHeroCard: () => React.JSX.Element;
export declare const LegacyLoadingFeedCard: React.FC<{
    withImage?: boolean;
}>;
declare const LegacyNewsCard: ({ news, loading, hero, sponsored, popular, plus, tr, withTeaser, withImage, withAuthor, isBookmarked, onBookmarkClick, }: LegacyNewsCardProps) => React.JSX.Element | null;
export default LegacyNewsCard;
