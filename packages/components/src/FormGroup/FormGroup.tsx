/* eslint-disable jsx-a11y/label-has-for */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space, margin, MarginProps } from 'styled-system';

import { getThemeColor, ThemeProps } from '@t3n/theme';
import { Text } from '../Text';

interface FormGroupProps
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

const ErrorMessage = styled(Text).attrs(() => ({
  inline: true,
  color: 'feedback.error',
  small: true
}))`
  position: absolute;
  left: 0;
  bottom: -2rem;
  ${({ theme }: ThemeProps) => space({ px: 1, theme })};
`;

const StyledFormGroup = styled.label<Omit<FormGroupProps, 'label'>>`
  display: block;
  position: relative;
  ${margin}

  > div:first-child {
    width: 100%;
    display: flex;
    ${({ theme }: ThemeProps) => space({ mb: 1 }, theme)}
  }
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
    <div>
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
    </div>
    {children}
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </StyledFormGroup>
);

FormGroup.defaultProps = {
  my: 3
};
