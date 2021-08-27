/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-alert */
import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { useState } from '@storybook/addons';

import { Button, ConfirmDialog } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: ConfirmDialog,
  title: 'Components/Content/ConfirmDialog',
  decorators: [storyContainerDecorator],
};

export const defaultStory = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Modal anzeigen</Button>

      {modalOpen && (
        <ConfirmDialog
          onClose={() => setModalOpen(false)}
          headline={text('Headline', 'Das ist die Headline eines Modals')}
          onConfirm={() => {
            alert('Klick!');
            setModalOpen(false);
          }}
          buttonLabel={text('Button-Label', 'Klick')}
          wide={boolean('Wide', false)}
          loading={boolean('Lädt', false)}
        >
          {text(
            'Inhalt',
            'Das ist der Inhalt eines Modals. Du kannst ihn so lange oder kurz fassen wie du möchtest!'
          )}
        </ConfirmDialog>
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
        <ConfirmDialog
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
        </ConfirmDialog>
      )}
    </>
  );
};

deleteStory.story = {
  name: 'Delete',
};

export const disabledStory = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Internet löschen</Button>

      {modalOpen && (
        <ConfirmDialog
          onClose={() => setModalOpen(false)}
          headline="Willst du das Internet wirklich löschen?"
          onConfirm={() => {
            alert('Du hast das Internet gelöscht :(');
            setModalOpen(false);
          }}
          buttonLabel="Löschen"
          buttonDisabled
        >
          Wenn du das Internet löschst, kannst du keine Katzenbilder mehr
          anschauen. Die Löschung des Internets ist unwiderruflich.
        </ConfirmDialog>
      )}
    </>
  );
};

disabledStory.story = {
  name: 'Disabled Button',
};

export const loadingStory = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Internet löschen</Button>

      {modalOpen && (
        <ConfirmDialog
          onClose={() => setModalOpen(false)}
          headline="Willst du das Internet wirklich löschen?"
          onConfirm={() => {
            alert('Du hast das Internet gelöscht :(');
            setModalOpen(false);
          }}
          buttonLabel="Löschen"
          loading
        >
          Wenn du das Internet löschst, kannst du keine Katzenbilder mehr
          anschauen. Die Löschung des Internets ist unwiderruflich.
        </ConfirmDialog>
      )}
    </>
  );
};

loadingStory.story = {
  name: 'Loading',
};

export const widthStory = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Internet löschen</Button>

      {modalOpen && (
        <ConfirmDialog
          onClose={() => setModalOpen(false)}
          headline="Willst du das Internet wirklich löschen?"
          onConfirm={() => {
            alert('Du hast das Internet gelöscht :(');
            setModalOpen(false);
          }}
          buttonLabel="Löschen"
          loading
          width={[1 / 2, 1 / 4, 1 / 5]}
        >
          Wenn du das Internet löschst, kannst du keine Katzenbilder mehr
          anschauen. Die Löschung des Internets ist unwiderruflich.
        </ConfirmDialog>
      )}
    </>
  );
};

widthStory.story = {
  name: 'Width',
};
