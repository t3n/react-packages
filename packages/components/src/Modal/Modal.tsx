import React from 'react';
import styled, { css } from 'styled-components';
import { MaterialClear } from '@t3n/icons';
import { theme, ThemeProps } from '@t3n/theme';
import { Card } from '../Card';
import { Box } from '../Box';
import { Heading } from '../Heading';

export interface ModalProps {
  headline: string;
  wide?: boolean;
  width?: string | number[];
  onClose: () => void;
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  align-items: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${(props: ThemeProps) =>
      props.theme.breakpoints[0]}) {
    align-items: flex-end;
  }
`;

const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const StyledModal = styled(Card)<{ wide: boolean }>`
  position: relative;
  overflow: inherit;
  z-index: 1;
  max-height: 100%;
  overflow: auto;
  margin-bottom: 0;
  max-width: 35rem;

  ${({ wide }) =>
    wide &&
    css`
      width: 720px;
    `}
`;

const StyledHeading = styled(Heading)`
  width: 85%;
`;

const StyledIconContainer = styled(Box)`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  fill: ${theme.colors.text.primary};

  &:hover {
    cursor: pointer;
    background: ${theme.colors.brand.red};
    fill: ${theme.colors.text.inverse};
  }
`;

const CloseIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <StyledIconContainer
      onClick={onClick}
      alignItems="center"
      justifyContent="center"
      bg="shades.grey232"
      p={1}
      display="flex"
      width="40px"
      height="40px"
    >
      <MaterialClear width="24px" height="24px" />
    </StyledIconContainer>
  );
};

export const Modal: React.FC<ModalProps> = ({
  headline,
  wide = false,
  width,
  onClose,
  children,
}) => {
  return (
    <ModalWrapper>
      <StyledModal elevate wide={wide} width={width || [1, 2 / 3, 2 / 5]}>
        <CloseIcon onClick={onClose} />
        <StyledHeading styleAs="h4" as="h4" mt={1} mb={3}>
          {headline}
        </StyledHeading>
        {children}
      </StyledModal>
      <ModalBackdrop onClick={onClose} />
    </ModalWrapper>
  );
};
