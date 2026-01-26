import React, { LabelHTMLAttributes, ReactNode } from 'react';
import { styled } from 'styled-components';
import { margin, MarginProps, space } from 'styled-system';

import { ThemeProps } from '@t3n/theme';

import Box from '../Box';
import Text from '../Text';

export interface FormGroupProps
  extends
    LabelHTMLAttributes<HTMLLabelElement>,
    Pick<MarginProps, 'marginTop' | 'marginBottom' | 'mt' | 'mb' | 'my'> {
  label: string;
  labelSecondary?: string;
  labelEndContent?: ReactNode;
  errorMessage?: string;
  children?: ReactNode;
}

const Label = styled.span<ThemeProps>`
  display: inline-block;
  ${({ theme }) => space({ mr: 1, theme })};
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

const FormGroup = ({
  label,
  labelSecondary,
  labelEndContent,
  errorMessage,
  children,
  my = 4,
  ...props
}: FormGroupProps) => (
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
