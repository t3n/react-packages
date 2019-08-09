/// <reference types="react" />
export declare type ArticleCardStyle = 'HERO' | 'AUTHOR-CARD';
interface ArticleCardProps {
    type: ArticleCardStyle;
    imageUrl: string;
    title: string;
    articleType: string;
    teaser: string;
    author: {
        name: string;
        avatar: string;
    };
    publishedAt: Date;
    url: string;
}
declare const ArticleCard: ({ imageUrl, title, type, articleType, author, publishedAt, url }: ArticleCardProps) => JSX.Element;
export default ArticleCard;
