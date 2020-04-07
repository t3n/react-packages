/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-alert */
import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
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
          onConfirm={() => {
            alert('Klick!');
            setModalOpen(false);
          }}
          buttonLabel={text('Button-Label', 'Klick')}
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

export const deleteStory = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Internet löschen</Button>

      {modalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          headline="Willst du das Internet wirklich löschen?"
          onConfirm={() => {
            alert('Du hast das Internet gelöscht :(');
            setModalOpen(false);
          }}
          buttonLabel="Löschen"
        >
          Wenn du das Internet löschst, kannst du keine Katzenbilder mehr
          anschauen. Die Löschung des Internets ist unwiderruflich.
        </Modal>
      )}
    </>
  );
};

deleteStory.story = {
  name: 'Delete',
};
