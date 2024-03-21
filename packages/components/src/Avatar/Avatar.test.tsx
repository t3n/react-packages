import React from 'react';

import { renderWithTheme } from '../helper/renderWithTheme';
import Avatar from './Avatar';

test('Avatar matches snapshot and renders label', () => {
  const { container, getByText } = renderWithTheme(
    <Avatar size={40} src="" label="Some author" alt="alt-attribute" />,
    {},
  );
  expect(container.firstChild).toMatchSnapshot();
  expect(getByText(/some author/i)).toBeDefined();
});

test('Avatar renders without label', () => {
  const { container } = renderWithTheme(
    <Avatar size={40} src="" alt="alt-attribute" />,
    {},
  );

  expect(container.firstChild).toMatchSnapshot();
});
