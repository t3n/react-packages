import React from 'react';
import styled from 'styled-components';
import { color, space, border, layout, display } from 'styled-system';

import { ThemeProps } from '@t3n/theme';
import { Box } from '../Box/Box';
import { Avatar } from '../Avatar/Avatar';
import { Placeholder } from '../Placeholder/Placeholder';
import { Text } from '../Text/Text';
import { Link } from '../Link/Link';

const StyledBox = styled(Box)`
  cursor: pointer;
  ${({ theme }) => space({ theme, p: 6, m: -6 })};

  &:hover > ul {
    display: block;
  }
`;

const UserMenuList = styled.ul`
  display: none;
  position: absolute;
  right: 38px;
  list-style-type: none;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  ${({ theme }) => color({ theme, bg: 'background.primary' })};
  ${({ theme }) => space({ theme, py: 1, px: 0, mt: [0, 2] })};
  ${({ theme }) => layout({ theme, width: ['100%', '210px'] })};
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 1,
      borderColor: 'shades.grey232',
      borderStyle: 'solid',
      borderRadius: '4px',
    })};

  &:before {
    top: -6px;
    right: 14px;
    left: auto;
    width: 10px;
    height: 10px;
    background: white;
    transform: rotate(45deg);
    position: absolute;
    display: block;
    content: '';

    ${({ theme }) =>
      border({
        theme,
        borderWidth: 0,
        borderColor: 'shades.grey232',
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderLeftWidth: 1,
      })};
  }

  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[0]}) {
    left: 0;
    right: 0;
    top: 100%;

    &:before {
      right: 28px;
    }
  }
`;

export const UserMenuListItem = styled.li`
  width: 100%;
  position: relative;
  ${({ theme }) => color({ theme, color: 'text.primary' })};

  &:hover {
    ${({ theme }) => color({ theme, bg: 'shades.grey244' })};
  }

  a {
    text-decoration: none;
    display: block;
  }

  > * {
    ${({ theme }) => color({ theme, color: 'text.primary' })};
    ${({ theme }) => space({ theme, py: [1, 2], px: 3, my: 0 })};
  }
`;

const UserMenuListItemText = styled.li`
  width: 100%;
  z-index: 1;
  position: relative;
  ${({ theme }) => space({ theme, py: [1, 2], px: 3 })};

  > a {
    ${({ theme }) => display({ theme, display: ['flex', 'block'] })}
    ${({ theme }) => color({ theme, color: 'text.primary' })};
    text-decoration: none;
    p {
      ${({ theme }) => space({ theme, ml: [1, 0] })};
    }
  }
`;

const UserMenuListDivider = styled.li`
  display: block;
  height: 0;
  ${({ theme }) => space({ theme, my: 2 })};

  ${({ theme }) =>
    border({
      theme,
      borderWidth: 0,
      borderColor: 'shades.grey232',
      borderStyle: 'solid',
      borderTopWidth: 1,
    })};
`;

const StyledLogoutLink = styled.a`
  ${({ theme }) => space({ theme, mb: 1 })};
`;

export interface UserMenuProps {
  loading: boolean;
  loggedIn: boolean;
  loginLink?: string;
  logoutLink?: string;

  user?: {
    name: string;
    nickName: string;
    avatarUrl: string;
  };

  itemGroups?: {
    item: (JSX.Element | string)[];
  }[];
}

export const UserMenu: React.FC<UserMenuProps> = ({
  user,
  itemGroups,
  loginLink = '/account/login',
  logoutLink = '/account/logout',
  loading,
  loggedIn,
}) => {
  return loggedIn ? (
    <StyledBox position={['unset', 'relative']}>
      {user && (
        <Avatar loading={loading} src={user.avatarUrl} alt={user.name} />
      )}

      <UserMenuList>
        <UserMenuListItemText>
          <a href="https://t3n.de/account">
            Angemeldet als
            {loading ? (
              <Placeholder height="21px" width="100%" />
            ) : (
              user && (
                <Text my={0} bold>
                  {user.name}
                </Text>
              )
            )}
          </a>
        </UserMenuListItemText>
        <UserMenuListDivider />

        {itemGroups &&
          itemGroups.map((group) => {
            return (
              <>
                {group.item.map((item) => {
                  return loading ? (
                    <Placeholder height="21px" mt={1} mx={2} />
                  ) : (
                    <UserMenuListItem>{item}</UserMenuListItem>
                  );
                })}
                <UserMenuListDivider />
              </>
            );
          })}

        {loading ? (
          <Placeholder height="21px" mt={1} mx={2} />
        ) : (
          <UserMenuListItem>
            <StyledLogoutLink href={logoutLink}>Abmelden</StyledLogoutLink>
          </UserMenuListItem>
        )}
      </UserMenuList>
    </StyledBox>
  ) : (
    <Link href={loginLink} variant="highlight">
      Anmelden
    </Link>
  );
};
