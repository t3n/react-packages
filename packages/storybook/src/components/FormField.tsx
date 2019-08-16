import React from 'react';
import { useField } from 'formik';
import { FormGroup, Input, PasswordLostLabel } from '@t3n/components';

import { InputTypes } from '@t3n/components/src/Input/Input';

interface FormInputProps {
  name: string;
  label: string;
  required?: boolean;
  type: InputTypes;
}

const FormInput = ({
  name,
  label,
  required = false,
  type = 'text'
}: FormInputProps) => {
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
          type={type}
          error={!!(input.value && meta.touched && meta.error)}
          {...input}
        />
      </FormGroup>
    </>
  );
};

export { FormInput };
