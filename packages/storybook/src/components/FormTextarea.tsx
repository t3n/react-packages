import React from 'react';
import { useField, useFormikContext } from 'formik';

import { FormGroup, Textarea } from '@t3n/components';

interface FormTextareaProps {
  name: string;
  label: string;
  maxLength: number;
}

// eslint-disable-next-line import/prefer-default-export
export const FormTextarea = ({ name, label, maxLength }: FormTextareaProps) => {
  const [{ value, name: fieldName, ...rest }, { touched, error }] =
    useField(name);
  const { setFieldValue } = useFormikContext<any>();

  const hasErrors = !!(touched && error);

  const handleReset = () => {
    setFieldValue(name, '');
  };

  return (
    <FormGroup label={label} errorMessage={touched && error ? error : ''}>
      <Textarea
        name={fieldName}
        error={hasErrors}
        onReset={handleReset}
        maxLength={maxLength}
        {...rest}
      />
    </FormGroup>
  );
};
