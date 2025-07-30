import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Button, LegacyBookmarkModal } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof LegacyBookmarkModal> = {
  component: LegacyBookmarkModal,
  title: 'Legacy/Content/Bookmark-Modal',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  render: function Render() {
    const [modalOpen, setModalOpen] = useState(true);

    return (
      <Box height="50vh">
        <Button onClick={() => setModalOpen(true)}>
          Merkliste Modal anzeigen
        </Button>
        {modalOpen && (
          <LegacyBookmarkModal onClose={() => setModalOpen(false)} />
        )}
      </Box>
    );
  },
};

export default meta;
type Story = StoryObj<typeof LegacyBookmarkModal>;

export const bookmarkModal: Story = {};
