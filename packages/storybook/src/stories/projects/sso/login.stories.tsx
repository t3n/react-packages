import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import {
  CardSplitContent,
  Card,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  PageLayout,
  Center,
  Avatar,
  NewsCard,
  H3
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
import { recentNews, recentNewsVariables } from './__generated__/recentNews';

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

const RECENT_NEWS = gql`
  query recentNews($limit: Int!) {
    article {
      recentNews(limit: $limit) {
        identifier
        title
        teaser
        type
        date
        url
        date
        imageUrl
        author {
          identifier
          firstName
          lastName
          avatarUrl
        }
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
        sessionId
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const onSumbit = ({ email, password }: LoginValues) => {
    setIsSubmitting(true);
    loginMutation({ variables: { email, password } })
      .then(res => {
        if (res && res.data) {
          const {
            sso: {
              login: { cookie, sessionId }
            }
          } = res.data;

          setCookie(cookie, sessionId, { domain: '.t3n.de' });
          onSuccess();
          setIsSubmitting(false);
        }
      })
      .catch(() => {
        setFormErrors([
          'Login nicht erfolgreich. Bitte überprüfe deine E-Mail-Adresse und dein Passwort'
        ]);
        setIsSubmitting(false);
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
      {({ handleSubmit, isValid }) => (
        <>
          {formErrors.map(error => (
            <Text color="feedback.error">{error}</Text>
          ))}
          <form onSubmit={handleSubmit}>
            <FormInput name="email" required label="E-Mail" type="text" />
            <FormInput
              name="password"
              required
              type="password"
              label="Passwort"
            />
            <Button
              loading={isSubmitting}
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              Anmelden
            </Button>
          </form>
        </>
      )}
    </Formik>
  );
};

const WelcomeScreen: React.FC = () => {
  const { data, loading } = useQuery<current_user>(CURRENT_USER);
  const { data: newsData, loading: newsLoading } = useQuery<
    recentNews,
    recentNewsVariables
  >(RECENT_NEWS, { variables: { limit: 6 } });

  if (loading || !data || !data.viewer || !data.viewer.me) {
    return <Card>Lade</Card>;
  }

  return (
    <Card>
      <div style={{ textAlign: 'center' }}>
        <Center maxWidth="80px">
          <Avatar src={data.viewer.me.avatarUrl || ''} size={80} />
        </Center>
        <H3 mt={5}>Aktuelles auf t3n.de</H3>
        <Grid wide justifyContent="center">
          {newsLoading
            ? new Array(6).fill('').map((el, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <GridItem key={idx} width={[1, 1, 1 / 3]} mb={3}>
                  <NewsCard type="HERO" loading />
                </GridItem>
              ))
            : newsData &&
              newsData.article &&
              newsData.article.recentNews &&
              newsData.article.recentNews.map(news => (
                <GridItem key={news.identifier} width={[1, 1, 1 / 3]} mb={3}>
                  <NewsCard
                    type="HERO"
                    news={{
                      ...news,
                      author: {
                        name: `${news.author.firstName || ''} ${news.author
                          .lastName || ''}`,
                        avatar: news.author.avatarUrl || ''
                      },
                      publishedAt: new Date(news.date)
                    }}
                    loading={false}
                  />
                </GridItem>
              ))}
        </Grid>
      </div>
    </Card>
  );
};

const LoginWrapper = () => {
  const { loading, isLoggedIn, refetch } = useIsLoggedIn();

  const onSuccess = () => {
    refetch();
  };

  if (!loading && isLoggedIn) {
    return <WelcomeScreen />;
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
