export interface HeroCardProps {
    title: string;
    imageUrl: string;
    author: string;
    url: string;
    publishedAt: Date;
}
export declare const HeroCard: ({ title, imageUrl, publishedAt, author, url }: HeroCardProps) => JSX.Element;
