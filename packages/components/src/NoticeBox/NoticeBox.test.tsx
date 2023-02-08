import React from 'react';

import { renderWithTheme } from '../helper/renderWithTheme';
import NoticeBox, { NoticeBoxText } from './NoticeBox';

test('NoticeBox Status matches Snapshot', () => {
  const { container } = renderWithTheme(
    <NoticeBox m={2}>
      <NoticeBoxText>Dies ist eine Erfolgsmeldung</NoticeBoxText>
    </NoticeBox>,
    {}
  );

  expect(container).toMatchSnapshot();
});
