import React from 'react';

interface Props {
  href?: string;
}

export const PasswordLostLabel = ({ href }: Props) => (
  <a
    href={href || 'https://t3n.de/account/lostpassword'}
    title="Passwort vergessen?"
  >
    Passwort vergessen?
  </a>
);
