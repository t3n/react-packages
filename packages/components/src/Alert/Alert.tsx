import React from 'react';
import styled from 'styled-components';
import { border, space, SpaceProps, variant } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Box from '../Box';
import Text from '../Text';

export type AlertStatus = 'success' | 'notice' | 'warning' | 'error';

export interface AlertProps extends SpaceProps {
  status: AlertStatus;
}

const AlertBox = styled(Box)<{ status: AlertStatus }>`
  ${({ theme }: ThemeProps) =>
    border({
      theme,
      borderColor: 'shades.grey42',
      borderWidth: '1px 2px 4px 1px',
      borderStyle: 'solid',
      borderRadius: theme.border.radii[1],
    })}

  ${variant({
    prop: 'status',
    variants: {
      success: {
        bg: 'feedback.success',
      },
      notice: {
        bg: 'feedback.notice',
      },
      warning: {
        bg: 'feedback.warn',
      },
      error: {
        bg: 'feedback.error',
        color: 'shades.white',
      },
    },
  })}
  ${space};
`;

// todo export AlertIcon as soon as we do have an IconComponent

export const AlertText: React.FC = ({ children }) => {
  return (
    <Text m={0} width="100%">
      {children}
    </Text>
  );
};

const Alert: React.FC<AlertProps> = ({ status, children, ...rest }) => {
  return (
    <AlertBox
      display="flex"
      alignItems="center"
      status={status}
      p={3}
      {...rest}
    >
      {children}
    </AlertBox>
  );
};

export default Alert;
