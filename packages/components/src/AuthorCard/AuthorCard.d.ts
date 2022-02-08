export interface AuthorCardProps {
    title: string;
    articleType: string;
    author: {
        name: string;
        avatar: string;
    };
    url: string;
}
declare const AuthorCard: ({ title, articleType, author, url }: AuthorCardProps) => JSX.Element;
export default AuthorCard;
