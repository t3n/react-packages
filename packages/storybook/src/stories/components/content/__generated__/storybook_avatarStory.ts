/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: storybook_avatarStory
// ====================================================

export interface storybook_avatarStory_viewer_me {
  __typename: "Me";
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
}

export interface storybook_avatarStory_viewer {
  __typename: "Viewer";
  me: storybook_avatarStory_viewer_me | null;
}

export interface storybook_avatarStory {
  viewer: storybook_avatarStory_viewer | null;
}
