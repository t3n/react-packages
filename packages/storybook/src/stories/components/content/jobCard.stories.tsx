import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Grid, GridItem, Content, JobCard } from '@t3n/components';

import { JobCardType } from '@t3n/components/src/JobCard';
import StoryContainer from '../../../components/StoryContainer';

storiesOf('Components|Content/JobCard', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <StoryContainer>
      <Content>{story()} </Content>
    </StoryContainer>
  ))
  .add(
    'Default',
    () => {
      const type: JobCardType = select(
        'Darstellung',
        { 'Job-Card': 'CARD', 'Job-List': 'LIST' },
        'CARD'
      );
      const loading = boolean('Ladestatus', false);
      const p = [type === 'CARD' ? 1 : 0, type === 'CARD' ? 1 : 0, 0];

      const job = {
        companyName: text('Firmennanme', 'PB3C GmbH'),
        imageUrl: text(
          'Firmenlogo',
          'https://storage.googleapis.com/t3n-de/jobslogos/50ee624bec9641caa70b3ff15300b75157ef532b/pb3c.png'
        ),
        title: text(
          'Jobtitel',
          '(Senior) Performance Marketing Manager (m/w/d)'
        ),
        url: text(
          'Job-URL',
          'https://t3n.de/jobs/job/pb3c-gmbh/senior-performance-marketing-manager-m-w-d/'
        ),
        city: text('Stadt', 'Berlin'),
        postCode: text('Postleitzahl', '10789')
      };

      return (
        <Grid justifyContent="center">
          <GridItem width={[1, 1, type === 'CARD' ? 1 / 3 : 1]} pt={p} pb={p}>
            <JobCard job={job} loading={loading} type={type} />
          </GridItem>
          <GridItem width={[1, 1, type === 'CARD' ? 1 / 3 : 1]} pt={p} pb={p}>
            <JobCard job={job} loading={loading} type={type} />
          </GridItem>
          <GridItem width={[1, 1, type === 'CARD' ? 1 / 3 : 1]} pt={p} pb={p}>
            <JobCard job={job} loading={loading} type={type} />
          </GridItem>
        </Grid>
      );
    },
    {
      options: {
        showPanel: true
      }
    }
  );
