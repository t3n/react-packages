import React from 'react';
export type ArticleProps = {
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
};
declare const ArticleTeaser: React.FC<{
    article: ArticleProps;
    teaserText?: boolean;
    largeTeaserImage?: boolean;
    smallTeaserImage?: boolean;
    isBookmarked: boolean;
    handleBookmarkClick: () => void;
}>;
export default ArticleTeaser;
