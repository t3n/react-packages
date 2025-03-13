import React from 'react';
import { PageHeaderLinksType } from '../PageHeader';
interface TagBarProps {
    pinnedTeaser: PageHeaderLinksType & {
        isSponsored: boolean;
    };
    tags: PageHeaderLinksType[];
}
declare const TagBar: React.FC<TagBarProps>;
export default TagBar;
