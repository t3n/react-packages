export declare type NewsCardType = 'HERO' | 'AUTHOR';
export interface NewsCardProps {
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
export declare const NewsCard: {
    ({ loading, type, news }: NewsCardProps): JSX.Element | null;
    defaultProps: {
        loading: boolean;
    };
};
