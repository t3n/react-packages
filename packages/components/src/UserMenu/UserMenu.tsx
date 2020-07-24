import React from 'react';
import styled from 'styled-components';
import { color, space, border, layout, position } from 'styled-system';

import { ThemeProps } from '@t3n/theme';
import { Box } from '../Box/Box';
import { Avatar } from '../Avatar/Avatar';
import { Placeholder } from '../Placeholder/Placeholder';
import { Text } from '../Text/Text';
import { Link } from '../Link/Link';

const UserMenuWrapper = styled(Box)`
  cursor: pointer;
  position: relative;
  ${({ theme }) => space({ theme, py: 2, pl: 6 })};

  &:hover > ul {
    display: block;
  }

  &:hover {
    &:after {
      top: 51px;
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
  }
`;

const UserMenuList = styled.ul`
  display: none;
  right: 0;
  list-style-type: none;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  ${({ theme }) => color({ theme, bg: 'background.primary' })};
  ${({ theme }) => position({ theme, position: ['fixed', 'absolute'] })};
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

  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[0]}) {
    left: 0;
    right: 0;
    top: 56px;
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
    ${({ theme }) => space({ theme, py: 2, px: 3, my: 0 })};
  }
`;

const UserMenuListItemText = styled.li`
  width: 100%;
  z-index: 1;
  position: relative;
  ${({ theme }) => space({ theme, py: 2, px: 3 })};
  ${({ theme }) => color({ theme, color: 'text.primary' })};

  > a {
    ${({ theme }) => color({ theme, color: 'text.primary' })};
    text-decoration: none;
    align-items: center;
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

const StyledUserLabel = styled(Text)`
  ${({ theme }) => layout({ theme, width: ['auto', '176px'] })}
  overflow: hidden;
  text-overflow: ellipsis;
`;

export interface UserMenuProps {
  loading: boolean;
  loggedIn: boolean;
  loginLink?: string;
  logoutLink?: string;
  labelLink?: string;

  user?: {
    label: string;
    name: string;
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
  labelLink,
  loading,
  loggedIn,
}) => {
  const UserLabel = () => (
    <>
      <Text my={0}>Angemeldet als</Text>
      {loading ? (
        <Placeholder height="21px" width="100%" />
      ) : (
        user && (
          <StyledUserLabel my={0} bold>
            {user.label}
          </StyledUserLabel>
        )
      )}
    </>
  );

  return loggedIn ? (
    <UserMenuWrapper>
      {user && (
        <Avatar loading={loading} src={user.avatarUrl} alt={user.name} />
      )}

      <UserMenuList>
        <UserMenuListItemText>
          {labelLink ? (
            <a href={labelLink}>
              <UserLabel />
            </a>
          ) : (
            <UserLabel />
          )}
        </UserMenuListItemText>
        <UserMenuListDivider />

        {itemGroups &&
          itemGroups.map((group) => {
            return (
              <>
                {group.item.map((item) => {
                  return loading ? (
                    <Placeholder height="21px" my={[1, 2]} mx={3} />
                  ) : (
                    <UserMenuListItem>{item}</UserMenuListItem>
                  );
                })}
                <UserMenuListDivider />
              </>
            );
          })}

        {loading ? (
          <Placeholder height="21px" my={[1, 2]} mx={3} />
        ) : (
          <UserMenuListItem>
            <StyledLogoutLink href={logoutLink}>Abmelden</StyledLogoutLink>
          </UserMenuListItem>
        )}
      </UserMenuList>
    </UserMenuWrapper>
  ) : (
    <Link href={loginLink} variant="highlight">
      Anmelden
    </Link>
  );
};
