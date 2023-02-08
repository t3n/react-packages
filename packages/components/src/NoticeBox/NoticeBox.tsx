import React from 'react';
import styled from 'styled-components';
import { border, color, space, SpaceProps } from 'styled-system';

import Box from '../Box';
import Text from '../Text';

const StyledNoticeBox = styled(Box)`
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
`;

export const NoticeBoxText: React.FC = ({ children }) => {
  return (
    <Text m={0} width="100%">
      {children}
    </Text>
  );
};

const NoticeBox: React.FC<SpaceProps> = ({ children, ...rest }) => {
  return (
    <StyledNoticeBox display="flex" alignItems="center" p={3} {...rest}>
      {children}
    </StyledNoticeBox>
  );
};

export default NoticeBox;
