/// <reference types="react" />
export interface LegacyFeedCardProps {
    type: string;
    mostRead?: boolean;
    sponsored?: boolean;
    title: string;
    teaser: string;
    url: string;
    imageUrl: string;
}
export declare const LegacyLoadingFeedCard: () => JSX.Element;
export declare const LegacyFeedCard: ({ type, mostRead, sponsored, title, teaser, url, imageUrl, }: LegacyFeedCardProps) => JSX.Element;
