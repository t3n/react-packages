import React from 'react';
import styled from 'styled-components';

import { typography } from 'styled-system';
import { Placeholder } from '../Placeholder';
import { Box } from '../Box';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Image } from '../Image';
import { ArticleSocialSharing } from '../LegacyArticleSocialShare';
import { LegacyCard } from '../LegacyCard';

export interface LegacyFeedCardProps {
  type: string;
  mostRead?: boolean;
  sponsored?: boolean;
  title: string;
  teaser: string;
  url: string;
  imageUrl: string;
}

const StyledHeadline = styled(Heading)`
  ${({ theme }) => typography({ theme, fontSize: 3 })}
`;

const SponsoredInfo = styled(Text)`
  font-size: 0.75rem;
`;

export const LegacyLoadingFeedCard = () => (
  <LegacyCard>
    <Box display="flex">
      <Box mr={3}>
        <Placeholder height="120px" width="200px" />
      </Box>
      <Box width={1}>
        <Placeholder height="1.5rem" mt={1} mb={4} width="90%" />
        <Placeholder height="0.875rem" mt={1} mb={1} />
        <Placeholder height="0.875rem" mt={1} mb={1} width="95%" />
        <Placeholder height="0.875rem" mt={1} mb={1} />
        <Placeholder height="0.875rem" mt={1} width={3 / 4} />
      </Box>
    </Box>
  </LegacyCard>
);

export const LegacyFeedCard = ({
  type,
  mostRead,
  sponsored,
  title,
  teaser,
  url,
  imageUrl,
}: LegacyFeedCardProps) => (
  <LegacyCard>
    <Box display="flex">
      <Box mr={3}>
        <a href={url}>
          <Image width="200px" height="120px" src={imageUrl} />
        </a>
      </Box>
      <Box>
        <a href={url}>
          {sponsored && (
            <SponsoredInfo as="span" secondary small>
              Anzeige
            </SponsoredInfo>
          )}
          <StyledHeadline as="h3" mt={0}>
            {title}
          </StyledHeadline>
          <Text small mb={0}>
            <strong>{type} </strong>
            {teaser}
          </Text>
        </a>
        {mostRead && (
          <Text italic small secondary mb={0} mt={2}>
            Dieser Artikel hat besonders viele Leser interessiert
          </Text>
        )}
        <ArticleSocialSharing url={url} title={title} />
      </Box>
    </Box>
  </LegacyCard>
);
