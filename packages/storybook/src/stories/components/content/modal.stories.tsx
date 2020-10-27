/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-alert */
import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Modal, Button } from '@t3n/components';
import { useState } from '@storybook/addons';
import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: Modal,
  title: 'Components|Content/Modal',
  decorators: [withKnobs, storyContainerDecorator],
};

export const defaultStory = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Modal anzeigen</Button>

      {modalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          headline={text('Headline', 'Das ist die Headline eines Modals')}
          wide={boolean('Wide', false)}
        >
          {text(
            'Inhalt',
            'Das ist der Inhalt eines Modals. Du kannst ihn so lange oder kurz fassen wie du möchtest!'
          )}
        </Modal>
      )}
    </>
  );
};

defaultStory.story = {
  name: 'Default',
};

export const wideStory = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Modal anzeigen</Button>

      {modalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          headline="Das ist die Headline eines Modals"
          wide
        >
          Das ist der Inhalt eines Modals. Du kannst ihn so lange oder kurz
          fassen wie du möchtest!
        </Modal>
      )}
    </>
  );
};

wideStory.story = {
  name: 'Wide',
};

export const widthStory = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Modal anzeigen</Button>

      {modalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          headline="Das ist die Headline eines Modals"
          width={[1 / 2, 1 / 4, 1 / 5]}
        >
          Leider gibt Storybook noch nicht her, ein Array of Numbers über die
          Knobs zu steuern.
          <br />
          Hier wurde die Width angepasst auf:
          <br />
          [1 / 2, 1 / 4, 1 / 5]
          <br />
          statt der normalen
          <br />
          [1, 2 / 3, 2 / 5]
        </Modal>
      )}
    </>
  );
};

widthStory.story = {
  name: 'Width',
};
