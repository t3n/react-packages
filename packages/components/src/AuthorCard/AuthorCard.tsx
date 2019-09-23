import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { Badge } from '../Badge';
import { Heading } from '../Heading';

export interface AuthorCardProps {
  title: string;
  articleType: string;
  author: {
    name: string;
    avatar: string;
  };
  url: string;
}

const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorCard = ({
  title,
  articleType,
  author,
  url
}: AuthorCardProps) => (
  <Card href={url} stretch>
    <div>
      <Badge variant="highlight" small>
        {articleType}
      </Badge>
    </div>

    <div style={{ flex: 1 }}>
      <Heading styleAs="h5" as="h2" mt={1} mb={7}>
        {title}
      </Heading>
    </div>

    <Author>
      <img
        src={author.avatar}
        width={40}
        style={{ marginRight: '1rem', borderRadius: '50%' }}
        alt={author.name}
      />{' '}
      {author.name}
    </Author>
  </Card>
);
