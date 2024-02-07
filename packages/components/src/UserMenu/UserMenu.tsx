import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { border, color, layout, position, space } from 'styled-system';

import { T3nPro } from '@t3n/icons';
import BookmarkBorder from '@t3n/icons/src/components/material/action/BookmarkBorder';
import Person from '@t3n/icons/src/components/material/social/Person';
import PersonOutline from '@t3n/icons/src/components/material/social/PersonOutline';
import { ThemeProps } from '@t3n/theme';

import Box from '../Box/Box';

export interface UserMenuProps {
  userEmail?: string;
  loginLink?: string;
  logoutLink?: string;
  proMembershipLink?: string;
  readingListLink?: string;
  accountLink?: string;
  isProMember?: boolean;
  light?: boolean;
  userMenuItems?: ReactNode[];
}

const UserMenuWrapper = styled(Box)<{ light?: boolean }>`
  position: relative;
  z-index: 1000;
  ${({ theme }) => space({ theme, py: 2, pr: '10px' })};

  > svg {
    cursor: pointer;
  }

  &:hover > ul {
    display: block;
  }

  &:hover {
    &:after {
      top: 35px;
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

      @media screen and (max-width: ${(props: ThemeProps) =>
          props.theme.breakpoints[0]}) {
        top: 42px;
      }
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
  ${({ theme }) => color({ theme, color: 'shades.grey95' })};

  &:hover {
    ${({ theme }) => color({ theme, bg: 'shades.grey244' })};
  }

  > * {
    ${({ theme }) => color({ theme, color: 'shades.grey95' })};
    ${({ theme }) => space({ theme, py: 2, px: 3, my: 0 })};
  }

  > a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

const UserMenuListItemText = styled.li`
  width: 100%;
  z-index: 1;
  position: relative;
  ${({ theme }) => space({ theme, py: 2, px: 3 })};
  ${({ theme }) => color({ theme, color: 'shades.grey95' })};

  > a {
    ${({ theme }) => color({ theme, color: 'shades.grey95' })};
    text-decoration: none;
    align-items: center;
  }
`;

const UserMenuListDivider = styled.li`
  display: block;
  height: 0;

  ${({ theme }) =>
    border({
      theme,
      borderWidth: 0,
      borderColor: 'shades.grey232',
      borderStyle: 'solid',
      borderTopWidth: 1,
    })};
`;

const LoginIcon = styled.a<{ light?: boolean }>`
  position: relative;
  ${({ theme }) => space({ theme, py: 2, pr: '10px' })};

  &:hover,
  &:focus {
    > svg {
      fill: #2a2a2a;
      position: relative;
      z-index: 1;
    }

    &:after {
      position: absolute;
      display: block;
      content: '';
      width: 26px;
      height: 26px;
      top: 5px;
      right: 6px;

      ${({ theme }) =>
        border({
          theme,
          borderWidth: 1,
          borderStyle: 'solid',
          borderRadius: '50%',
        })};
    }
  }

  ${({ light }) =>
    light
      ? css`
          &:hover,
          &:focus {
            &:after {
              ${({ theme }) =>
                color({
                  theme,
                  bg: 'background.secondary',
                })}
              ${({ theme }) =>
                border({
                  theme,
                  borderColor: 'background.secondary',
                })};
            }
          }
        `
      : css`
          &:hover,
          &:focus {
            &:after {
              ${({ theme }) =>
                color({
                  theme,
                  bg: 'background.primary',
                })}
              ${({ theme }) =>
                border({
                  theme,
                  borderColor: 'background.primary',
                })};
            }
          }
        `}
`;

const StyledText = styled.p`
  ${({ theme }) => space({ theme, my: 0 })};
`;

const StyledUserLabel = styled.p`
  ${({ theme }) => layout({ theme, width: ['auto', '176px'] })}
  ${({ theme }) => space({ theme, mt: 1, mb: 0 })};
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserMenu: React.FC<UserMenuProps> = ({
  userEmail,
  isProMember = false,
  userMenuItems,
  loginLink = '/account/login',
  logoutLink = '/account/logout',
  proMembershipLink = '/account/pro',
  readingListLink = '/account/merkliste',
  accountLink = '/account/',
  light,
}) => {
  return userEmail ? (
    <UserMenuWrapper light={light}>
      <Person fill={light ? '#5f5f5f' : '#ffffff'} width="20" height="20" />
      <UserMenuList>
        <UserMenuListItemText>
          <StyledText>Hallo</StyledText>
          <StyledUserLabel>{userEmail}</StyledUserLabel>
        </UserMenuListItemText>
        {isProMember && (
          <>
            <UserMenuListDivider />
            <UserMenuListItem>
              <a href={proMembershipLink}>
                <T3nPro width="36px" style={{ marginRight: 6 }} />
                Pro-Membership
              </a>
            </UserMenuListItem>
          </>
        )}
        <UserMenuListDivider />
        <UserMenuListItem>
          <a href={readingListLink}>
            <BookmarkBorder
              fill="#5f5f5f"
              width="20"
              height="20"
              style={{ marginRight: 4 }}
            />
            Merkliste
          </a>
        </UserMenuListItem>
        <UserMenuListDivider />
        <UserMenuListItem>
          <a href={accountLink}>
            <PersonOutline
              fill="#5f5f5f"
              width="20"
              height="20"
              style={{ marginRight: 4 }}
            />
            Konto
          </a>
        </UserMenuListItem>
        <UserMenuListDivider />

        {!!userMenuItems?.length &&
          userMenuItems.map((item, idx) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={idx}>
                <UserMenuListItem>{item}</UserMenuListItem>
                <UserMenuListDivider />
              </React.Fragment>
            );
          })}

        <UserMenuListItem>
          <a href={logoutLink}>Abmelden</a>
        </UserMenuListItem>
      </UserMenuList>
    </UserMenuWrapper>
  ) : (
    <LoginIcon href={loginLink} light={light}>
      <PersonOutline
        fill={light ? '#5f5f5f' : '#ffffff'}
        width="20"
        height="20"
      />
    </LoginIcon>
  );
};

export default UserMenu;
