import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { Text } from '../Text';
import { Image } from '../Image';
import { Placeholder } from '../Placeholder';

export type JobCardType = 'CARD' | 'LIST';

interface Job {
  title: string;
  url: string;
  imageUrl: string;
  companyName: string;
  postCode: string;
  city: string;
}

interface JobCardProps {
  loading: boolean;
  type: JobCardType;

  job?: Job;
}

const LoadingJobCard = () => (
  <Card>
    <Placeholder height="1rem" mb={1} mt={1} />
    <Placeholder height="1rem" width="75%" mb={3} />
    <div style={{ display: 'flex', width: '100%' }}>
      <Placeholder height="80px" width="80px" />
      <div style={{ marginLeft: '10px' }}>
        <Placeholder height="0.875rem" width="5rem" mb={1} />
        <Placeholder height="0.875rem" width="4.5rem" />
      </div>
    </div>
  </Card>
);

const LoadingJobListItem = () => (
  <Card>
    <div style={{ display: 'flex' }}>
      <Placeholder height="80px" width="80px" />
      <div style={{ marginLeft: '10px' }}>
        <Placeholder height="1.25rem" width="20rem" mb={0} mt={1} />
        <Placeholder height="1rem" width="7rem" mb={2} mt={1} />
        <Placeholder height="0.875rem" width="5rem" mt={1} mb={1} />
      </div>
    </div>
  </Card>
);

const BorderImage = styled(Image)`
  border: 2px solid ${props => props.theme.colors.shades.grey232};
  margin-right: 10px;
`;

const JobCardItem = ({
  city,
  imageUrl,
  postCode,
  title,
  url,
  companyName
}: Job) => (
  <Card href={url} stretch>
    <div style={{ flex: 1 }}>
      <Text width="auto" bold mt={0} mb={3}>
        {title}
      </Text>
    </div>

    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <BorderImage alt={companyName} src={imageUrl} width="80" height="80" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Text width="auto" inline bold small>
          {companyName}
        </Text>
        <Text width="auto" inline small>
          {postCode} {city}
        </Text>
      </div>
    </div>
  </Card>
);

const JobListItem = ({
  city,
  companyName,
  url,
  title,
  postCode,
  imageUrl
}: Job) => (
  <Card href={url} stretch rounded={false} elevate={false}>
    <div style={{ display: 'flex' }}>
      <BorderImage alt={companyName} src={imageUrl} width="80" height="80" />
      <div>
        <Text width="auto" bold mt={0} mb={0}>
          {title}
        </Text>
        <Text width="auto" mt={0} mb={0}>
          {companyName}
        </Text>
        <Text width="auto" small mt={1} mb={0} color="shades.grey155">
          {/* TODO: Add location icon before city */}
          {postCode} {city}
        </Text>
      </div>
    </div>
  </Card>
);

export const JobCard = ({ job, loading, type }: JobCardProps) => {
  if (!job) {
    return null;
  }

  if (type === 'CARD') {
    return loading ? <LoadingJobCard /> : <JobCardItem {...job} />;
  }

  if (type === 'LIST') {
    return loading ? <LoadingJobListItem /> : <JobListItem {...job} />;
  }

  return null;
};
