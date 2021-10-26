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
export declare const LegacyLoadingHeroCard: () => JSX.Element;
export declare const LegacyLoadingFeedCard: () => JSX.Element;
export declare const LegacyLoadingMobileCard: () => JSX.Element;
export declare const LegacyNewsCard: ({ news, loading, hero, sponsored, popular, pro, isBookmarked, onBookmarkClick, }: LegacyNewsCardProps) => JSX.Element | null;
