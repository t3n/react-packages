import React from 'react';

import { renderWithTheme } from '../helper/renderWithTheme';
import { Switch } from './Switch';

test('readonly is set as HTML Attribute', () => {
  const { getByRole } = renderWithTheme(
    <Switch
      disabled={false}
      checked={false}
      value="true"
      name="Read-Only"
      readOnly
      label="Switch read only"
      variant="light"
    />,
    {}
  );

  expect(getByRole('checkbox').hasAttribute('readonly')).toBeTruthy();
});

test('Switch variants matches snapshot', () => {
  const { container } = renderWithTheme(
    <>
      <Switch
        disabled={false}
        checked={false}
        value="true"
        name="unchecked"
        readOnly
        label="Switch unchecked"
        variant="light"
      />
      <Switch
        disabled={false}
        checked
        value="true"
        name="checked"
        readOnly
        label="Switch checked"
        variant="light"
      />
      <Switch
        disabled
        checked
        value="true"
        name="disabled"
        readOnly
        label="Switch disabled checked"
        variant="light"
      />
      <Switch
        disabled
        checked={false}
        value="true"
        name="disabled"
        readOnly
        label="Switch disabled unchecked"
        variant="light"
      />
      <Switch
        disabled={false}
        checked={false}
        value="true"
        name="unchecked"
        readOnly
        label="Switch unchecked"
        variant="dark"
      />
      <Switch
        disabled={false}
        checked
        value="true"
        name="checked"
        readOnly
        label="Switch checked"
        variant="dark"
      />
      <Switch
        disabled
        checked
        value="true"
        name="disabled"
        readOnly
        label="Switch disabled checked"
        variant="dark"
      />
      <Switch
        disabled
        checked={false}
        value="true"
        name="disabled"
        readOnly
        label="Switch disabled unchecked"
        variant="dark"
      />
    </>,
    {}
  );
  expect(container).toMatchSnapshot();
});
