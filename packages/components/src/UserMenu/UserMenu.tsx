import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  border,
  color,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

import {
  MaterialBookmarkBorder,
  MaterialPerson,
  MaterialPersonOutline,
  T3nPlus,
  T3nPro,
} from '@t3n/icons';
import { ThemeProps } from '@t3n/theme';

import Box from '../Box/Box';

export interface UserMenuProps {
  active?: boolean;
  userEmail?: string;
  loginLink?: string;
  logoutLink?: string;
  aboLink?: string;
  readingListLink?: string;
  accountLink?: string;
  isPlusUser?: boolean;
  isProMember?: boolean;
  light?: boolean;
  items?: ReactNode[];
}

const UserMenuWrapper = styled(Box)<{ light?: boolean }>`
  position: relative;
  z-index: 1000;
  ${({ theme }) => typography({ theme, fontSize: 0 })};

  &:focus > ul,
  &:focus-within > ul,
  &:hover > ul {
    display: block;
  }

  &:hover,
  &:focus,
  &:focus-within {
    cursor: pointer;

    &:after {
      top: 38px;
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
        top: 44px;
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
  ${({ theme }) => space({ theme, py: 0, px: 0, mt: [0, '3px'] })};
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
    ${({ theme }) => space({ theme, p: 2, my: 0 })};
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
  cursor: default;

  ${({ theme }) => space({ theme, p: 2 })};
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

const LoginIcon = styled.a`
  position: relative;
`;

const PersonIconWrapper = styled.div<{ light?: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

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
      width: 40px;
      height: 40px;
      top: 0;
      right: 0;

      ${({ theme }) =>
        border({
          theme,
          borderRadius: '50%',
        })};
      ${({ theme, light }) =>
        color({
          theme,
          bg: light ? 'background.secondary' : 'background.primary',
        })}
      ${({ theme, light }) =>
        border({
          theme,
          borderColor: light ? 'background.secondary' : 'background.primary',
        })};
    }
  }
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
  active = false,
  userEmail,
  isProMember = false,
  items,
  loginLink = '/account/login',
  logoutLink = '/account/logout',
  isPlusUser = false,
  aboLink = '/account',
  readingListLink = '/account/merkliste',
  accountLink = '/account/edit',
  light,
}) => {
  return userEmail ? (
    <UserMenuWrapper light={light} tabIndex={0}>
      {active ? (
        <PersonIconWrapper light={light}>
          <MaterialPerson
            fill={light ? '#5f5f5f' : '#ffffff'}
            width="24"
            height="24"
          />
        </PersonIconWrapper>
      ) : (
        <PersonIconWrapper light={light}>
          <MaterialPersonOutline
            fill={light ? '#5f5f5f' : '#ffffff'}
            width="24"
            height="24"
          />
        </PersonIconWrapper>
      )}
      <UserMenuList>
        <UserMenuListItemText>
          <StyledText>Hallo</StyledText>
          <StyledUserLabel>{userEmail}</StyledUserLabel>
        </UserMenuListItemText>
        {isPlusUser && (
          <>
            <UserMenuListDivider />
            <UserMenuListItem>
              <a href={aboLink}>
                <T3nPlus
                  width="22px"
                  height="18px"
                  style={{ marginRight: 8 }}
                />
                Plus
              </a>
            </UserMenuListItem>
          </>
        )}
        {isProMember && (
          <>
            <UserMenuListDivider />
            <UserMenuListItem>
              <a href={aboLink}>
                <T3nPro width="36px" height="18px" style={{ marginRight: 8 }} />
                Pro-Membership
              </a>
            </UserMenuListItem>
          </>
        )}
        <UserMenuListDivider />
        <UserMenuListItem>
          <a href={readingListLink}>
            <MaterialBookmarkBorder
              fill="#5f5f5f"
              width="24"
              height="24"
              style={{ marginRight: 4 }}
            />
            Merkliste
          </a>
        </UserMenuListItem>
        <UserMenuListDivider />
        <UserMenuListItem>
          <a href={accountLink}>
            <MaterialPersonOutline
              fill="#5f5f5f"
              width="24"
              height="24"
              style={{ marginRight: 4 }}
            />
            Account
          </a>
        </UserMenuListItem>
        <UserMenuListDivider />
        {!!items?.length &&
          items.map((item, idx) => {
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
    <LoginIcon href={loginLink}>
      <PersonIconWrapper light={light}>
        <MaterialPersonOutline
          fill={light ? '#5f5f5f' : '#ffffff'}
          width="24"
          height="24"
        />
      </PersonIconWrapper>
    </LoginIcon>
  );
};

export default UserMenu;
