import React from 'react';
import { useField } from 'formik';
import { InputGroup } from '@t3n/components';

interface FormInputProps {
  name: string;
  label: string;
}

const FormInput = ({ name, label }: FormInputProps) => {
  const [input, meta] = useField(name);

  // todo wrap meta stuff

  return (
    <>
      <InputGroup
        label={label}
        name={input.name}
        value={input.value}
        {...input}
      />
      {meta.error && meta.touched ? <p>{meta.error}</p> : null}
    </>
  );
};

export { FormInput };
