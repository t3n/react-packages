/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  border,
  layout,
  position,
  typography,
} from 'styled-system';
import { MaterialExpandMore } from '@t3n/icons';

import { Box } from '../Box/Box';
import { Avatar } from '../Avatar/Avatar';
import { Icon } from '../Icon';

const StyledAvatar = styled(Avatar)`
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 2,
      borderColor: 'shades.grey232',
      borderStyle: 'solid',
      borderRadius: '50%',
    })};
`;

const AvatarLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LegacyUserMenuList = styled.ul`
  right: 0;
  z-index: 1;
  list-style-type: none;
  ${({ theme }) => color({ theme, bg: 'background.primary' })};
  ${({ theme }) => space({ theme, m: '1px', py: 2, px: 3 })};
  ${({ theme }) => layout({ theme, width: ['97%', '165px'] })};
  ${({ theme }) =>
    position({
      theme,
      position: ['fixed', 'absolute'],
      left: [1, 'auto'],
      right: [1, 0],
    })};
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 2,
      borderColor: 'shades.grey232',
      borderStyle: 'solid',
    })};
`;

const LegacyUserMenuWrapper = styled(Box)`
  position: relative;
  cursor: pointer;
  ${({ theme }) => space({ theme, py: 2, pl: 6 })};

  > ${LegacyUserMenuList} {
    display: none;
  }

  &:hover > ${LegacyUserMenuList} {
    display: block;
  }
`;

export const LegacyUserMenuListItem = styled.li`
  width: 100%;
  line-height: 2;

  > * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    display: block;
    ${({ theme }) => color({ theme, color: 'text.secondary' })};
    ${({ theme }) => typography({ theme, fontSize: 0 })};
    ${({ theme }) => space({ theme, m: 0, p: 0 })};

    &:hover {
      ${({ theme }) => color({ theme, color: 'text.primary' })};
    }
  }
`;

const LegacyUserMenuListDivider = styled.li`
  display: block;
  height: 0;
  ${({ theme }) => space({ theme, my: 2 })};

  ${({ theme }) =>
    border({
      theme,
      borderWidth: 0,
      borderColor: 'shades.grey232',
      borderStyle: 'solid',
      borderTopWidth: 2,
    })};
`;

const LogoutLink = styled.a`
  ${({ theme }) => space({ theme, mb: 1 })};
`;

const LoginLink = styled.a`
  text-decoration: none;
  line-height: 44px;
  ${({ theme }) => space({ theme, px: 2 })};
  ${({ theme }) => typography({ theme, fontSize: 0 })};
  ${({ theme }) => color({ theme, color: 'text.secondary' })};

  &:hover {
    ${({ theme }) => color({ theme, color: 'text.primary' })};
  }
`;

export interface LegacyUserMenuProps {
  loading: boolean;
  loginUrl?: string;
  logoutUrl?: string;
  labelUrl?: string;

  user?: {
    name: string;
    avatarUrl: string;
  };

  itemGroups?: {
    item: (JSX.Element | string)[];
  }[];
}

export const LegacyUserMenu: React.FC<LegacyUserMenuProps> = ({
  user,
  itemGroups,
  loginUrl = '/account/login',
  logoutUrl = '/account/logout',
  labelUrl,
  loading,
}) => {
  if (!user) {
    return <LoginLink href={loginUrl}>Anmelden</LoginLink>;
  }

  return (
    <LegacyUserMenuWrapper>
      <AvatarLink href={labelUrl}>
        <StyledAvatar
          loading={loading}
          src={user.avatarUrl}
          alt={user.name}
          size={28}
        />
        {!loading && (
          <Icon
            component={MaterialExpandMore}
            width="25px"
            height="20px"
            mt={1}
            ml={-2}
            fill="text.secondary"
          />
        )}
      </AvatarLink>

      {!loading && (
        <LegacyUserMenuList>
          {itemGroups &&
            itemGroups.map((group, idx) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <React.Fragment key={idx}>
                  {group.item.map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <LegacyUserMenuListItem key={index}>
                      {item}
                    </LegacyUserMenuListItem>
                  ))}
                  <LegacyUserMenuListDivider />
                </React.Fragment>
              );
            })}
          <LegacyUserMenuListItem>
            <LogoutLink href={logoutUrl}>Abmelden</LogoutLink>
          </LegacyUserMenuListItem>
        </LegacyUserMenuList>
      )}
    </LegacyUserMenuWrapper>
  );
};
