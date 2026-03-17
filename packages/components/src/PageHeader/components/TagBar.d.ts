import { PageHeaderLinksType } from '../PageHeader';
interface TagBarProps {
    pinnedTeaser: PageHeaderLinksType & {
        isSponsored: boolean;
        isPaidArticle: boolean;
    };
    tags: PageHeaderLinksType[];
}
declare const TagBar: ({ pinnedTeaser, tags }: TagBarProps) => import("react/jsx-runtime").JSX.Element;
export default TagBar;
