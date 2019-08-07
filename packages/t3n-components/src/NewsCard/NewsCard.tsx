import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { CardHeader } from '../CardHeader';
import { Heading } from '../Heading';
import { Text } from '../Text';

export type NewsCardStyle = 'HERO' | 'AUTHOR-CARD';

interface NewsCardProps {
  type: NewsCardStyle;
  imageUrl: string;
  title: string;
  teaser: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: Date;
}

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const NewsCard = ({
  imageUrl,
  title,
  type,
  author,
  publishedAt
}: NewsCardProps) => (
  <Card stretch>
    {type === 'HERO' && <CardHeader ratio={16 / 9} image={imageUrl} />}
    <div style={{ flex: 1 }}>
      <Heading styleAs="h5" as="h2" mt={0} mb={7}>
        {title}
      </Heading>
    </div>

    {type === 'AUTHOR-CARD' ? (
      <Author>
        <img
          src={author.avatar}
          width={40}
          style={{ marginRight: '1rem', borderRadius: '50%' }}
          alt={author.name}
        />{' '}
        {author.name}
      </Author>
    ) : (
      <CardFooter>
        <Text width="auto" inline bold small>
          {author.name}
        </Text>
        <Text width="auto" inline small>
          {publishedAt.toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })}
        </Text>
      </CardFooter>
    )}
  </Card>
);

export default NewsCard;
