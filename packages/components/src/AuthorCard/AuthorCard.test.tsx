import React from 'react';

import { renderWithTheme } from '../helper/renderWithTheme';
import AuthorCard from './AuthorCard';

const mockObserveFn = () => {
  return {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };
};

window.IntersectionObserver = jest.fn().mockImplementation(mockObserveFn);

const card = (
  <AuthorCard
    articleType="News"
    title="Author Card"
    url="https://t3n.de"
    author={{ name: 't3n Redaktion', avatar: '' }}
  />
);

test('Author Card matches snapshot', () => {
  const { container } = renderWithTheme(card, {});
  expect(container.firstChild).toMatchSnapshot();
});

test('Author Card renders content', () => {
  const { getByText } = renderWithTheme(card, {});

  expect(getByText(/t3n redaktion/i)).toBeDefined();
  expect(getByText(/news/i)).toBeDefined();
});
