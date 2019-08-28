/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_sso_login {
  __typename: "LoginSuccess";
  cookie: string;
  sessionId: string;
}

export interface login_sso {
  __typename: "SsoMutationOpts";
  login: login_sso_login;
}

export interface login {
  sso: login_sso;
}

export interface loginVariables {
  email: string;
  password: string;
}
