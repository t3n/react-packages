import React, { useState } from 'react';
import { number, array, withKnobs } from '@storybook/addon-knobs';

import { Slider, Text, H3, Button, Box } from '@t3n/components';

import { Formik } from 'formik';
import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Inputs/Slider',
  component: Slider,
  decorators: [withKnobs, storyContainerDecorator]
};

export const defaultStory = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0);
  const minKnob = number('Min', 0);
  const maxKnob = number('Max', 20);
  const stepKnob = number('Step', 5);
  const labelsKnob = array('Labels', ['0', '5', '10', '15', '20']);

  return (
    <>
      <Slider
        name="slider"
        min={minKnob}
        max={maxKnob}
        value={value}
        step={stepKnob}
        labels={labelsKnob}
        onChange={setValue}
      />
      <Text>Selected value: {value}</Text>
    </>
  );
};

defaultStory.story = {
  name: 'Default'
};

export const range = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0);

  return (
    <>
      <Slider
        name="slider"
        max={10}
        step={1}
        value={value}
        labels={['0', '10']}
        onChange={setValue}
      />
      <Text>Selected value: {value}</Text>
    </>
  );
};

export const syncedSlider = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(1);

  return (
    <>
      <H3>Slider, die im sync sind</H3>
      <Text>Currently selected value: {value}</Text>
      <Slider
        name="slider"
        max={10}
        step={1}
        value={value}
        labels={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        onChange={setValue}
      />
      <Slider
        name="slider"
        max={10}
        step={1}
        value={value}
        labels={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        onChange={setValue}
      />
    </>
  );
};

syncedSlider.story = {
  name: 'Sync mehrere Slider'
};

export const inForm = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Formik
        onSubmit={() => setSubmitted(true)}
        initialValues={{ statisfied: 2 }}
        render={({
          handleReset,
          dirty,
          values,
          setFieldValue,
          handleSubmit
        }) => {
          return (
            <>
              <Slider
                name="statisfied"
                max={10}
                step={2}
                value={values.statisfied}
                labels={['0', '2', '4', '6', '8', '10']}
                onChange={val => setFieldValue('statisfied', val)}
              />
              <Button mr={3} variant="primary" onClick={() => handleSubmit()}>
                Submit
              </Button>
              {dirty && (
                <>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      handleReset();
                      setSubmitted(false);
                    }}
                  >
                    Reset
                  </Button>
                  <pre>{JSON.stringify(values)}</pre>
                </>
              )}
            </>
          );
        }}
      />

      {submitted && <Text>Du hast das Formular abgeschickt :)</Text>}
    </>
  );
};

inForm.story = {
  name: 'Slider im Formular'
};

export const fixedContainer = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(1);

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box width="300px">
          <Slider
            value={value}
            max={2}
            min={0}
            step={1}
            onChange={v => setValue(v)}
            name="slider"
            labels={['0', '1', '2']}
          />
        </Box>
      </Box>
    </>
  );
};

fixedContainer.story = {
  name: 'Slider in fixed Container'
};
