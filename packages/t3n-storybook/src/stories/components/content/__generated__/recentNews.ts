/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: recentNews
// ====================================================

export interface recentNews_article_recentNews_author {
  __typename: 'User';
  identifier: string;
  firstName: string | null;
  lastName: string | null;
  avatarUrl: string | null;
}

export interface recentNews_article_recentNews {
  __typename: 'NewsArticle';
  identifier: string;
  title: string;
  teaser: string;
  type: string;
  date: string;
  url: string;
  imageUrl: string;
  author: recentNews_article_recentNews_author;
}

export interface recentNews_article {
  __typename: 'Article';
  recentNews: recentNews_article_recentNews[] | null;
}

export interface recentNews {
  article: recentNews_article | null;
}

export interface recentNewsVariables {
  limit: number;
}
