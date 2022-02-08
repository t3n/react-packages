import React from 'react';
import styled from 'styled-components';

import { MaterialBookmarkBorder } from '@t3n/icons';

import Box from '../Box';
import Button from '../Button';
import Divider from '../Divider';
import Link from '../Link';
import Modal from '../Modal';
import SocialButton from '../SocialButton';
import Text from '../Text';

const OverflowModalWrapper = styled(Box)`
  > div > div {
    overflow: visible;

    > div:first-child {
      top: -22px;
      right: -22px;
    }
  }
`;

const LegacyBookmarkModal: React.FC<{
  pocketLink: string;
  onClose: () => void;
}> = ({ pocketLink, onClose }) => {
  return (
    <OverflowModalWrapper>
      <Modal
        headline="Artikel merken"
        headlineIcon={MaterialBookmarkBorder}
        onClose={onClose}
      >
        <Text>
          Bitte melde dich an, um diesen Artikel in deiner persönlichen
          Merkliste auf t3n zu speichern.
        </Text>
        <Button href="/account/register" id="bookmark-register-button">
          Jetzt registrieren und merken
        </Button>
        <Text small mb={2}>
          Du hast schon einen t3n-Account?{' '}
          <Link
            id="bookmark-login-link"
            href="/account/login?redirect={{ currentUrlWithoutParams }}"
            small
          >
            Hier anmelden
          </Link>
        </Text>
        <Divider variant="primary">oder</Divider>
        <SocialButton
          id="bookmark-pocket-button"
          href={pocketLink}
          network="pocket"
          $alternativeText="Artikel in Pocket speichern"
        />
      </Modal>
    </OverflowModalWrapper>
  );
};

export default LegacyBookmarkModal;
