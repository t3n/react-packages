import React from 'react';
export interface LegacyNewsCardHeadlineProps {
    type: string;
    title: string;
    sponsored?: boolean;
    pro?: boolean;
    tr?: boolean;
}
declare const LegacyNewsCardHeadline: React.FC<LegacyNewsCardHeadlineProps>;
export default LegacyNewsCardHeadline;
