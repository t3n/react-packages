/* eslint-disable no-nested-ternary */
import React, { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { space } from 'styled-system';

import {
  SocialEmail,
  SocialGithub,
  SocialLinkedin,
  SocialTwitter,
  SocialXing,
} from '@t3n/icons';

import Avatar from '../Avatar';
import Badge from '../Badge';
import Box from '../Box';
import Button from '../Button';
import Card from '../Card';
import Link from '../Link';
import Text from '../Text';

export type SocialLinkType =
  | 'TWITTER'
  | 'GITHUB'
  | 'XING'
  | 'HOMEPAGE'
  | 'LINKEDIN';

export interface SocialLink {
  url: string;
  type: SocialLinkType;
}

export interface UserCardProps extends PropsWithChildren {
  user: {
    id: number;
    name: string;
    avatarUrl: string;
    email?: string;
    position?: string;
    flag?: string;
    phone?: string;
    socialLinks: SocialLink[];
  };
  optimizeAvatar?: boolean;
  link?: {
    fullCard?: boolean;
    url?: string;
    target?: string;
    title?: string;
  };
  compact: boolean;
  secondary?: boolean;
}

const StyledCard = styled(Card)`
  position: relative;
  height: 100%;

  ${({ theme }) => space({ pt: [4, 5], theme })};
`;

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const SocialButton = styled(Button)`
  border-radius: 50%;
  border: 0;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  width: 32px;
  height: 32px;
  align-items: center;
  margin: 0 0.5rem 0 0;
  padding: 5px;

  &:hover:not(:disabled) {
    transform: scale(1);
    background-color: ${({ theme }) => theme.colors.background.inverse};
  }

  &:hover > svg {
    fill: #fff;
  }
`;

const StyledDefaultBox = styled(Box)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
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
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    justify-content: center;
  }
`;

const SocialLinks = ({ links }: { links: SocialLink[] }) => {
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

const CompactUserCard = ({
  user,
  link,
  optimizeAvatar,
  children,
}: Pick<UserCardProps, 'user' | 'link' | 'optimizeAvatar' | 'children'>) => {
  return (
    <StyledCompactBox display="flex" alignItems="center" flexDirection="column">
      {!link?.fullCard && link?.url ? (
        <a
          href={link.url}
          title={link.title ?? user.name}
          target={link.target ?? '_blank'}
          rel="noreferrer"
        >
          <Avatar
            optimizeSrc={optimizeAvatar}
            src={user.avatarUrl}
            size={80}
            alt={user.name}
          />
        </a>
      ) : (
        <Avatar
          optimizeSrc={optimizeAvatar}
          src={user.avatarUrl}
          size={80}
          alt={user.name}
        />
      )}
      {children}
    </StyledCompactBox>
  );
};

const DefaultUserCard = ({
  user,
  link,
  optimizeAvatar,
  children,
}: Pick<UserCardProps, 'user' | 'link' | 'optimizeAvatar' | 'children'>) => {
  return (
    <Box display={['unset', 'flex']} m="0 auto">
      <Box display="flex" flexDirection="column" mr={[0, 3]}>
        <Box display="flex" justifyContent="center">
          {!link?.fullCard && link?.url ? (
            <a
              href={link.url}
              title={link.title ?? user.name}
              target={link.target ?? '_blank'}
              rel="noreferrer"
            >
              <Avatar
                optimizeSrc={optimizeAvatar}
                src={user.avatarUrl}
                size={80}
                alt={user.name}
              />
            </a>
          ) : (
            <Avatar
              optimizeSrc={optimizeAvatar}
              src={user.avatarUrl}
              size={80}
              alt={user.name}
            />
          )}
        </Box>
      </Box>
      <StyledDefaultBox>{children}</StyledDefaultBox>
    </Box>
  );
};

const UserCardContent = ({
  user,
  link,
  secondary,
}: Pick<UserCardProps, 'user' | 'link' | 'secondary'>) => {
  return (
    <>
      <Text bold mt={0} mb={0}>
        {!link?.fullCard && link?.url ? (
          <StyledLink
            href={link.url}
            title={link.title ?? user.name}
            target={link.target ?? '_blank'}
            rel="noreferrer"
          >
            {user.name}
          </StyledLink>
        ) : (
          user.name
        )}
      </Text>
      {user.position && (
        <Text mt={1} mb={1} secondary={!!secondary}>
          {user.position}
        </Text>
      )}
      {user.flag && <StyledBadge variant="light">{user.flag}</StyledBadge>}
      {!link?.fullCard && user.email ? (
        <StyledLink
          href={
            link?.url && link?.fullCard ? undefined : `mailto:${user.email}`
          }
        >
          <Text mt={2} mb={0} secondary={!!secondary}>
            {user.email}
          </Text>
        </StyledLink>
      ) : (
        user.email && (
          <Text mt={2} mb={0} secondary={!!secondary}>
            {user.email}
          </Text>
        )
      )}
      {!link?.fullCard && user.phone ? (
        <StyledLink
          href={link?.url && link?.fullCard ? undefined : `tel:${user.phone}`}
        >
          <Text mt={1} mb={0} secondary={!!secondary}>
            {user.phone}
          </Text>
        </StyledLink>
      ) : (
        user.phone && (
          <Text mt={1} mb={0} secondary={!!secondary}>
            {user.phone}
          </Text>
        )
      )}
      {!link?.fullCard && user.socialLinks.length > 0 && (
        <SocialLinks links={user.socialLinks} />
      )}
    </>
  );
};

const UserCard = ({
  user,
  optimizeAvatar,
  link,
  compact,
  secondary,
  children,
}: UserCardProps) => {
  return (
    <StyledCard href={link?.fullCard && link?.url ? link.url : undefined}>
      {compact ? (
        <CompactUserCard
          user={user}
          link={link}
          optimizeAvatar={optimizeAvatar}
        >
          <UserCardContent user={user} link={link} secondary={secondary} />
          {children}
        </CompactUserCard>
      ) : (
        <DefaultUserCard
          user={user}
          link={link}
          optimizeAvatar={optimizeAvatar}
        >
          <UserCardContent user={user} link={link} secondary={secondary} />
          {children}
        </DefaultUserCard>
      )}
    </StyledCard>
  );
};

export default UserCard;
