import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { FormInput, Button, InputGroup } from '@t3n/components';
import {
  Formik,
  Form,
  Field,
  useFormik,
  useField,
  FieldAttributes,
  FormikProps
} from 'formik';
import StoryContainer from '../../../components/StoryContainer';

interface RegisterValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const RegisterFormStory = () => {
  const onSubmit = () => {
    alert('submit');
  };

  const { isSubmitting, handleSubmit } = useFormik<RegisterValues>({
    initialValues: { email: '', lastName: '', firstName: '', password: '' },
    onSubmit
  });

  return (
    <form onSubmit={handleSubmit}>
      <FormInput name="email" />

      <Button
        onClick={event => {
          event.preventDefault();
          handleSubmit();
        }}
        as="button"
        disabled={isSubmitting}
        type="submit"
      >
        Abschicken
      </Button>
    </form>
  );
};

const TestInput = ({ name, label }: { name: string; label: string }) => {
  const [input, meta] = useField(name);

  return (
    <InputGroup
      label={label}
      name={input.name}
      value={input.value}
      {...input}
    />
  );
};

storiesOf('Components|Form/Formulare', module)
  .addDecorator(story => <StoryContainer>{story()}</StoryContainer>)
  .addDecorator(withKnobs)
  .add(
    'Registrierung',
    () => {
      const onSubmit = () => {
        alert('submit');
      };
      return (
        <Formik
          initialValues={{
            email: '',
            lastName: '',
            firstName: '',
            password: ''
          }}
          onSubmit={onSubmit}
          render={({ values, handleSubmit }: FormikProps<RegisterValues>) => {
            return (
              <>
                <form onSubmit={handleSubmit}>
                  <TestInput name="firstName" label="Vorname" />
                  <TestInput name="lastName" label="Nachname" />
                  <TestInput name="email" label="E-Mail" />
                  <TestInput name="password" label="Passwort" />
                </form>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </>
            );
          }}
        />
      );
    },

    {
      options: {
        showPanel: true
      }
    }
  );
