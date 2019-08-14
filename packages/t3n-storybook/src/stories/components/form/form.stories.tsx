import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Text,
  Card,
  CardSplitContent,
  Heading,
  Grid,
  GridItem,
  Button
} from '@t3n/components';
import { Formik, FormikProps, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import StoryContainer from '../../../components/StoryContainer';
import { FormInput } from '../../../components/FormField';

interface RegisterValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

storiesOf('Components|Form/Formulare', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .add('Registrierung', () => {
    const onSubmit = (
      values: RegisterValues,
      { setSubmitting }: FormikHelpers<RegisterValues>
    ) => {
      setTimeout(() => {
        console.log('sad');
        // eslint-disable-next-line no-alert
        alert(
          `Registrierungs-Formular wurde abgeschickt mit den folgenden Werten:
              ${JSON.stringify(values, null, 2)}`
        );
        setSubmitting(false);
      }, 500);
    };

    const registerFormValidation = Yup.object().shape({
      email: Yup.string()
        .email()
        .required('Bitte geben eine E-Mail-Adresse an')
    });

    return (
      <Grid justifyContent="center">
        <GridItem width={4 / 5}>
          <Formik
            initialValues={{
              email: '',
              lastName: '',
              firstName: '',
              password: ''
            }}
            validationSchema={registerFormValidation}
            isInitialValid={false}
            onSubmit={onSubmit}
            render={({
              values,
              touched,
              errors,
              handleSubmit,
              isValid,
              isSubmitting,
              handleReset
            }: FormikProps<RegisterValues>) => {
              return (
                <Card splitted>
                  <CardSplitContent bgColor="secondary">
                    <>
                      <Heading styleAs="h4">Beispiel-Formular</Heading>
                      <Text>
                        Dies ist ein beispielhaftes Formular mit Feldern wie sie
                        bei einer Registrierung inkl. entsprechender Validierung
                        benötigt werden könnten
                      </Text>

                      <Heading as="h5">Formular-Daten</Heading>
                      <pre>{JSON.stringify(values, null, 2)}</pre>
                      <Heading as="h5">Formular-Error</Heading>
                      <pre>{JSON.stringify(errors, null, 2)}</pre>
                      <Heading as="h5">Touched</Heading>
                      <pre>{JSON.stringify(touched, null, 2)}</pre>
                      <Button secondary onClick={handleReset}>
                        Formular zurücksetzen
                      </Button>
                    </>
                  </CardSplitContent>

                  <CardSplitContent>
                    <>
                      <Heading styleAs="h4">Registrierung</Heading>
                      <form onSubmit={handleSubmit}>
                        <FormInput name="firstName" label="Vorname" />
                        <FormInput name="lastName" label="Nachname" />
                        <FormInput name="email" label="E-Mail" />
                        <FormInput name="password" label="Passwort" />
                        <FormInput
                          name="repeatPassword"
                          label="Passwort wiederholen"
                        />
                        <Button
                          as="button"
                          type="submit"
                          disabled={!isValid || isSubmitting}
                        >
                          {isValid && !isSubmitting
                            ? 'Abschicken'
                            : 'Bitte alle Felder ausfüllen'}
                        </Button>
                      </form>
                    </>
                  </CardSplitContent>
                </Card>
              );
            }}
          />
        </GridItem>
      </Grid>
    );
  });
