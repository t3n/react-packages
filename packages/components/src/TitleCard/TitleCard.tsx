import React, { ReactNode } from 'react';

import Card, { CardProps } from '../Card';
import Heading, { HeadingElements } from '../Heading';

export interface TitleCardProps extends Omit<CardProps, 'splitted'> {
  title: string;
  titleAs?: HeadingElements;
  centerTitle?: boolean;
  children?: ReactNode;
}

const TitleCard = ({
  children,
  title,
  titleAs,
  centerTitle,
  ...props
}: TitleCardProps) => {
  return (
    // TODO: fix type casting
    <Card {...(props as any)}>
      <Heading
        as={titleAs || 'h3'}
        styleAs="h4"
        mt={0}
        mb={4}
        align={centerTitle ? 'center' : 'left'}
      >
        {title}
      </Heading>
      {children}
    </Card>
  );
};

export default TitleCard;
