import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Grid, GridItem, JobCard } from '@t3n/components';
import { JobCardType } from '@t3n/components/src/JobCard';

import { storyContainerContentDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Content/JobCard',
  component: JobCard,
  decorators: [withKnobs, storyContainerContentDecorator]
};

export const defaultStory = () => {
  const type: JobCardType = select(
    'Darstellung',
    { 'Job-Card': 'CARD', 'Job-List': 'LIST' },
    'CARD'
  );
  const loading = boolean('Ladestatus', false);
  const p = [type === 'CARD' ? 2 : 0, type === 'CARD' ? 2 : 0, 0];

  const job = {
    companyName: text('Firmennanme', 'PB3C GmbH'),
    imageUrl: text(
      'Firmenlogo',
      'https://storage.googleapis.com/t3n-de/jobslogos/50ee624bec9641caa70b3ff15300b75157ef532b/pb3c.png'
    ),
    title: text('Jobtitel', '(Senior) Performance Marketing Manager (m/w/d)'),
    url: text(
      'Job-URL',
      'https://t3n.de/jobs/job/pb3c-gmbh/senior-performance-marketing-manager-m-w-d/'
    ),
    city: text('Stadt', 'Berlin'),
    postCode: text('Postleitzahl', '10789')
  };

  return (
    <Grid justifyContent="center">
      <GridItem width={[1, 1, type === 'CARD' ? 1 / 3 : 1]} py={p}>
        <JobCard job={job} loading={loading} type={type} />
      </GridItem>
      <GridItem width={[1, 1, type === 'CARD' ? 1 / 3 : 1]} py={p}>
        <JobCard job={job} loading={loading} type={type} />
      </GridItem>
      <GridItem width={[1, 1, type === 'CARD' ? 1 / 3 : 1]} py={p}>
        <JobCard job={job} loading={loading} type={type} />
      </GridItem>
    </Grid>
  );
};

defaultStory.story = {
  name: 'Default'
};
