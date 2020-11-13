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

export interface LegacyHeroCardProps {
  type: string;
  sponsored?: boolean;
  title: string;
  teaser: string;
  url: string;
  imageUrl: string;
}

const StyledHeadline = styled(Heading)`
  ${({ theme }) => typography({ theme, fontSize: '2.65rem' })}
`;

const SponsoredInfo = styled(Text)`
  font-size: 0.75rem;
`;

const LegacyHeroTeaser = styled(Text)`
  ${({ theme }) => typography({ theme, fontSize: 2 })}
`;

export const LegacyLoadingHeroCard = () => (
  <LegacyCard>
    <Placeholder width="90%" height="3rem" mt={1} mb={2} />
    <Placeholder width={1 / 2} height="3rem" mt={1} mb={5} />
    <Box display="flex">
      <Box mr={3}>
        <Placeholder width="380px" height="215px" />
      </Box>
      <Box width={1}>
        <Placeholder height="1.5rem" mt={1} mb={2} />
        <Placeholder height="1.5rem" mt={1} mb={2} />
        <Placeholder height="1.5rem" mt={1} mb={2} />
        <Placeholder height="1.5rem" mt={1} mb={2} width={3 / 4} />
      </Box>
    </Box>
  </LegacyCard>
);

export const LegacyHeroCard = ({
  type,
  title,
  teaser,
  url,
  imageUrl,
  sponsored,
}: LegacyHeroCardProps) => (
  <LegacyCard>
    <a href={url}>
      {sponsored && (
        <SponsoredInfo as="span" secondary small>
          Anzeige
        </SponsoredInfo>
      )}
      <StyledHeadline as="h2" mt={0}>
        {title}
      </StyledHeadline>
    </a>
    <Box display="flex">
      <Box mr={3}>
        <a href={url}>
          <Image width="380px" height="215px" fit="crop" src={imageUrl} />
        </a>
      </Box>
      <Box>
        <a href={url}>
          <LegacyHeroTeaser mt={0} mb={0}>
            <strong>{type} </strong>
            {teaser}
          </LegacyHeroTeaser>
        </a>
        <ArticleSocialSharing url={url} title={title} />
      </Box>
    </Box>
  </LegacyCard>
);
