/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import styled from 'styled-components';
import {
  border,
  color,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Avatar from '../Avatar';
import Box from '../Box';

const ArrowDownIcon: React.FC = () => (
  <svg
    viewBox="0 0 12 7"
    width="9px"
    height="8px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.677 7.03l-.177.177-.354-.353-5-5L.793 1.5 1.5.793l.354.353L6.5 5.793l.896-.897 1.25-1.25.399-.398 2.101-2.102.354-.353.707.707-.353.354-.4.398-4.6 4.602-.177.176z" />
  </svg>
);

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

  svg {
    fill: ${({ theme }: ThemeProps) => theme.colors.text.secondary};
  }

  &:hover {
    svg {
      fill: ${({ theme }: ThemeProps) => theme.colors.text.primary};
    }
  }
`;

const LegacyUserMenuList = styled.ul`
  right: 0;
  z-index: 10;
  list-style-type: none;
  ${({ theme }) => color({ theme, bg: 'background.primary' })};
  ${({ theme }) => space({ theme, m: '1px', py: 2, px: 3 })};
  ${({ theme }) => layout({ theme, width: ['97%', '132px'] })};
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
  ${({ theme }) => space({ theme, py: 2 })};

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
    ${({ theme }) => typography({ theme, fontSize: '12px' })};
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
  ${({ theme }) => space({ theme, pr: 2 })};
  ${({ theme }) => typography({ theme, fontSize: '12px' })};
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
    nickName: string;
    avatarUrl: string;
  };

  itemGroups?: {
    item: (JSX.Element | string)[];
  }[];
}

const LegacyUserMenu: React.FC<LegacyUserMenuProps> = ({
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
          size={25}
        />
        {!loading && <ArrowDownIcon />}
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

export default LegacyUserMenu;
