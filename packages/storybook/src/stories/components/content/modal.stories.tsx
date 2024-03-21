/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Button, Modal } from '@t3n/components';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Components/Content/Modal',
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    headline: 'Das ist die Headline eines Modals',
    wide: false,
    children:
      'Das ist der Inhalt eines Modals. Du kannst ihn so lange oder kurz fassen wie du möchtest!',
  },
  render: function Render(args) {
    const [modalOpen, setModalOpen] = useState(true);

    return (
      <Box height="50vh">
        <Button onClick={() => setModalOpen(true)}>Modal anzeigen</Button>
        {modalOpen && <Modal {...args} onClose={() => setModalOpen(false)} />}
      </Box>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const modal: Story = {};

export const wideModal: Story = {
  args: { wide: true },
};
