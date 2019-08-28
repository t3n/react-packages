import React from 'react';
import { Card, CardProps } from '../Card';
import { Heading, HeadingElements } from '../Heading';

export interface TitleCardProps extends Omit<CardProps, 'splitted'> {
  title: string;
  titleAs?: HeadingElements;
}

export const TitleCard: React.FC<TitleCardProps> = ({
  children,
  title,
  titleAs,
  ...props
}) => {
  return (
    <Card {...props}>
      <Heading as={titleAs} styleAs="h3" my={0}>
        {title}
      </Heading>
      {children}
    </Card>
  );
};
