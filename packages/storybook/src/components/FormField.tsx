import React from 'react';
import { useField } from 'formik';
import { FormGroup, Input, PasswordLostLabel } from '@t3n/components';

interface FormInputProps {
  name: string;
  label: string;
  required?: boolean;
}

const FormInput = ({ name, label, required }: FormInputProps) => {
  const [input, meta] = useField(name);

  // todo wrap meta stuff

  return (
    <>
      <FormGroup
        label={label}
        errorMessage={
          input.value && meta.touched && meta.error ? meta.error : ''
        }
        required={required}
        labelEndContent={name === 'password' && <PasswordLostLabel />}
      >
        <Input
          name={input.name}
          error={!!(input.value && meta.touched && meta.error)}
          {...input}
        />
      </FormGroup>
    </>
  );
};

export { FormInput };
