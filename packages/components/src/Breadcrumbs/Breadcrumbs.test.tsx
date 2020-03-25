import React from 'react';

import { renderWithTheme } from '../helper/renderWithTheme';
import {
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsItemProps,
} from './Breadcrumbs';

const renderBreadcrumbs = () =>
  renderWithTheme(
    <Breadcrumbs>
      <BreadcrumbsItem label="Item 1" href="/item1" />
      <BreadcrumbsItem label="Item 2" href="/item2" />
      <BreadcrumbsItem label="Item 3" />
    </Breadcrumbs>,
    {}
  );

test('Breadcrumbs matches snapshot', () => {
  const { container } = renderBreadcrumbs();

  expect(container.firstChild).toMatchSnapshot();
});

test('Breadcrumbs navigation element is accessible', () => {
  const { getByRole } = renderBreadcrumbs();

  expect(getByRole('navigation').getAttribute('aria-label')).toEqual(
    'Breadcrumb'
  );
});

test('BreadcrumbsItems render label prop as text content', () => {
  const { getByText } = renderBreadcrumbs();

  expect(getByText('Item 1')).toBeDefined();
  expect(getByText('Item 2')).toBeDefined();
  expect(getByText('Item 3')).toBeDefined();
});

test('BreadcrumbsItems with href prop provided render as anchor element', () => {
  const { getByText } = renderBreadcrumbs();

  expect(getByText('Item 1').nodeName.toLowerCase()).toEqual('a');
  expect(getByText('Item 2').nodeName.toLowerCase()).toEqual('a');
  expect(getByText('Item 3').nodeName.toLowerCase()).not.toEqual('a');

  expect(getByText('Item 1').getAttribute('href')).toEqual('/item1');
  expect(getByText('Item 2').getAttribute('href')).toEqual('/item2');
  expect(getByText('Item 3').getAttribute('href')).toBeFalsy();
});

test('BreadcrumbsItems without href prop provided render as span element', () => {
  const { getByText } = renderBreadcrumbs();

  expect(getByText('Item 1').nodeName.toLowerCase()).not.toEqual('span');
  expect(getByText('Item 2').nodeName.toLowerCase()).not.toEqual('span');
  expect(getByText('Item 3').nodeName.toLowerCase()).toEqual('span');
});

test('BreadcrumbsItems without href render with bold text style', () => {
  const { getByText } = renderBreadcrumbs();

  expect(window.getComputedStyle(getByText('Item 1')).fontWeight).not.toBe(
    'bold'
  );
  expect(window.getComputedStyle(getByText('Item 2')).fontWeight).not.toBe(
    'bold'
  );
  expect(window.getComputedStyle(getByText('Item 3')).fontWeight).toBe('bold');
});

test('BreadcrumbsItems render custom link component if provided through props', () => {
  const CustomLink = ({ href, title }: { href: string; title?: string }) => (
    <a href={href} title={title} style={{ color: 'red' }}>
      {title}
    </a>
  );

  const CustomBreadcrumbsItem = (props: BreadcrumbsItemProps) => (
    <BreadcrumbsItem {...props} linkComponent={CustomLink} />
  );

  const { container, getByText } = renderWithTheme(
    <Breadcrumbs>
      <CustomBreadcrumbsItem label="Item 1" href="/item1" />
      <CustomBreadcrumbsItem label="Item 2" href="/item2" />
      <CustomBreadcrumbsItem label="Item 3" />
    </Breadcrumbs>,
    {}
  );

  expect(container.firstChild).toMatchSnapshot();
  expect(getByText('Item 1').style.color).toBe('red');
  expect(getByText('Item 2').style.color).toBe('red');
  expect(getByText('Item 3').style.color).not.toBe('red');
});
