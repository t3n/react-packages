import React from 'react';
import styled from 'styled-components';
import { ThemeProps } from '@t3n/theme';
import { Box } from '../Box';
import { Button } from '../Button';
import { Modal, ModalProps } from '../Modal';

export interface ConfirmDialogProps extends ModalProps {
  onConfirm: () => void;
  buttonLabel: string;
}

const StyledButtonBox = styled(Box)`
  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[0]}) {
    flex-direction: column;
  }
`;

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  headline,
  onConfirm,
  onClose,
  buttonLabel,
  children,
}) => {
  return (
    <Modal headline={headline} onClose={onClose}>
      {children}
      <StyledButtonBox display="flex" justifyContent="flex-end" mt={3}>
        <Button
          variant="secondary"
          mr={[0, 3, 3, 3]}
          mb={[1, 0, 0, 0]}
          onClick={onClose}
        >
          Abbrechen
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          {buttonLabel}
        </Button>
      </StyledButtonBox>
    </Modal>
  );
};
