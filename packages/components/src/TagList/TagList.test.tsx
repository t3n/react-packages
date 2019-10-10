import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { TagList } from './TagList';
import { renderWithTheme } from '../helper/renderWithTheme';
import { Tag } from '../Tag/Tag';

test('TagList matches snapshot', () => {
  const tagLabels = ['foo', 'bar', 'baz'];

  const { container } = renderWithTheme(
    <>
      <TagList
        collapseAfter={2}
        tags={tagLabels.map(tag => (
          <Tag>{tag}</Tag>
        ))}
      />
    </>,
    {}
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('TagList has no toggle if there are not enough items', () => {
  const tagLabels = ['foo', 'bar', 'baz'];

  const { queryByLabelText } = renderWithTheme(
    <>
      <TagList
        collapseAfter={3}
        tags={tagLabels.map(tag => (
          <Tag>{tag}</Tag>
        ))}
      />
    </>,
    {}
  );

  expect(queryByLabelText(/mehr/i)).toBeNull();
});

test('TagList will collapse tags', () => {
  const tagLabels = ['foo', 'bar', 'baz'];

  const { queryByText, getByLabelText } = renderWithTheme(
    <>
      <TagList
        collapseAfter={2}
        tags={tagLabels.map(tag => (
          <Tag>{tag}</Tag>
        ))}
      />
    </>,
    {}
  );

  expect(queryByText(/baz/i)).toBeNull();

  // expand items
  const toggle = getByLabelText(/mehr/i);
  fireEvent.click(toggle);

  expect(queryByText(/baz/i)).not.toBeNull();
});
