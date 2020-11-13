/// <reference types="react" />
export interface LegacyHeroCardProps {
    type: string;
    sponsored?: boolean;
    title: string;
    teaser: string;
    url: string;
    imageUrl: string;
}
export declare const LegacyLoadingHeroCard: () => JSX.Element;
export declare const LegacyHeroCard: ({ type, title, teaser, url, imageUrl, sponsored, }: LegacyHeroCardProps) => JSX.Element;
