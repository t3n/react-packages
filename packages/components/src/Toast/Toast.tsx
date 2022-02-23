import React from 'react';
import {
  ToastId,
  ToastPosition,
  useToast as useBaseToast,
} from '@chakra-ui/toast';
import styled, { ThemeProvider } from 'styled-components';
import { margin, MarginLeftProps, variant } from 'styled-system';

import { MaterialClear } from '@t3n/icons';
import { theme } from '@t3n/theme';

import Alert, { AlertStatus, AlertText } from '../Alert';
import Box from '../Box';

export interface ToastProps {
  id: ToastId;
  status: AlertStatus;
  text: string;
  isClosable: boolean;
  onClose: () => void;
}

export interface NotifyOptions {
  status: AlertStatus;
  text: string;
  duration: number | null;
  position: ToastPosition;
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
  const toast = useBaseToast();

  const notify = ({ text, status, duration, position }: NotifyOptions) => {
    toast({
      duration,
      position,
      render: ({ onClose, id }) => (
        <ThemeProvider theme={theme}>
          <Toast
            text={text}
            status={status}
            isClosable
            onClose={onClose}
            id={id}
          />
        </ThemeProvider>
      ),
    });
  };

  return [notify];
};

export default Toast;
