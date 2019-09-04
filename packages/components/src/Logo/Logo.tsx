import React from 'react';
import styled from 'styled-components';
import { T3nDefaultLogo } from '@t3n/icons';

export type LogoVariant = 'default';

interface LogoProps extends React.SVGAttributes<SVGElement> {
  variant?: LogoVariant;
}

export const Logo = styled(({ variant, ...props }) => {
  // todo check for other variants
  if (variant && variant === 'default') {
    return <T3nDefaultLogo width="3rem" height="1rem" {...props} />;
  }

  return <T3nDefaultLogo width="3rem" height="1rem" {...props} />;
})<LogoProps>``;
