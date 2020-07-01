import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Carousel, Box, Text, Heading } from '@t3n/components';
import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: Carousel,
  title: 'Components|Content/Carousel',
  decorators: [withKnobs, storyContainerDecorator],
};

const defaultData = [
  {
    id: '1',
    name: 'Dein Start mit t3n Pro',
    headline: 'Willkommen bei t3n Pro!',
    description:
      'Jetzt kann’s endlich losgehen! Hast du Lust auf einen kleinen Rundgang? Wir zeigen dir gerne, welche tollen Features dich als Pro-Member erwarten und wünschen dir viel Spaß!',
  },
  {
    id: '2',
    name: 't3n Magazin',
    headline: 'Wer digital lebt und arbeitet, liest t3n.',
    description:
      'Ausführliche Analysen, spannende Reportagen und geballtes Praxiswissen für digitale Pioniere: Als Pro-Member bekommst du alle drei Monate die neueste Ausgabe des t3n Magazin - gedruckt und digital!',
  },
  {
    id: '3',
    name: 't3n Guides',
    headline: 'Nerd today, boss tomorrow!',
    description:
      'Knallhartes Praxiswissen für dein Business – zusammengestellt mit den Besten ihres Fachs: Mit t3n Pro bekommst du pro Quartal einen t3n Guide deiner Wahl kostenlos.',
  },
  {
    id: '4',
    name: 'Interaktive Pro-Talks',
    headline: 'Frag einen digitalen Professional!',
    description:
      'Als Pro-Member bekommst du exklusiven Zugang zu ausführlichen, interaktiven Pro-Talks und tauscht dich mit den stärksten Köpfen der digitalen Wirtschaft aus.',
  },
  {
    id: '5',
    name: 'Welcome-Package',
    headline: 'Zeig deinen Pioniergeist!',
    description:
      'Mit dem Abschluss deiner Pro-Membership erhältst du ein persönliches Welcome-Package, mit dem du der Welt zeigen kannst, dass dein Herz digital schlägt.',
  },
];

export const defaultStory = () => {
  return (
    <Carousel slidesAmount={defaultData.length}>
      {defaultData.map((el) => (
        <Box key={el.id} mb={8}>
          <Text bold mt={3} mb={2}>
            {el.name}
          </Text>
          <Heading as="h5" my={0}>
            {el.headline}
          </Heading>
          <Text>{el.description}</Text>
        </Box>
      ))}
    </Carousel>
  );
};

defaultStory.story = {
  name: 'Default',
};
