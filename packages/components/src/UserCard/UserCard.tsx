import React from 'react';
import styled from 'styled-components';
import { ThemeProps } from '@t3n/theme';
import {
  SocialXing,
  SocialLinkedin,
  SocialTwitter,
  SocialGithub,
  SocialEmail,
} from '@t3n/icons';
import { Card } from '../Card';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Box } from '../Box';
import { Avatar } from '../Avatar';
import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import { Badge } from '../Badge';
import { Button } from '../Button';

const StyledCard = styled(Card)`
  position: relative;
  height: 100%;
`;

const StyledCompactBadge = styled(Badge)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const StyledDefaultBadge = styled(Badge)`
  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[1]}) {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

const SocialButton = styled(Button)`
  border-radius: 50%;
  border: 0;
  background-color: ${({ theme }: ThemeProps) =>
    theme.colors.background.secondary};
  width: 24px;
  height: 24px;
  align-items: center;
  margin: 0 0.5rem 0 0;
  padding: 5px;

  &:hover:not(:disabled) {
    transform: scale(1);
    background-color: ${({ theme }: ThemeProps) =>
      theme.colors.background.inverse};
  }

  &:hover > svg {
    fill: #fff;
  }
`;

const StyledGridItem = styled(GridItem)`
  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[1]}) {
    display: grid;
    justify-content: center;
    text-align: center;
  }
`;

const SocialLinksBox = styled(Box)`
  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[1]}) {
    justify-content: center;
  }
`;

export type SocialLinkType =
  | 'TWITTER'
  | 'GITHUB'
  | 'XING'
  | 'HOMEPAGE'
  | 'LINKEDIN';

type SocialLink = { url: string; type: SocialLinkType };

export type UserCardProps = {
  user: {
    id: number;
    name: string;
    avatarUrl: string;
    email?: string;
    position?: string;
    flag?: string;
    phone?: string;
    profileUrl: string;
    socialLinks: SocialLink[];
  };
  compact: boolean;
};

type SocialLinksProps = {
  links: SocialLink[];
};

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <SocialLinksBox mt={2} display="flex">
      {links.map((link) => (
        <SocialButton key={link.type} href={link.url}>
          {link.type === 'XING' ? (
            <SocialXing fill="#9b9b9b" />
          ) : link.type === 'LINKEDIN' ? (
            <SocialLinkedin fill="#9b9b9b" />
          ) : link.type === 'TWITTER' ? (
            <SocialTwitter fill="#9b9b9b" />
          ) : link.type === 'GITHUB' ? (
            <SocialGithub fill="#9b9b9b" />
          ) : (
            <SocialEmail fill="#9b9b9b" />
          )}
        </SocialButton>
      ))}
    </SocialLinksBox>
  );
};

const CompactUserCard: React.FC<Pick<UserCardProps, 'user'>> = ({
  user,
  children,
}) => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Avatar src={user.avatarUrl} size={80} alt={user.name} />
      {children}
    </Box>
  );
};

const DefaultUserCard: React.FC<Pick<UserCardProps, 'user'>> = ({
  user,
  children,
}) => {
  return (
    <Grid>
      <GridItem width={[1, 1, 2 / 5, 2 / 5]} mb={0}>
        <Box display="flex" justifyContent="center">
          <Avatar src={user.avatarUrl} size={80} alt={user.name} />
        </Box>
        <Box display="flex" justifyContent="center">
          {user.flag && (
            <StyledDefaultBadge small rounded variant="inverse">
              {user.flag}
            </StyledDefaultBadge>
          )}
        </Box>
      </GridItem>
      <StyledGridItem width={[1, 1, 3 / 5, 3 / 5]}>{children}</StyledGridItem>
    </Grid>
  );
};

export const UserCard: React.FC<UserCardProps> = ({ user, compact }) => {
  const content = (
    <>
      <Heading styleAs="h6" as="h6" mt={0} mb={0}>
        {user.name}
      </Heading>
      <Text small mt={1} mb={1}>
        {user.position}
      </Text>
      {user.flag && compact && (
        <StyledCompactBadge small rounded variant="inverse">
          {user.flag}
        </StyledCompactBadge>
      )}
      {user.email && (
        <Text small mt={1} mb={0}>
          {user.email}
        </Text>
      )}
      {user.phone && (
        <Text small mt={1}>
          {user.phone}
        </Text>
      )}
      {user.socialLinks.length > 0 && <SocialLinks links={user.socialLinks} />}
    </>
  );

  return (
    <StyledCard href={user.profileUrl}>
      {compact ? (
        <CompactUserCard user={user}>{content}</CompactUserCard>
      ) : (
        <DefaultUserCard user={user}>{content}</DefaultUserCard>
      )}
    </StyledCard>
  );
};
