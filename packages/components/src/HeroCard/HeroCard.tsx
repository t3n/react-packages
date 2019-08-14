import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { CardHeader } from '../CardHeader';
import { Heading } from '../Heading';
import { Text } from '../Text';

interface HeroCardProps {
  title: string;
  imageUrl: string;
  author: string;
  url: string;
  publishedAt: Date;
}

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeroCard = ({
  title,
  imageUrl,
  publishedAt,
  author,
  url
}: HeroCardProps) => (
  <Card href={url} stretch>
    <CardHeader ratio={16 / 9} image={imageUrl} />

    <div style={{ flex: 1 }}>
      <Heading styleAs="h5" as="h2" mt={0} mb={7}>
        {title}
      </Heading>
    </div>

    <CardFooter>
      <Text width="auto" inline bold small>
        {author}
      </Text>
      <Text width="auto" inline small>
        {publishedAt.toLocaleDateString('de-DE', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })}
      </Text>
    </CardFooter>
  </Card>
);

export default HeroCard;
