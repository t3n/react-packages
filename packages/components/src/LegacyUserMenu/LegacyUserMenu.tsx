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

import { ThemeProps } from '@t3n/theme';

import { MaterialExpandMore } from '@t3n/icons';
import { Box } from '../Box/Box';
import { Avatar } from '../Avatar/Avatar';
import { Placeholder } from '../Placeholder/Placeholder';
import { Icon } from '../Icon';

const LegacyUserMenuWrapper = styled(Box)`
  cursor: pointer;
  position: relative;
  ${({ theme }) => space({ theme, py: 2, pl: 6 })};

  &:hover > ul {
    display: block;
  }
`;

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
  display: none;
  right: 0;
  z-index: 1;
  list-style-type: none;
  ${({ theme }) => color({ theme, bg: 'background.primary' })};
  ${({ theme }) => position({ theme, position: ['fixed', 'absolute'] })};
  ${({ theme }) => space({ theme, m: '1px', py: 2, px: 3 })};
  ${({ theme }) => layout({ theme, width: ['97%', '165px'] })};
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 2,
      borderColor: 'shades.grey232',
      borderStyle: 'solid',
    })};

  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[0]}) {
    left: 4px;
    right: 4px;
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
  loggedIn: boolean;
  loginLink?: string;
  logoutLink?: string;
  labelLink?: string;

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
  loginLink = '/account/login',
  logoutLink = '/account/logout',
  labelLink,
  loading,
  loggedIn,
}) => {
  return loggedIn ? (
    <LegacyUserMenuWrapper>
      {user && (
        <AvatarLink href={labelLink}>
          <StyledAvatar
            loading={loading}
            src={user.avatarUrl}
            alt={user.name}
            size={28}
          />
          <Icon
            component={MaterialExpandMore}
            width="25px"
            height="20px"
            mt={1}
            ml={-2}
            fill="text.secondary"
          />
        </AvatarLink>
      )}

      <LegacyUserMenuList>
        {itemGroups &&
          itemGroups.map((group, idx) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={idx}>
                {group.item.map((item, index) => {
                  return loading ? (
                    <Placeholder
                      // eslint-disable-next-line react/no-array-index-key
                      key={`placeholder-${index}`}
                      height="21px"
                      my={[1, 2]}
                    />
                  ) : (
                    // eslint-disable-next-line react/no-array-index-key
                    <LegacyUserMenuListItem key={index}>
                      {item}
                    </LegacyUserMenuListItem>
                  );
                })}
                <LegacyUserMenuListDivider />
              </React.Fragment>
            );
          })}

        {loading ? (
          <Placeholder height="21px" my={[1, 2]} />
        ) : (
          <LegacyUserMenuListItem>
            <LogoutLink href={logoutLink}>Abmelden</LogoutLink>
          </LegacyUserMenuListItem>
        )}
      </LegacyUserMenuList>
    </LegacyUserMenuWrapper>
  ) : (
    <LoginLink href={loginLink}>Anmelden</LoginLink>
  );
};
