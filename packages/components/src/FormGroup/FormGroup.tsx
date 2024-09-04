/* eslint-disable jsx-a11y/label-has-for */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { margin, MarginProps, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Box from '../Box';
import Text from '../Text';

export interface FormGroupProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    Pick<MarginProps, 'marginTop' | 'marginBottom' | 'mt' | 'mb' | 'my'> {
  label: string;
  labelSecondary?: string;
  labelEndContent?: ReactNode;
  errorMessage?: string;
  children?: ReactNode;
}

const Label = styled.span`
  display: inline-block;
  ${({ theme }: ThemeProps) => space({ mr: 1, theme })};
`;

const LabelEnd = styled.span`
  margin-left: auto;
`;

const StyledFormGroup = styled.label<Omit<FormGroupProps, 'label'>>`
  display: block;
  position: relative;
  ${margin}
`;

const SecondaryLabel = styled(Text)`
  line-height: normal;
`;

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  labelSecondary,
  labelEndContent,
  errorMessage,
  children,
  my = 4,
  ...props
}) => (
  <StyledFormGroup my={my} {...props}>
    <Box width={1} display="flex" mb={1}>
      <Label>{label}</Label>
      {labelSecondary && (
        <SecondaryLabel inline secondary>
          {labelSecondary}
        </SecondaryLabel>
      )}
      {labelEndContent && <LabelEnd>{labelEndContent}</LabelEnd>}
    </Box>
    {children}
    {errorMessage && (
      <Text small color="feedback.error" mt={1} mb={0}>
        {errorMessage}
      </Text>
    )}
  </StyledFormGroup>
);

export default FormGroup;
