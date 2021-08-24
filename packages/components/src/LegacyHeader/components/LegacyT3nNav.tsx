/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { space, typography } from 'styled-system';

import { Box } from '../../Box';
import { LegacyUserMenu, LegacyUserMenuProps } from '../../LegacyUserMenu';
import { Text } from '../../Text';
import { HeaderLink } from '../LegacyHeader';

const T3nNav = styled(Box)`
  ${Text} {
    ${({ theme }) => space({ theme, mr: '13.2px' })};
    ${({ theme }) =>
      typography({ theme, fontSize: '12px', lineHeight: '12px' })};
  }
`;

type T3nNavLinksType = {
  label: string;
  url: string;
};

const t3nNavLinks: T3nNavLinksType[] = [
  {
    label: 'Über t3n',
    url: '/ueber-t3n/',
  },
  {
    label: 'Jobs bei t3n',
    url: '/jobs-bei-t3n/',
  },
  {
    label: 'Mediadaten',
    url: '/mediadaten/de/',
  },
];

const LegacyT3nNav: React.FC<{
  user: LegacyUserMenuProps['user'];
  labelUrl: string;
  itemGroups: LegacyUserMenuProps['itemGroups'];
}> = ({ user, labelUrl, itemGroups }) => {
  return (
    <T3nNav
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      pb="2px"
    >
      {t3nNavLinks.map((link, idx) => (
        <HeaderLink href={link.url} title={link.label} key={idx}>
          <Text m={0}>{link.label}</Text>
        </HeaderLink>
      ))}
      <LegacyUserMenu
        loading={!user}
        user={user}
        itemGroups={itemGroups}
        labelUrl={labelUrl}
      />
    </T3nNav>
  );
};

export default LegacyT3nNav;
