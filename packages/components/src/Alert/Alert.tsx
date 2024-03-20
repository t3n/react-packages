import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space, SpaceProps, variant } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Box from '../Box';
import Text from '../Text';

export type AlertStatus = 'success' | 'notice' | 'warning' | 'error';

export interface AlertProps extends SpaceProps {
  status: AlertStatus;
  children?: ReactNode;
}

const AlertBox = styled(Box)<{ status: AlertStatus }>`
  border-radius: ${({ theme }: ThemeProps) => theme.border.radii[1]};

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

export const AlertText: React.FC<{ children?: ReactNode }> = ({ children }) => {
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
