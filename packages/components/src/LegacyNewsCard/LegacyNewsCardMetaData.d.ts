import React from 'react';
export interface LegacyNewsCardMetaDataProps {
    type: string;
    publishedAt: Date;
    readingTime?: number;
    isBookmarked: boolean;
    onClick: () => void;
}
declare const LegacyNewsCardMetaData: React.FC<LegacyNewsCardMetaDataProps>;
export default LegacyNewsCardMetaData;
