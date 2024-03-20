/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Button, ConfirmDialog } from '@t3n/components';

const meta: Meta<typeof ConfirmDialog> = {
  component: ConfirmDialog,
  title: 'Components/Content/ConfirmDialog',
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    headline: 'Das ist die Headline eines Modals',
    buttonLabel: 'Klick',
    wide: false,
    loading: false,
    buttonDisabled: false,
    children:
      'Das ist der Inhalt eines Modals. Du kannst ihn so lange oder kurz fassen wie du möchtest!',
  },
  render: function Render(args) {
    const [modalOpen, setModalOpen] = useState(true);

    return (
      <Box height="50vh">
        <Button onClick={() => setModalOpen(true)}>Modal anzeigen</Button>

        {modalOpen && (
          <ConfirmDialog
            {...args}
            onClose={() => setModalOpen(false)}
            onConfirm={() => {
              setModalOpen(false);
            }}
          />
        )}
      </Box>
    );
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

export const modal: Story = {};

export const disabled: Story = {
  args: { buttonDisabled: true },
};

export const loading: Story = {
  args: { loading: true },
};

export const wide: Story = {
  args: { wide: true },
};
