/// <reference types="react" />
export declare type NewsCardStyle = 'HERO' | 'AUTHOR-CARD';
interface NewsCardProps {
    type: NewsCardStyle;
    imageUrl: string;
    title: string;
    teaser: string;
    author: {
        name: string;
        avatar: string;
    };
    publishedAt: Date;
}
declare const NewsCard: ({ imageUrl, title, type, author, publishedAt }: NewsCardProps) => JSX.Element;
export default NewsCard;
