import React from 'react';
export interface AuthorValues {
    name: string;
    avatar: string;
}
export interface AuthorCardProps {
    title: string;
    articleType: string;
    author: AuthorValues;
    url: string;
}
declare const AuthorCard: ({ title, articleType, author, url }: AuthorCardProps) => React.JSX.Element;
export default AuthorCard;
