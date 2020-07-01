import React, { useState } from 'react';
import styled from 'styled-components';
import { color, space, border, layout } from 'styled-system';

import { composeTextStyle, ThemeProps } from '@t3n/theme';
import { Box, Avatar, Placeholder, Text, Link } from '..';

const StyledBox = styled(Box)`
  cursor: pointer;
`;

const AvatarPlaceholder = styled(Placeholder)`
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 2,
      borderColor: 'shades.white',
      borderStyle: 'solid',
      borderRadius: '50%',
    })};
`;

const UserMenuList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  list-style-type: none;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  ${({ theme }) => composeTextStyle({ theme, textStyle: 'small' })};
  ${({ theme }) => color({ theme, bg: 'background.primary' })};
  ${({ theme }) => space({ theme, py: 1, px: 0, mt: [0, 2] })};
  ${({ theme }) => layout({ theme, width: ['100%', '160px'] })};
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
    ${({ theme }) => composeTextStyle({ theme, textStyle: 'regular' })};

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
    ${({ theme }) => composeTextStyle({ theme, textStyle: 'small' })};
    ${({ theme }) => color({ theme, color: 'text.primary' })};
    ${({ theme }) => space({ theme, py: 1, px: 2, my: 0 })};
  }

  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[0]}) {
    > * {
      ${({ theme }) => composeTextStyle({ theme, textStyle: 'regular' })};
    }
  }
`;

const UserMenuListItemText = styled.li`
  width: 100%;
  z-index: 1;
  position: relative;
  ${({ theme }) => color({ theme, color: 'text.primary' })};
  ${({ theme }) => space({ theme, py: 1, px: 2 })};

  strong {
    display: block;
    ${({ theme }) => space({ theme, mt: 1 })};
  }

  > p {
    ${({ theme }) => composeTextStyle({ theme, textStyle: 'small' })};

    @media screen and (max-width: ${(props: ThemeProps) =>
        props.theme.breakpoints[0]}) {
      ${({ theme }) => composeTextStyle({ theme, textStyle: 'regular' })};
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [closeTimeoutRef, setCloseTimeoutRef] = useState<number | null>(null);

  const handleMouseEnter = () => {
    setDropdownOpen(true);

    if (closeTimeoutRef !== null) {
      clearTimeout(closeTimeoutRef);
      setCloseTimeoutRef(null);
    }
  };

  const handleMouseLeave = () => {
    const timeoutRef = setTimeout(() => setDropdownOpen(false), 300);
    setCloseTimeoutRef(timeoutRef);
  };

  return loggedIn ? (
    <StyledBox
      position={['unset', 'relative']}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {loading ? (
        <AvatarPlaceholder height="40px" width="40px" />
      ) : (
        user && <Avatar src={user.avatarUrl} alt={user.name} />
      )}

      {dropdownOpen && (
        <UserMenuList>
          <UserMenuListItemText>
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
      )}
    </StyledBox>
  ) : (
    <Link href={loginLink} variant="highlight">
      Anmelden
    </Link>
  );
};
