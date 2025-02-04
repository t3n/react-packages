import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent } from '@testing-library/dom';

import { MaterialAddAPhoto } from '@t3n/icons';

import Box from '../Box';
import { renderWithTheme } from '../helper/renderWithTheme';
import Icon from '../Icon';
import Text from '../Text';
import Accordion from './Accordion';

test('Accordion matches snapshot', () => {
  const { container } = renderWithTheme(
    <>
      <Accordion title="Some Accordion">
        <p>Content</p>
      </Accordion>
      <Accordion initialOpen title="Some Accordion">
        <p>Content</p>
      </Accordion>
    </>,
    {},
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('Accoridion can be initial open', () => {
  const { getByText } = renderWithTheme(
    <Accordion initialOpen title="Some Accordion">
      <p>Content</p>
    </Accordion>,
    {},
  );

  expect(getByText(/content/i)).toBeDefined();
});

test('Accoridion can be collapsed', () => {
  const { queryByText, getByRole } = renderWithTheme(
    <Accordion title="Some Accordion">
      <p>Content</p>
    </Accordion>,
    {},
  );

  expect(queryByText(/content/i)).toBeNull();
  fireEvent.click(getByRole('button'));
  expect(queryByText(/content/i)).not.toBeNull();
});

test('Accordion matches snapchot with JSX.Element', () => {
  const { container } = renderWithTheme(
    <Accordion
      title={
        <Box display="flex">
          <Icon component={MaterialAddAPhoto} mr={2} />
          <Text bold>Das hier ist ein JSX.Element</Text>
        </Box>
      }
    >
      <p>Content</p>
    </Accordion>,
    {},
  );

  expect(container.firstChild).toMatchSnapshot();
});
