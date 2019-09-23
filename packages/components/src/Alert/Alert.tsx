import React from 'react';
import styled from 'styled-components';
import { variant, SpaceProps, space } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
import { Box } from '../Box';
import { Text } from '../Text';

export type AlertStatus = 'success' | 'notice' | 'warning' | 'error';

interface AlertProps extends SpaceProps {
  status: AlertStatus;
}

const AlertBox = styled(Box)<{ status: AlertStatus }>`
  border-radius: ${({ theme }: ThemeProps) => theme.border.radii[1]};

  ${variant({
    prop: 'status',
    variants: {
      success: {
        bg: 'feedback.success'
      },
      notice: {
        bg: 'feedback.notice'
      },
      warning: {
        bg: 'feedback.warn'
      },
      error: {
        bg: 'feedback.error',
        color: 'shades.white'
      }
    }
  })}
  ${space};
`;

// todo export AlertIcon as soon as we do have an IconComponent

const AlertText: React.FC = ({ children }) => {
  return <Text m={0}>{children}</Text>;
};

const Alert: React.FC<AlertProps> = ({ status, children, ...rest }) => {
  return (
    <AlertBox
      display="flex"
      alignItems="center"
      status={status}
      p={2}
      {...rest}
    >
      {children}
    </AlertBox>
  );
};

export { Alert, AlertText };
