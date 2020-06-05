import React from 'react';
import toaster, { Position } from 'toasted-notes';
import { MaterialClear } from '@t3n/icons';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '@t3n/theme';
import { MarginLeftProps, margin, variant } from 'styled-system';

import { AlertStatus, AlertText, Alert } from '../Alert';
import { Box } from '../Box';

interface ToastProps {
  id: string;
  status: AlertStatus;
  text: string;
  isClosable: boolean;
  onClose: () => void;
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

export const Toast = ({ status, text, isClosable, onClose }: ToastProps) => {
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

interface NotifyOptions {
  status: AlertStatus;
  text: string;
  duration: number | null;
  position: keyof typeof Position;
  isClosable: boolean;
}

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
