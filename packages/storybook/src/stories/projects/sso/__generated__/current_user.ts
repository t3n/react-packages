/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: current_user
// ====================================================

export interface current_user_viewer_me {
  __typename: "Me";
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
}

export interface current_user_viewer {
  __typename: "Viewer";
  identifier: string;
  me: current_user_viewer_me | null;
}

export interface current_user {
  viewer: current_user_viewer | null;
}
