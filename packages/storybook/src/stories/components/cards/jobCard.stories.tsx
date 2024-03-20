import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Grid, GridItem, JobCard } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof JobCard> = {
  component: JobCard,
  title: 'Components/Cards/JobCard',
  decorators: [
    (StoryComp) => (
      <Grid noGap justifyContent="center">
        <GridItem width={[1, 2 / 3, 1 / 2]}>
          <StoryComp />
        </GridItem>
      </Grid>
    ),
    storyContainerContentDecorator,
  ],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    loading: false,
    type: 'CARD',
    job: {
      companyName: 'PB3C GmbH',
      imageUrl:
        'https://storage.googleapis.com/t3n-de/jobslogos/50ee624bec9641caa70b3ff15300b75157ef532b/pb3c.png',
      title: '(Senior) Performance Marketing Manager (m/w/d)',
      url: 'https://t3n.de/jobs/job/pb3c-gmbh/senior-performance-marketing-manager-m-w-d/',
      city: 'Berlin',
      postCode: '10789',
    },
  },
};

export default meta;
type Story = StoryObj<typeof JobCard>;

export const jobCard: Story = {};

export const jobList: Story = {
  args: { type: 'LIST' },
};

export const loading: Story = {
  args: { loading: true },
};

export const loadingList: Story = {
  args: { loading: true, type: 'LIST' },
};
