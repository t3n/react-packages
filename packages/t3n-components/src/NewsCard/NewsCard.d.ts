/// <reference types="react" />
export declare type NewsCardType = 'HERO' | 'AUTHOR';
interface NewsCardProps {
    loading: boolean;
    type: NewsCardType;
    news?: {
        title: string;
        type: string;
        author: {
            name: string;
            avatar: string;
        };
        imageUrl: string;
        publishedAt: Date;
        url: string;
    };
}
declare const NewsCard: {
    ({ loading, type, news }: NewsCardProps): JSX.Element | null;
    defaultProps: {
        loading: boolean;
    };
};
export default NewsCard;
