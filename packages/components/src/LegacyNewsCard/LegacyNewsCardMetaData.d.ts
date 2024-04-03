import React from 'react';
export interface LegacyNewsCardMetaDataProps {
    withAuthor?: boolean;
    author?: string;
    readingTime?: number;
    isBookmarked: boolean;
    onClick: () => void;
}
declare const LegacyNewsCardMetaData: React.FC<LegacyNewsCardMetaDataProps>;
export default LegacyNewsCardMetaData;
