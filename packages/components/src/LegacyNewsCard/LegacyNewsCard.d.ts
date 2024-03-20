import React from 'react';
export interface LegacyNewsCardProps {
    loading: boolean;
    popular?: boolean;
    sponsored?: boolean;
    hero?: boolean;
    pro?: boolean;
    isBookmarked?: boolean;
    onBookmarkClick: () => void;
    news?: {
        title: string;
        type: string;
        teaser: string;
        author: {
            name: string;
            avatar: string;
        };
        imageUrl: string;
        publishedAt: Date;
        url: string;
        readingTime?: number;
    };
}
export declare const LegacyLoadingHeroCard: () => React.JSX.Element;
export declare const LegacyLoadingFeedCard: () => React.JSX.Element;
export declare const LegacyLoadingMobileCard: () => React.JSX.Element;
declare const LegacyNewsCard: ({ news, loading, hero, sponsored, popular, pro, isBookmarked, onBookmarkClick, }: LegacyNewsCardProps) => React.JSX.Element | null;
export default LegacyNewsCard;
