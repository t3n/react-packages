import React from 'react';
export interface LegacyNewsCardProps {
    loading: boolean;
    popular?: boolean;
    sponsored?: boolean;
    hero?: boolean;
    pro?: boolean;
    tr?: boolean;
    topNews?: boolean;
    compact?: boolean;
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
    compact?: boolean;
}>;
declare const LegacyNewsCard: ({ news, loading, hero, sponsored, popular, pro, tr, topNews, compact, isBookmarked, onBookmarkClick, }: LegacyNewsCardProps) => React.JSX.Element | null;
export default LegacyNewsCard;
