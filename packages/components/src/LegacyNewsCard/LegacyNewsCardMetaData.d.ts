import React from 'react';
declare const LegacyNewsCardMetaData: React.FC<{
    type: string;
    publishedAt: Date;
    readingTime?: number;
    isBookmarked: boolean;
    onClick: () => void;
}>;
export default LegacyNewsCardMetaData;
