import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { ThemeProps } from '@t3n/theme';

import Box from '../Box';
import Button from '../Button';
import Modal, { ModalProps } from '../Modal';

export interface ConfirmDialogProps extends ModalProps {
  onConfirm: () => void;
  buttonLabel: string;
  buttonDisabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
}

const StyledButtonBox = styled(Box)`
  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[0]}) {
    flex-direction: column;
  }
`;

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  headline,
  onConfirm,
  onClose,
  buttonLabel,
  buttonDisabled,
  loading,
  wide: modalPropWide,
  width: modalPropWidth,
  children,
}) => {
  return (
    <Modal
      headline={headline}
      wide={modalPropWide}
      width={modalPropWidth}
      onClose={onClose}
    >
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
        <Button
          variant="primary"
          onClick={onConfirm}
          disabled={buttonDisabled}
          loading={loading}
        >
          {buttonLabel}
        </Button>
      </StyledButtonBox>
    </Modal>
  );
};

export default ConfirmDialog;
