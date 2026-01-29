export interface ArticleProps {
    identifier: string;
    type: string;
    date: string;
    title: string;
    teaser?: string;
    url: string;
    imageUrl?: string;
    readingTime: number;
    isPaywallArticle?: boolean;
    isTRArticle?: boolean;
}
declare const ArticleTeaser: ({ article, teaserText, largeTeaserImage, smallTeaserImage, isBookmarked, handleBookmarkClick, }: {
    article: ArticleProps;
    teaserText?: boolean;
    largeTeaserImage?: boolean;
    smallTeaserImage?: boolean;
    isBookmarked: boolean;
    handleBookmarkClick: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export default ArticleTeaser;
