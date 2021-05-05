import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';
import * as Yup from 'yup';
import { boolean, text } from '@storybook/addon-knobs';
import { Formik, FormikHelpers, FormikProps } from 'formik';

import { ThemeProps } from '@t3n/theme';
import {
  Button,
  Card,
  CardSplitContent,
  FormGroup,
  Heading,
  Text,
  SelectBox,
} from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

const DebugValues = styled.pre<ThemeProps>`
  overflow: hidden;
  ${space({ p: 2 })};
  ${color({ bg: '#e8e8e8' })}
`;

export default {
  component: SelectBox,
  title: 'Components/Inputs/SelectBox',
  decorators: [storyContainerDecorator],
};

const colorOptions = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange', isDisabled: true },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' },
];

const flavourOptions = [
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'salted-caramel', label: 'Salted Caramel' },
];

const groupedOptions = [
  {
    label: 'Eissorten',
    options: flavourOptions,
  },
  {
    label: 'Farben',
    options: colorOptions,
  },
];

export const defaultStory = () => (
  <SelectBox
    options={groupedOptions}
    autoFocus={boolean('Autofocus?', false)}
    disabled={boolean('Disabled?', false)}
    hideReset={boolean('Hide reset?', false)}
    loading={boolean('Loading?', false)}
    multiSelect={boolean('MultiSelect?', true)}
    closeMenuOnSelect={boolean('Close Menu on Select?', false)}
    placeholder={text('Placeholder', 'Auswählen')}
    searchable={boolean('Searchable?', true)}
    error={boolean('Error?', false)}
    width={[1, 1, 1 / 2]}
  />
);

defaultStory.story = {
  name: 'Default',
};

export const valueStory = () => (
  <SelectBox
    options={colorOptions}
    defaultValue={colorOptions[3] as any}
    width={[1, 1, 1 / 2]}
  />
);

valueStory.story = {
  name: 'Value',
};

export const noGroupsStory = () => (
  <SelectBox options={colorOptions} width={[1, 1, 1 / 2]} />
);

noGroupsStory.story = {
  name: 'No Option Groups',
};

export const multiSelectStory = () => (
  <SelectBox
    options={groupedOptions}
    multiSelect
    closeMenuOnSelect={false}
    width={[1, 1, 1 / 2]}
  />
);

multiSelectStory.story = {
  name: 'MultiSelect',
};

export const disabledStory = () => (
  <SelectBox options={groupedOptions} disabled width={[1, 1, 1 / 2]} />
);

disabledStory.story = {
  name: 'Disabled',
};

export const autoFocusStory = () => (
  <SelectBox options={groupedOptions} autoFocus width={[1, 1, 1 / 2]} />
);

autoFocusStory.story = {
  name: 'Autofocus',
};

export const searchableStory = () => (
  <SelectBox options={groupedOptions} searchable width={[1, 1, 1 / 2]} />
);

searchableStory.story = {
  name: 'Searchable',
};

export const hideResetStory = () => (
  <SelectBox options={groupedOptions} hideReset width={[1, 1, 1 / 2]} />
);

hideResetStory.story = {
  name: 'Hide Reset',
};

export const disabledOptionStory = () => (
  <SelectBox options={colorOptions} width={[1, 1, 1 / 2]} />
);

disabledOptionStory.story = {
  name: 'Disabled Option',
};

export const loadingStory = () => (
  <SelectBox options={groupedOptions} loading width={[1, 1, 1 / 2]} />
);

loadingStory.story = {
  name: 'Loading',
};

export const errorStory = () => (
  <SelectBox options={groupedOptions} error width={[1, 1, 1 / 2]} />
);

errorStory.story = {
  name: 'Error',
};

export const creatableStory = () => (
  <SelectBox creatable options={colorOptions} width={[1, 1, 1 / 2]} />
);

creatableStory.story = {
  name: 'Creatable',
};

const AsyncSelectBoxComponent = () => {
  const handleLoadOptions = (
    e: any,
    callback: (options: { value: string; label: string }[]) => void
  ) => {
    setTimeout(() => {
      callback([
        { value: 'blue', label: 'Blau' },
        { value: 'yellow', label: 'Gelb' },
        { value: 'red', label: 'Rot' },
      ]);
    }, 1000);
  };

  const renderLoadingMessage = () => {
    return 'Lade mehr Daten ...';
  };

  return (
    <>
      <Text>Bei Eingabe werden Daten nachgeladen</Text>
      <SelectBox
        async
        loadOptions={handleLoadOptions}
        loadingMessage={renderLoadingMessage}
        creatable
        options={colorOptions}
        width={[1, 1, 1 / 2]}
      />
    </>
  );
};

export const asyncStory = () => {
  return <AsyncSelectBoxComponent />;
};

asyncStory.story = {
  name: 'Optionen nachladen',
};

interface FormValues {
  tags: {
    label: string;
    value: string;
  }[];
}

const formValidation = Yup.object().shape({
  tags: Yup.array()
    .min(3, 'Pick at least 3 tags')
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    ),
});

export const formStory = () => {
  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    const payload = {
      ...values,
      tags: values.tags.map((t) => t.value),
    };
    setTimeout(() => {
      // eslint-disable-next-line no-alert
      alert(
        `Formular wurde abgeschickt mit den folgenden Werten:
            ${JSON.stringify(payload, null, 2)}`
      );
      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik
      initialValues={{
        tags: [] as any[],
      }}
      validationSchema={formValidation}
      isInitialValid={false}
      onSubmit={onSubmit}
      render={({
        values,
        touched,
        errors,
        handleSubmit,
        isValid,
        isSubmitting,
        handleReset,
        setFieldValue,
        setFieldTouched,
      }: FormikProps<FormValues>) => {
        return (
          <Card splitted>
            <CardSplitContent variant="secondary">
              <>
                <Heading styleAs="h4">Debug-Daten</Heading>
                <p>Values:</p>
                <DebugValues>{JSON.stringify(values, null, 2)}</DebugValues>
                <p>Errors:</p>
                <DebugValues>{JSON.stringify(errors, null, 2)}</DebugValues>
                <p>Touched:</p>
                <DebugValues>{JSON.stringify(touched, null, 2)}</DebugValues>
                <Button variant="secondary" onClick={handleReset}>
                  Formular zurücksetzen
                </Button>
              </>
            </CardSplitContent>
            <CardSplitContent>
              <>
                <Heading styleAs="h4">Tags setzen</Heading>
                <form onSubmit={handleSubmit}>
                  <FormGroup label="Tags">
                    <SelectBox
                      name="tags"
                      multiSelect
                      closeMenuOnSelect={false}
                      options={colorOptions}
                      onChange={(value) => setFieldValue('tags', value)}
                      onBlur={() => setFieldTouched('tags', true)}
                      error={!errors}
                      loading={isSubmitting}
                      value={values.tags}
                    />
                  </FormGroup>

                  <Button
                    mt={2}
                    type="submit"
                    disabled={!isValid || isSubmitting}
                  >
                    Speichern
                  </Button>
                </form>
              </>
            </CardSplitContent>
          </Card>
        );
      }}
    />
  );
};

formStory.story = {
  name: 'Form',
};
