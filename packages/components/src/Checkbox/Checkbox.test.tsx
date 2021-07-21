import React from 'react';

import { renderWithTheme } from '../helper/renderWithTheme';
import { Checkbox } from './Checkbox';

test('Label is present on checkbox', () => {
  const { getByText } = renderWithTheme(
    <Checkbox
      label="ein Label"
      onChange={() => {
        console.log('clicked');
      }}
      checked
      name="check"
      value="checkbox"
    />,
    {}
  );

  expect(getByText(/ein label/i)).toBeTruthy();
});

test('Checkbox has feedback styles', () => {
  const { container } = renderWithTheme(
    <>
      <Checkbox
        onChange={() => {
          console.log('clicked');
        }}
        checked
        name="check"
        value="checkbox"
        feedbackColor="error"
      />
      <Checkbox
        onChange={() => {
          console.log('clicked');
        }}
        checked
        name="check"
        value="checkbox"
        feedbackColor="notice"
      />
      <Checkbox
        onChange={() => {
          console.log('clicked');
        }}
        checked
        name="check"
        value="checkbox"
        feedbackColor="warn"
      />
      <Checkbox
        onChange={() => {
          console.log('clicked');
        }}
        checked
        name="check"
        value="checkbox"
        feedbackColor="success"
      />
      <Checkbox
        onChange={() => {
          console.log('clicked');
        }}
        variant="dark"
        checked
        name="check"
        value="checkbox"
        feedbackColor="error"
      />
      <Checkbox
        onChange={() => {
          console.log('clicked');
        }}
        variant="dark"
        checked
        name="check"
        value="checkbox"
        feedbackColor="notice"
      />
      <Checkbox
        onChange={() => {
          console.log('clicked');
        }}
        variant="dark"
        checked
        name="check"
        value="checkbox"
        feedbackColor="warn"
      />
      <Checkbox
        onChange={() => {
          console.log('clicked');
        }}
        variant="dark"
        checked
        name="check"
        value="checkbox"
        feedbackColor="success"
      />
    </>,
    {}
  );

  expect(container).toMatchSnapshot();
});
