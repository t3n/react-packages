/* eslint-disable jsx-a11y/label-has-for */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space, margin, MarginProps } from 'styled-system';

import { getThemeColor, ThemeProps } from '@t3n/theme';
import { Box } from '../Box';
import { Text } from '../Text';

export interface FormGroupProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    Pick<MarginProps, 'marginTop' | 'marginBottom' | 'mt' | 'mb' | 'my'> {
  label: string;
  labelSecondary?: string;
  labelEndContent?: ReactNode;
  required?: boolean;
  errorMessage?: string;
  children: ReactNode;
}

const Label = styled.span`
  display: inline-block;
  ${({ theme }: ThemeProps) => space({ mr: 1, theme })};
`;

const LabelSecondary = styled.span`
  color: ${getThemeColor('text.secondary')};
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
  required,
  errorMessage,
  children,
  ...props
}: FormGroupProps) => (
  <StyledFormGroup {...props}>
    <Box width={1} display="flex" mb="0.25rem">
      <Label>{label}</Label>
      {labelSecondary && (
        <Text inline secondary>
          {labelSecondary}
        </Text>
      )}
      {!labelSecondary && !required && (
        <LabelSecondary>(optional)</LabelSecondary>
      )}
      {labelEndContent && <LabelEnd>{labelEndContent}</LabelEnd>}
    </Box>
    {children}
    {errorMessage && (
      <Text small color="feedback.error" mt="0.25rem" mb={0}>
        {errorMessage}
      </Text>
    )}
  </StyledFormGroup>
);

FormGroup.defaultProps = {
  my: 3
};
