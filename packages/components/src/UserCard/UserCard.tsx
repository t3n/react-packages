import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';
import {
  SocialXing,
  SocialLinkedin,
  SocialTwitter,
  SocialGithub,
  SocialEmail,
} from '@t3n/icons';

import { Link } from '../Link';
import { Card } from '../Card';
import { Text } from '../Text';
import { Box } from '../Box';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Button } from '../Button';

const StyledCard = styled(Card)`
  position: relative;
  height: 100%;

  ${({ theme }: ThemeProps) => space({ pt: [4, 5], theme })};
`;

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const SocialButton = styled(Button)`
  border-radius: 50%;
  border: 0;
  background-color: ${({ theme }: ThemeProps) =>
    theme.colors.background.secondary};
  width: 32px;
  height: 32px;
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

const StyledDefaultBox = styled(Box)`
  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[0]}) {
    display: grid;
    justify-content: center;
    text-align: center;
  }
`;

const StyledCompactBox = styled(Box)`
  text-align: center;
`;

const StyledLink = styled(Link)`
  background-image: unset;

  &:hover,
  &:visited,
  &:focus {
    background-image: unset;
  }
`;

const SocialLinksBox = styled(Box)`
  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[0]}) {
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
    profileUrl?: string;
    socialLinks: SocialLink[];
  };
  compact: boolean;
  secondary?: boolean;
};

type SocialLinksProps = {
  links: SocialLink[];
};

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <SocialLinksBox mt={2} display="flex">
      {links.map((link) => (
        <SocialButton key={link.type} href={link.url} target="_blank">
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
    <StyledCompactBox display="flex" alignItems="center" flexDirection="column">
      {user.profileUrl ? (
        <a
          href={user.profileUrl}
          title="Pioneers-Profil"
          target="_blank"
          rel="noreferrer"
        >
          <Avatar src={user.avatarUrl} size={80} alt={user.name} />
        </a>
      ) : (
        <Avatar src={user.avatarUrl} size={80} alt={user.name} />
      )}
      {children}
    </StyledCompactBox>
  );
};

const DefaultUserCard: React.FC<Pick<UserCardProps, 'user'>> = ({
  user,
  children,
}) => {
  return (
    <Box display={['unset', 'flex']} m="0 auto">
      <Box display="flex" flexDirection="column" mr={[0, 3]}>
        <Box display="flex" justifyContent="center">
          {user.profileUrl ? (
            <a
              href={user.profileUrl}
              title="Pioneers-Profil"
              target="_blank"
              rel="noreferrer"
            >
              <Avatar src={user.avatarUrl} size={80} alt={user.name} />
            </a>
          ) : (
            <Avatar src={user.avatarUrl} size={80} alt={user.name} />
          )}
        </Box>
      </Box>
      <StyledDefaultBox>{children}</StyledDefaultBox>
    </Box>
  );
};

export const UserCard: React.FC<UserCardProps> = ({
  user,
  compact,
  secondary,
}) => {
  const content = (
    <>
      <Text bold mt={0} mb={0}>
        {user.profileUrl ? (
          <StyledLink
            href={user.profileUrl}
            title="Pioneers-Profil"
            target="_blank"
            rel="noreferrer"
          >
            {user.name}
          </StyledLink>
        ) : (
          user.name
        )}
      </Text>
      <Text mt={1} mb={1} secondary={!!secondary}>
        {user.position}
      </Text>
      {user.flag && (
        <StyledBadge small rounded variant="secondary">
          {user.flag}
        </StyledBadge>
      )}
      {user.email && (
        <StyledLink href={`mailto:${user.email}`}>
          <Text mt={2} mb={0} secondary={!!secondary}>
            {user.email}
          </Text>
        </StyledLink>
      )}
      {user.phone && (
        <StyledLink href={`tel:${user.phone}`}>
          <Text mt={1} mb={0} secondary={!!secondary}>
            {user.phone}
          </Text>
        </StyledLink>
      )}
      {user.socialLinks.length > 0 && <SocialLinks links={user.socialLinks} />}
    </>
  );

  return (
    <StyledCard>
      {compact ? (
        <CompactUserCard user={user}>{content}</CompactUserCard>
      ) : (
        <DefaultUserCard user={user}>{content}</DefaultUserCard>
      )}
    </StyledCard>
  );
};
