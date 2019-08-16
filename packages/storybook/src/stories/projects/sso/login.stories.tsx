import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  CardSplitContent,
  Card,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  PageLayout
} from '@t3n/components';
import { layout, LayoutProps, FlexboxProps, flexbox } from 'styled-system';
import styled from 'styled-components';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useCookies } from 'react-cookie';
import products from './products.png';
import { current_user } from './__generated__/current_user';
import { FormInput } from '../../../components/FormField';
import { loginVariables, login } from './__generated__/login';

const ContentWrapper = styled.div<LayoutProps | FlexboxProps>`
  ${layout}
  ${flexbox}
`;

const CURRENT_USER = gql`
  query current_user {
    viewer {
      identifier
      me {
        firstName
        lastName
        avatarUrl
      }
    }
  }
`;

const useIsLoggedIn = () => {
  const { data, loading, refetch } = useQuery<current_user>(CURRENT_USER);

  const isLoggedIn = !!(
    !loading &&
    data &&
    data.viewer &&
    data.viewer.identifier !== null
  );

  return { loading, isLoggedIn, refetch };
};

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    sso {
      login(email: $email, password: $password) {
        cookie
        value
      }
    }
  }
`;

interface LoginValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSuccess: () => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [loginMutation] = useMutation<login, loginVariables>(LOGIN_MUTATION);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie] = useCookies();

  const onSumbit = ({ email, password }: LoginValues) => {
    loginMutation({ variables: { email, password } }).then(res => {
      if (res && res.data) {
        const {
          sso: {
            login: { cookie, value }
          }
        } = res.data;

        setCookie(cookie, value);
        onSuccess();
      }
    });
  };

  return (
    <Formik<LoginValues>
      onSubmit={onSumbit}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Bitte gib eine gültige E-Mail-Adresse an')
          .required('Bitte gib eine E-Mail-Adresse an'),
        password: Yup.string().required('Bitte gib ein Password an')
      })}
      initialValues={{ email: '', password: '' }}
    >
      {({ handleSubmit, isValid, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <FormInput name="email" label="E-Mail" type="text" />
          <FormInput name="password" type="password" label="Passwort" />
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Anmelden
          </Button>
        </form>
      )}
    </Formik>
  );
};

const LoginWrapper = () => {
  const { loading, isLoggedIn, refetch } = useIsLoggedIn();

  const onSuccess = () => {
    console.log('success');
    refetch();
  };

  if (loading) {
    return <p>lade</p>;
  }

  if (isLoggedIn) {
    return (
      <Card>
        <h1>Willkommen zurück</h1>
      </Card>
    );
  }

  return (
    <Card elevate splitted>
      <CardSplitContent variant="secondary">
        <img width="100%" src={products} alt="t3n Pro" />
        <Text bold>Sei Teil der Community</Text>
        <Heading as="h4" mt={0}>
          Gestalte mit uns eine positive digitale Zukunft_
        </Heading>
        <ul>
          <li>Entdecke spannende Personen im Pioneers Network</li>
          <li>Kommentiere News</li>
          <li>Finde passende Jobs</li>
        </ul>
      </CardSplitContent>
      <CardSplitContent>
        <Heading>Anmelden</Heading>
        <LoginForm onSuccess={onSuccess} />
      </CardSplitContent>
    </Card>
  );
};

storiesOf('Projekte|SSO', module).add(
  'Login',
  () => (
    <PageLayout showHeader>
      <ContentWrapper
        height="100vh"
        justifyItems="center"
        alignContent="center"
      >
        <Grid noGap alignItems="center" height="100vh" justifyContent="center">
          <GridItem width={[4 / 5, 4 / 5, 2 / 3]}>
            <LoginWrapper />
          </GridItem>
        </Grid>
      </ContentWrapper>
    </PageLayout>
  ),
  {
    options: { showPanel: false }
  }
);
