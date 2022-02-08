import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { margin, MarginLeftProps, variant } from 'styled-system';
import toaster, { Position } from 'toasted-notes';

import { MaterialClear } from '@t3n/icons';
import { theme } from '@t3n/theme';

import Alert, { AlertStatus, AlertText } from '../Alert';
import Box from '../Box';

// TODO: Use a different library than 'toasted-notes' because it's not
// maintained anymore and relies on an outdated version of react-spring

export interface ToastProps {
  // eslint-disable-next-line react/no-unused-prop-types
  id: string;
  status: AlertStatus;
  text: string;
  isClosable: boolean;
  onClose: () => void;
}

export interface NotifyOptions {
  status: AlertStatus;
  text: string;
  duration: number | null;
  position: keyof typeof Position;
  isClosable: boolean;
}

const StyledIcon = styled(MaterialClear)<
  { status: AlertStatus } & MarginLeftProps
>`
  cursor: pointer;
  ${margin}

  ${variant({
    prop: 'status',
    variants: {
      success: {
        fill: 'shades.black',
      },
      notice: {
        fill: 'shades.black',
      },
      warning: {
        fill: 'shades.black',
      },
      error: {
        fill: 'shades.white',
      },
    },
  })}
`;

const Toast = ({ status, text, isClosable, onClose }: ToastProps) => {
  return (
    <Box m={1}>
      <Alert status={status}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <AlertText>{text}</AlertText>
          {isClosable && (
            <StyledIcon ml={3} status={status} onClick={() => onClose()} />
          )}
        </Box>
      </Alert>
    </Box>
  );
};

export const useToast = () => {
  const notify = ({ text, status, duration, position }: NotifyOptions) => {
    return toaster.notify(
      ({ onClose, id }) => (
        <ThemeProvider theme={theme}>
          <Toast
            status={status}
            isClosable
            id={id}
            text={text}
            onClose={onClose}
          />
        </ThemeProvider>
      ),
      { duration, position }
    );
  };

  return [notify];
};

export default Toast;
