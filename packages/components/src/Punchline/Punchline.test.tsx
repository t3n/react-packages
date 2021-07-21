import React from 'react';

import { renderWithTheme } from '../helper/renderWithTheme';
import { Punchline } from './Punchline';

test('Punchline machtes snapshot', () => {
  const { container } = renderWithTheme(
    <>
      <Punchline>Test</Punchline>
    </>,
    {}
  );

  expect(container.firstChild).toMatchSnapshot();
});
