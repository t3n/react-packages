import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Accordion, Box, Icon, Text } from '@t3n/components';
import { MaterialAddAPhoto } from '@t3n/icons';

import { storyContainerSectionDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Content/Accordion',
  decorators: [storyContainerSectionDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    initialOpen: false,
    title: 'Was bedeutet „t3n”?',
    children:
      '„t3n” zeigt quasi, wo alles angefangen hat. Die erste Printausgabe entstand im Rahmen einer Diplomarbeit der drei Freunde Andreas Lenz, Jan Christe und Martin Brüggemann. Eigentlich ging es dabei vor allem um das auf Open-Source-Basis selbstentwickelte Redaktionssystem, das ein ganzes Printmagazin komplett automatisiert setzen konnte – das Magazin war also eigentlich nur ein Nebenprodukt. Doch die thematische Ausrichtung rund um das Redaktionssystem TYPO3 und allgemein die Open-Source-Bewegung traf einen Nerv, damals war es der erste Print-Titel weltweit in diesem Bereich und das Interesse war sofort sehr groß. Wie es weiterging, weißt du ja. Und warum t3n? Naja: TYPO-3-News... ;-) Die thematische Ausrichtung hat sich mittlerweile stark erweitert, aber noch heute kann man die Wurzeln sehen – wenn man um sie weiß...',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const closedAccordion: Story = {};

export const initialOpenAccordion: Story = {
  args: {
    initialOpen: true,
  },
};

export const ReactElementAsTitle: Story = {
  args: {
    title: (
      <Box display="flex">
        <Icon component={MaterialAddAPhoto} mr={2} />
        <Text my={0} bold>
          Das hier ist ein React Element
        </Text>
      </Box>
    ),
  },
};
