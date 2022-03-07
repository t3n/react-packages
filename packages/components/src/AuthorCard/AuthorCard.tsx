import React from 'react';
import styled from 'styled-components';

import Badge from '../Badge';
import Card from '../Card';
import Heading from '../Heading';
import Image from '../Image';

export interface AuthorValues {
  name: string;
  avatar: string;
}

export interface AuthorCardProps {
  title: string;
  articleType: string;
  author: AuthorValues;
  url: string;
}

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorCard = ({ title, articleType, author, url }: AuthorCardProps) => (
  <Card href={url} stretch>
    <div>
      <Badge variant="highlight" small>
        {articleType}
      </Badge>
    </div>

    <div style={{ flex: 1 }}>
      <Heading styleAs="h5" as="h2" mt={2} mb={8}>
        {title}
      </Heading>
    </div>

    <Author>
      <Image
        src={author.avatar}
        width={40}
        style={{ marginRight: '1rem', borderRadius: '50%' }}
        alt={author.name}
      />
      {author.name}
    </Author>
  </Card>
);

export default AuthorCard;
