import React from 'react';

import { renderWithTheme } from '../helper/renderWithTheme';
import Button from './Button';

test('Button in default state matches snapshot', () => {
  const { container } = renderWithTheme(<Button>text</Button>, {});

  expect(container.firstChild).toMatchSnapshot();
});

test('Primary Button as "default" color variant matches snapshot', () => {
  const { container } = renderWithTheme(
    <Button variant="primary" color="default">
      text
    </Button>,
    {},
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('Primary Button as "inverse" color variant matches snapshot', () => {
  const { container } = renderWithTheme(
    <Button variant="primary" color="inverse">
      text
    </Button>,
    {},
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('Primary Button as "highlight" color variant matches snapshot', () => {
  const { container } = renderWithTheme(
    <Button variant="primary" color="highlight">
      text
    </Button>,
    {},
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('Secondary Button as "default" color variant matches snapshot', () => {
  const { container } = renderWithTheme(
    <Button variant="secondary" color="default">
      text
    </Button>,
    {},
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('Secondary Button as "inverse" color variant matches snapshot', () => {
  const { container } = renderWithTheme(
    <Button variant="secondary" color="inverse">
      text
    </Button>,
    {},
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('Secondary Button as "highlight" color variant matches snapshot', () => {
  const { container } = renderWithTheme(
    <Button variant="secondary" color="highlight">
      text
    </Button>,
    {},
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('Button in loading state matches snapshot', () => {
  const { container } = renderWithTheme(<Button loading>text</Button>, {});

  expect(container.firstChild).toMatchSnapshot();
});

test('Small Button matches snapshot', () => {
  const { container } = renderWithTheme(<Button size="small">text</Button>, {});

  expect(container.firstChild).toMatchSnapshot();
});

test('Small Button in loading state matches snapshot', () => {
  const { container } = renderWithTheme(
    <Button size="small" loading>
      text
    </Button>,
    {},
  );

  expect(container.firstChild).toMatchSnapshot();
});
