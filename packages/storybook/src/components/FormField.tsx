import React from 'react';
import { useField, useFormikContext } from 'formik';

import { FormGroup, Input, PasswordLostLabel } from '@t3n/components';
import { InputTypes } from '@t3n/components/src/Input/Input';

interface FormInputProps {
  name: string;
  label: string;
  type: InputTypes;
}

export const FormInput = ({ name, label, type = 'text' }: FormInputProps) => {
  const [{ value, name: fieldName, ...rest }, { touched, error }] =
    useField(name);
  const { setFieldValue } = useFormikContext<any>();

  const hasErrors = !!(touched && error);

  const handleReset = () => {
    setFieldValue(name, '');
  };

  return (
    <FormGroup
      label={label}
      errorMessage={touched && error ? error : ''}
      labelEndContent={name === 'password' && <PasswordLostLabel />}
    >
      <Input
        name={fieldName}
        error={hasErrors}
        type={type}
        onReset={handleReset}
        {...rest}
      />
    </FormGroup>
  );
};

export default FormInput;
