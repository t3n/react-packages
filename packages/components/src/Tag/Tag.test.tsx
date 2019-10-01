import React from 'react';

import { MaterialClear } from '@t3n/icons';
import { Tag } from './Tag';
import { renderWithTheme } from '../helper/renderWithTheme';

test('Tag Variants matches snapshot', () => {
  const { container } = renderWithTheme(
    <>
      <Tag colorVariant="primary">primary tag</Tag>
      <Tag colorVariant="secondary">secondary tag</Tag>
      <Tag colorVariant="inverse">inverse tag</Tag>
      <Tag colorVariant="black">black tag</Tag>
      <Tag colorVariant="primary" small>
        small primary tag
      </Tag>
      <Tag colorVariant="secondary" small>
        small secondary tag
      </Tag>
      <Tag colorVariant="inverse" small>
        small inverse tag
      </Tag>
      <Tag colorVariant="black" small>
        small black tag
      </Tag>
    </>,
    {}
  );

  expect(container).toMatchSnapshot();
});

test('Icon is rendered within the tag', () => {
  const { container } = renderWithTheme(
    <Tag colorVariant="primary" icon={<MaterialClear />}>
      Tag with Icon
    </Tag>,
    {}
  );

  expect(container.getElementsByTagName('svg')).not.toBeNull();
});
