/// <reference types="react" />
export interface LegacyNewsCardProps {
    loading: boolean;
    popular?: boolean;
    sponsored?: boolean;
    hero?: boolean;
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
    };
}
export interface LegacyHeroCardProps {
    type: string;
    sponsored?: boolean;
    hero?: boolean;
    title: string;
    teaser: string;
    url: string;
    imageUrl: string;
}
export declare const LegacyLoadingHeroCard: () => JSX.Element;
export declare const LegacyLoadingFeedCard: () => JSX.Element;
export declare const LegacyNewsCard: ({ news, loading, hero, sponsored, popular, }: LegacyNewsCardProps) => JSX.Element | null;
