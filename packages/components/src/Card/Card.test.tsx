import React from 'react';

import { Card } from './Card';
import { renderWithTheme } from '../helper/renderWithTheme';

test('Default Card matches snapshot', () => {
  const { container } = renderWithTheme(<Card>Default Card</Card>, {});

  expect(container.firstChild).toMatchSnapshot();
});

test('Big Card matches snapshot', () => {
  const { container } = renderWithTheme(<Card big>Big card</Card>, {});
  expect(container.firstChild).toMatchSnapshot();
});

test('Dashed Card matches snapshot', () => {
  const { container } = renderWithTheme(<Card dashed>Dashed card</Card>, {});
  expect(container.firstChild).toMatchSnapshot();
});
