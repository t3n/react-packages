import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { CardHeader } from '../CardHeader';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Badge } from '../Badge';

export type ArticleCardStyle = 'HERO' | 'AUTHOR-CARD';

interface ArticleCardProps {
  type: ArticleCardStyle;
  imageUrl: string;
  title: string;
  articleType: string;
  teaser: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: Date;
  url: string;
}

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const ArticleCard = ({
  imageUrl,
  title,
  type,
  articleType,
  author,
  publishedAt,
  url
}: ArticleCardProps) => (
  <Card href={url} stretch>
    {type === 'AUTHOR-CARD' && (
      <div>
        <Badge bgColor="highlight" small>
          {articleType}
        </Badge>
      </div>
    )}
    {type === 'HERO' && <CardHeader ratio={16 / 9} image={imageUrl} />}
    <div style={{ flex: 1 }}>
      <Heading styleAs="h5" as="h2" mt={type === 'AUTHOR-CARD' ? 1 : 0} mb={7}>
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

export default ArticleCard;
