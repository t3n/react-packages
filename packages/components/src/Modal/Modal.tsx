import React, { ReactNode } from 'react';
import { css, styled } from 'styled-components';
import { WidthProps } from 'styled-system';

import { MaterialClear } from '@t3n/icons';

import Box from '../Box';
import Card from '../Card';
import Heading, { HeadingProps } from '../Heading';
import Icon from '../Icon';

export interface ModalProps extends WidthProps {
  headline: string;
  headlineIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  alwaysCentered?: boolean;
  wide?: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export interface ModalHeadingProps extends HeadingProps {
  headlineIcon: boolean;
}

const ModalWrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;

  @media (max-height: 668px) {
    z-index: 1001;
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
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  ${({ wide }) =>
    wide &&
    css`
      width: 100%;
      max-width: 720px;
    `}
`;

const StyledHeading = styled(Heading)<ModalHeadingProps>`
  width: 85%;

  display: ${({ headlineIcon }) => (headlineIcon ? 'flex' : 'block')};
`;

const StyledIconContainer = styled(Box)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const CloseIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledIconContainer
      onClick={onClick}
      alignItems="center"
      justifyContent="center"
      p={1}
      display="flex"
      width="40px"
      height="40px"
    >
      <MaterialClear width="24px" height="24px" />
    </StyledIconContainer>
  );
};

const Modal = ({
  headline,
  headlineIcon,
  wide = false,
  alwaysCentered = false,
  width: widthProp,
  onClose,
  children,
}: ModalProps) => {
  return (
    <ModalWrapper
      display="flex"
      justifyContent="center"
      alignItems={alwaysCentered ? 'center' : ['flex-end', 'center']}
    >
      <StyledModal elevate wide={wide} width={widthProp || [1, 2 / 3, 2 / 5]}>
        <CloseIcon onClick={onClose} />
        <StyledHeading
          styleAs="h4"
          as="h4"
          mt={1}
          mb={3}
          headlineIcon={!!headlineIcon}
        >
          {headlineIcon && <Icon component={headlineIcon} mr={1} />}
          {headline}
        </StyledHeading>
        {children}
      </StyledModal>
      <ModalBackdrop onClick={onClose} />
    </ModalWrapper>
  );
};

export default Modal;
