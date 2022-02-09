import React from 'react';

import Link from '../Link';

export interface PasswordLostLabelProps {
  href?: string;
}

const PasswordLostLabel = ({ href }: PasswordLostLabelProps) => (
  <Link
    href={href || 'https://t3n.de/account/lostpassword'}
    title="Passwort vergessen?"
    small
  >
    Passwort vergessen?
  </Link>
);

export default PasswordLostLabel;
