import React from 'react';
import { useField } from 'formik';
import { FormGroup, Input, PasswordLostLabel } from '@t3n/components';

import { InputTypes } from '@t3n/components/src/Input/Input';

interface FormInputProps {
  name: string;
  label: string;
  type: InputTypes;
}

const FormInput = ({ name, label, type = 'text' }: FormInputProps) => {
  const [input, meta] = useField(name);

  // workaround until this is released
  // https://github.com/jaredpalmer/formik/commit/7b0752a73ad1676ed88e92ca49f2e7341cce4413
  const { value, name: fieldName, ...rest }: any = input;
  const { touched, error }: any = meta;

  const hasErrors = !!(touched && error);

  return (
    <>
      <FormGroup
        label={label}
        errorMessage={touched && error ? error : ''}
        labelEndContent={name === 'password' && <PasswordLostLabel />}
      >
        <Input name={fieldName} error={hasErrors} type={type} {...rest} />
      </FormGroup>
    </>
  );
};

export { FormInput };
