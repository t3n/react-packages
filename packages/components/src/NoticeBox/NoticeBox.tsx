import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import { border, color, space, SpaceProps } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Box from '../Box';
import Text from '../Text';

export interface NoticeBoxProps extends SpaceProps {
  children?: ReactNode;
}

const StyledNoticeBox = styled(Box)<ThemeProps>`
  ${({ theme }) =>
    border({
      theme,
      borderColor: 'shades.grey42',
      borderWidth: '1px 2px 4px 1px',
      borderStyle: 'solid',
      borderRadius: theme.border.radii[1],
    })}
  ${({ theme }) => color({ theme, bg: 'feedback.notice' })}

  ${space};

  a {
    background-image: url('data:image/svg+xml;base64,${btoa(
      '<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><g stroke="rgb(143,143,143)"><rect x="0" y="0" width="1" height="1" /></g></svg>',
    )}');
  }

  a:visited,
  a:hover,
  a:focus {
    color: #2a2a2a;
    text-decoration: none;
    background-repeat: repeat-x;
    background-size: 1px 1px;
    background-position: 0 100%;
    background-image: url('data:image/svg+xml;base64,${btoa(
      '<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><g stroke="rgb(249,66,58)"><rect x="0" y="0" width="1" height="1" /></g></svg>',
    )}');
  }
`;

export const NoticeBoxText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text m={0} width="100%">
      {children}
    </Text>
  );
};

const NoticeBox = ({ children, ...rest }: NoticeBoxProps) => {
  return (
    <StyledNoticeBox display="flex" alignItems="center" p={3} {...rest}>
      {children}
    </StyledNoticeBox>
  );
};

export default NoticeBox;
