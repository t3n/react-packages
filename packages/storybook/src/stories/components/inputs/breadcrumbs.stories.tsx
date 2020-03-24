import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { Breadcrumbs, BreadcrumbsItem } from '@t3n/components';
import { BreadcrumbsItemProps } from '@t3n/components/src/Breadcrumbs';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Inputs/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [withKnobs, storyContainerDecorator],
};

export const defaultStory = () => (
  <Breadcrumbs>
    <BreadcrumbsItem label="Homepage" href="/" />
    <BreadcrumbsItem label="Subpage" href="/" />
    <BreadcrumbsItem label="Current Page" />
  </Breadcrumbs>
);

defaultStory.story = {
  name: 'Default',
};

export const item = () => {
  const label = text('Label', 'Label');
  const href = text('Link URL', '');

  return (
    <Breadcrumbs>
      <BreadcrumbsItem label={label} href={href} />
    </Breadcrumbs>
  );
};

const CustomLinkComponent = styled.a<{ href: string }>`
  color: green;
  font-style: italic;

  &:hover {
    color: blue;
  }
`;

const CustomBreadcrumbsItem = ({ href, label }: BreadcrumbsItemProps) => (
  <BreadcrumbsItem
    href={href}
    label={label}
    linkComponent={CustomLinkComponent}
  />
);

export const customLink = () => (
  <Breadcrumbs>
    <CustomBreadcrumbsItem href="/" label="Custom Link" />
    <CustomBreadcrumbsItem href="/" label="Another Custom Link" />
    <BreadcrumbsItem label="Current Page" />
  </Breadcrumbs>
);
