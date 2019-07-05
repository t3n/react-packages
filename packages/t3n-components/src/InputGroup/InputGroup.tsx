/* eslint-disable jsx-a11y/label-has-for */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import { getThemeColor, ThemeProps } from '@t3n/theme';
import Input, { InputProps } from '../Input/Input';

interface BaseInputGroupProps extends InputProps {
  label: string;
  labelSecondary?: string;
  labelEndContent?: ReactNode;
}

const StyledBaseInputGroupLabel = styled.span`
  display: inline-block;
  ${({ theme }: ThemeProps) => space({ mr: 1, theme })};
`;

const StyledBaseInputGroupLabelSecondary = styled.span`
  color: ${getThemeColor('text.secondary')};
`;

const StyledBaseInputGroupLabelEnd = styled.span`
  margin-left: auto;
`;

const StyledBaseInputGroup = styled.label`
  display: block;

  > div:first-child {
    width: 100%;
    display: flex;
    ${({ theme }: ThemeProps) => space({ mb: 1 }, theme)}
  }
`;

const BaseInputGroup = ({
  type,
  label,
  id,
  labelSecondary,
  labelEndContent,
  ...inputProps
}: BaseInputGroupProps) => (
  <StyledBaseInputGroup htmlFor={id}>
    <div>
      <StyledBaseInputGroupLabel>{label}</StyledBaseInputGroupLabel>
      {labelSecondary && (
        <StyledBaseInputGroupLabelSecondary>
          {labelSecondary}
        </StyledBaseInputGroupLabelSecondary>
      )}
      {labelEndContent && (
        <StyledBaseInputGroupLabelEnd>
          {labelEndContent}
        </StyledBaseInputGroupLabelEnd>
      )}
    </div>
    <Input type={type} id={id} {...inputProps} />
  </StyledBaseInputGroup>
);

interface InputGroupProps
  extends Omit<BaseInputGroupProps, 'labelSecondary' | 'labelEndContent'> {
  required?: boolean;
}

const InputGroup = ({ type, required, ...props }: InputGroupProps) => (
  <BaseInputGroup
    type={type}
    labelSecondary={required ? '(optional)' : ''}
    labelEndContent={
      type === 'password' && (
        <a href="/" title="Passwort vergessen?">
          Passwort vergessen?
        </a>
      )
    }
    {...props}
  />
);

export default InputGroup;
