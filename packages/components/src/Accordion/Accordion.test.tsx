/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { fireEvent } from '@testing-library/dom';

import { renderWithTheme } from '../helper/renderWithTheme';
import { Accordion } from './Accordion';

test('Accordion machtes snapshot', () => {
  const { container } = renderWithTheme(
    <>
      <Accordion title="Some Accordion">
        <p>Content</p>
      </Accordion>
      <Accordion initialOpen title="Some Accordion">
        <p>Content</p>
      </Accordion>
    </>,
    {}
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('Accoridion can be initial open', () => {
  const { getByText } = renderWithTheme(
    <Accordion initialOpen title="Some Accordion">
      <p>Content</p>
    </Accordion>,
    {}
  );

  expect(getByText(/content/i)).toBeDefined();
});

test('Accoridion can be collapsed', () => {
  const { queryByText, getByRole } = renderWithTheme(
    <Accordion title="Some Accordion">
      <p>Content</p>
    </Accordion>,
    {}
  );

  expect(queryByText(/content/i)).toBeNull();
  fireEvent.click(getByRole('button'));
  expect(queryByText(/content/i)).not.toBeNull();
});
