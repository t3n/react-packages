import React, { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import { space, SpaceProps, variant } from 'styled-system';

import Box from '../Box';
import Text from '../Text';

export type AlertStatus = 'success' | 'notice' | 'warning' | 'error';

export interface AlertProps extends SpaceProps, PropsWithChildren {
  status: AlertStatus;
}

const AlertBox = styled(Box).withConfig({
  shouldForwardProp: (prop) => prop !== 'status',
})<{ status: AlertStatus }>`
  border-radius: ${({ theme }) => theme.border.radii[1]};

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

export const AlertText = ({ children }: Required<PropsWithChildren>) => {
  return (
    <Text m={0} width="100%">
      {children}
    </Text>
  );
};

const Alert = ({ status, children, ...rest }: AlertProps) => {
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
