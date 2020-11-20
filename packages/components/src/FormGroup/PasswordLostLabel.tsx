import React from 'react';

import { Link } from '../Link';

interface Props {
  // eslint-disable-next-line react/require-default-props
  href?: string;
}

export const PasswordLostLabel = ({ href }: Props) => (
  <Link
    href={href || 'https://t3n.de/account/lostpassword'}
    title="Passwort vergessen?"
    small
  >
    Passwort vergessen?
  </Link>
);
