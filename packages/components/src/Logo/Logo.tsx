import React from 'react';
import DefaultLogo from './DefaultLogo.svg';

export type LogoVariant = 'default';

interface LogoProps {
  height?: string;
  width?: string;
  variant?: LogoVariant;
}

export const Logo: React.FC<LogoProps> = ({ variant, ...rest }) => {
  // todo check for other variants
  if (variant && variant === 'default') {
    return <DefaultLogo {...rest} />;
  }

  return <DefaultLogo {...rest} />;
};
