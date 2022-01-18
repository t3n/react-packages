import React from 'react';
import { useState } from '@storybook/addons';

import { Button, LegacyBookmarkModal } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Legacy/Content/Bookmark-Modal',
  component: LegacyBookmarkModal,
  decorators: [storyContainerDecorator],
};

export const defaultStory = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>
        Merkliste Modal anzeigen
      </Button>

      {modalOpen && (
        <LegacyBookmarkModal
          pocketLink="https://t3n.de"
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

defaultStory.storyName = 'Default';
