/// <reference types="react" />
export declare type LegacyNewsCardType = 'HERO' | 'FEED';
export interface LegacyNewsCardProps {
    loading: boolean;
    type: LegacyNewsCardType;
    mostRead?: boolean;
    sponsored?: boolean;
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
export declare const LegacyNewsCard: ({ loading, type, mostRead, sponsored, news, }: LegacyNewsCardProps) => JSX.Element | null;
