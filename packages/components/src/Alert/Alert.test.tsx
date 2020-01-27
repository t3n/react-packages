import React from 'react';
import { renderWithTheme } from '../helper/renderWithTheme';
import { Alert, AlertText } from './Alert';

test('Alert Status matches Snapshot', () => {
  const { container } = renderWithTheme(
    <>
      <Alert status="success" m={2}>
        <AlertText>Dies ist eine Erolgsmeldung</AlertText>
      </Alert>
      <Alert status="notice" m={2}>
        <AlertText>Merke dir dies und das!</AlertText>
      </Alert>
      <Alert status="warning" m={2}>
        <AlertText>Dies ist eine Warnung!</AlertText>
      </Alert>
      <Alert status="error" m={2}>
        <AlertText>So geht das nicht. Error!</AlertText>
      </Alert>
    </>,
    {}
  );

  expect(container).toMatchSnapshot();
});
