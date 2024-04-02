import React from 'react';
import styled from 'styled-components';
import { border, color, space, typography } from 'styled-system';

import { T3nPro } from '@t3n/icons';

import Box from '../Box';
import Heading from '../Heading';
import Text from '../Text';

export interface LegacyNewsCardHeadlineProps {
  type: string;
  title: string;
  sponsored?: boolean;
  pro?: boolean;
  tr?: boolean;
}

const NewsType = styled.span`
  text-transform: uppercase;
  ${({ theme }) =>
    typography({
      theme,
      fontWeight: 'bold',
      fontSize: '0.75rem',
      lineHeight: 1.5,
    })};
  ${({ theme }) => space({ theme, mr: 2, mb: 1 })};
`;

const SponsoredInfo = styled(Text)`
  font-size: 0.75rem;
  line-height: 0.75rem;
  text-transform: uppercase;
  ${({ theme }) => space({ theme, p: '2px 4px', mr: 2, mb: 1 })};
  ${({ theme }) =>
    color({
      theme,
      color: 'text.primary',
      backgroundColor: 'shades.grey232',
    })};
  ${({ theme }) => border({ theme, borderRadius: '4px' })};
`;

const TRBadge = styled.span`
  ${({ theme }) =>
    typography({
      theme,
      fontSize: '0.75rem',
      fontWeight: 'bold',
      lineHeight: 1.5,
    })};
  ${({ theme }) =>
    border({
      theme,
      borderRadius: '2px',
      borderColor: 'text.primary',
      borderWidth: '1px',
      borderStyle: 'solid',
    })};
  ${({ theme }) =>
    color({
      theme,
      backgroundColor: 'background.primary',
      color: 'text.primary',
    })};
  ${({ theme }) => space({ theme, px: 1, mr: 2, mb: 1 })};
`;

const LegacyNewsCardHeadline: React.FC<LegacyNewsCardHeadlineProps> = ({
  type,
  title,
  sponsored,
  pro,
  tr,
}) => {
  return (
    <>
      <Box display="flex" flexWrap="wrap" alignItems="center" mb={1}>
        <NewsType>{type}</NewsType>
        {tr && <TRBadge>MIT Technology Review</TRBadge>}
        {sponsored && (
          <SponsoredInfo as="span" secondary small>
            Anzeige
          </SponsoredInfo>
        )}
        {pro && (
          <Box display="flex" mb={1}>
            <T3nPro height="18" width="36" />
          </Box>
        )}
      </Box>
      <Heading as="h3" styleAs="h5" my={0}>
        {title}
      </Heading>
    </>
  );
};

export default LegacyNewsCardHeadline;
