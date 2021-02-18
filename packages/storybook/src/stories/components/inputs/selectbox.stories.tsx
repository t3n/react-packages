import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';
import * as Yup from 'yup';
import { boolean, text } from '@storybook/addon-knobs';
import { Formik, FormikHelpers, FormikProps } from 'formik';

import { ThemeProps } from '@t3n/theme';
import {
  Box,
  Button,
  Card,
  CardSplitContent,
  FormGroup,
  Heading,
  SelectBox,
} from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

const Wrapper = styled(Box)`
  width: 61.25rem;
  margin: auto auto 0;
  position: relative;
`;

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
  <Wrapper>
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
  </Wrapper>
);

defaultStory.story = {
  name: 'Default',
};

export const valueStory = () => (
  <Wrapper>
    <SelectBox
      options={colorOptions}
      defaultValue={colorOptions[3] as any}
      width={[1, 1, 1 / 2]}
    />
  </Wrapper>
);

valueStory.story = {
  name: 'Value',
};

export const noGroupsStory = () => (
  <Wrapper>
    <SelectBox options={colorOptions} width={[1, 1, 1 / 2]} />
  </Wrapper>
);

noGroupsStory.story = {
  name: 'No Option Groups',
};

export const multiSelectStory = () => (
  <Wrapper>
    <SelectBox
      options={groupedOptions}
      multiSelect
      closeMenuOnSelect={false}
      width={[1, 1, 1 / 2]}
    />
  </Wrapper>
);

multiSelectStory.story = {
  name: 'MultiSelect',
};

export const disabledStory = () => (
  <Wrapper>
    <SelectBox options={groupedOptions} disabled width={[1, 1, 1 / 2]} />
  </Wrapper>
);

disabledStory.story = {
  name: 'Disabled',
};

export const autoFocusStory = () => (
  <Wrapper>
    <SelectBox options={groupedOptions} autoFocus width={[1, 1, 1 / 2]} />
  </Wrapper>
);

autoFocusStory.story = {
  name: 'Autofocus',
};

export const searchableStory = () => (
  <Wrapper>
    <SelectBox options={groupedOptions} searchable width={[1, 1, 1 / 2]} />
  </Wrapper>
);

searchableStory.story = {
  name: 'Searchable',
};

export const hideResetStory = () => (
  <Wrapper>
    <SelectBox options={groupedOptions} hideReset width={[1, 1, 1 / 2]} />
  </Wrapper>
);

hideResetStory.story = {
  name: 'Hide Reset',
};

export const disabledOptionStory = () => (
  <Wrapper>
    <SelectBox options={colorOptions} width={[1, 1, 1 / 2]} />
  </Wrapper>
);

disabledOptionStory.story = {
  name: 'Disabled Option',
};

export const loadingStory = () => (
  <Wrapper>
    <SelectBox options={groupedOptions} loading width={[1, 1, 1 / 2]} />
  </Wrapper>
);

loadingStory.story = {
  name: 'Loading',
};

export const errorStory = () => (
  <Wrapper>
    <SelectBox options={groupedOptions} error width={[1, 1, 1 / 2]} />
  </Wrapper>
);

errorStory.story = {
  name: 'Error',
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
    <Wrapper>
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
    </Wrapper>
  );
};

formStory.story = {
  name: 'Form',
};
