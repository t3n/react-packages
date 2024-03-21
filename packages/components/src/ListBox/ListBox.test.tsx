import React from 'react';

import { renderWithTheme } from '../helper/renderWithTheme';
import ListBox from './ListBox';

test('ListBox Status matches Snapshot', () => {
  const { container } = renderWithTheme(
    <ListBox>Dies ist eine Listbox.</ListBox>,
    {},
  );

  expect(container).toMatchSnapshot();
});
