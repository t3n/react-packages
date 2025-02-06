import React from 'react';
import { ArticleProps } from './ArticleTeaser';
declare const Metabar: React.FC<{
    article: ArticleProps;
    isBookmarked: boolean;
    handleBookmarkClick: () => void;
}>;
export default Metabar;
