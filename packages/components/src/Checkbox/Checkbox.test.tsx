import React from 'react';
import { renderWithTheme } from '../helper/renderWithTheme';
import { Checkbox } from './Checkbox';

test('All variants Checkbox matches snapshot', () => {
  const { container } = renderWithTheme(
    <>
      <Checkbox onChange={() => {}} checked name="check" value="checkbox" />
      <Checkbox
        onChange={() => {}}
        checked
        name="check"
        variant="dark"
        value="checkbox"
      />
    </>,
    {}
  );

  expect(container).toMatchSnapshot();
});

test('Label is present on checkbox', () => {
  const { getByText } = renderWithTheme(
    <Checkbox
      label="ein Label"
      onChange={() => {}}
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
        onChange={() => {}}
        checked
        name="check"
        value="checkbox"
        feedbackColor="error"
      />
      <Checkbox
        onChange={() => {}}
        checked
        name="check"
        value="checkbox"
        feedbackColor="notice"
      />
      <Checkbox
        onChange={() => {}}
        checked
        name="check"
        value="checkbox"
        feedbackColor="warn"
      />
      <Checkbox
        onChange={() => {}}
        checked
        name="check"
        value="checkbox"
        feedbackColor="success"
      />
      <Checkbox
        onChange={() => {}}
        variant="dark"
        checked
        name="check"
        value="checkbox"
        feedbackColor="error"
      />
      <Checkbox
        onChange={() => {}}
        variant="dark"
        checked
        name="check"
        value="checkbox"
        feedbackColor="notice"
      />
      <Checkbox
        onChange={() => {}}
        variant="dark"
        checked
        name="check"
        value="checkbox"
        feedbackColor="warn"
      />
      <Checkbox
        onChange={() => {}}
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
