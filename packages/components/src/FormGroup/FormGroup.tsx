/* eslint-disable jsx-a11y/label-has-for */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space, margin, MarginProps } from 'styled-system';

import { ThemeProps } from '@t3n/theme';
import { Box } from '../Box';
import { Text } from '../Text';

export interface FormGroupProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    Pick<MarginProps, 'marginTop' | 'marginBottom' | 'mt' | 'mb' | 'my'> {
  label: string;
  labelSecondary?: string;
  labelEndContent?: ReactNode;
  errorMessage?: string;
  children: ReactNode;
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

export const FormGroup = ({
  label,
  labelSecondary,
  labelEndContent,
  errorMessage,
  children,
  ...props
}: FormGroupProps) => (
  <StyledFormGroup {...props}>
    <Box width={1} display="flex" mb={1}>
      <Label>{label}</Label>
      {labelSecondary && (
        <Text inline secondary>
          {labelSecondary}
        </Text>
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

FormGroup.defaultProps = {
  my: 4,
};
