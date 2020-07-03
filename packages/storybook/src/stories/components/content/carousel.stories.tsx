/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import styled from 'styled-components';
import { layout } from 'styled-system';

import { withKnobs, text, number } from '@storybook/addon-knobs';
import {
  Carousel,
  Box,
  Image,
  Text,
  Heading,
  Modal,
  Button,
} from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  component: Carousel,
  title: 'Components|Content/Carousel',
  decorators: [withKnobs, storyContainerDecorator],
};

const StyledBox = styled(Box)`
  > div > div:first-child {
    ${({ theme }) =>
      layout({ theme, width: ['inherit', '85%', '65%', '50%'] })};
  }
  .slick-slider {
    ${({ theme }) =>
      layout({ theme, maxHeight: ['430px', '420px', '400px', '500px'] })};
    height: 100%;
    opacity: 0;
    animation: slider-fade-in linear 0.2s 0.1s 1 forwards;
  }

  @keyframes slider-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const defaultData = [
  {
    id: '1',
    name: 'Dein Start mit t3n Pro',
    headline: 'Willkommen bei t3n Pro!',
    description:
      'Jetzt kann’s endlich losgehen! Hast du Lust auf einen kleinen Rundgang? Wir zeigen dir gerne, welche tollen Features dich als Pro-Member erwarten und wünschen dir viel Spaß!',
    imageSrc:
      'https://images.unsplash.com/photo-1510337550647-e84f83e341ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '2',
    name: 't3n Magazin',
    headline: 'Wer digital lebt und arbeitet, liest t3n.',
    description:
      'Ausführliche Analysen, spannende Reportagen und geballtes Praxiswissen für digitale Pioniere: Als Pro-Member bekommst du alle drei Monate die neueste Ausgabe des t3n Magazin - gedruckt und digital!',
    imageSrc:
      'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '3',
    name: 't3n Guides',
    headline: 'Nerd today, boss tomorrow!',
    description:
      'Knallhartes Praxiswissen für dein Business – zusammengestellt mit den Besten ihres Fachs: Mit t3n Pro bekommst du pro Quartal einen t3n Guide deiner Wahl kostenlos.',
    imageSrc:
      'https://images.unsplash.com/photo-1530667912788-f976e8ee0bd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '4',
    name: 'Interaktive Pro-Talks',
    headline: 'Frag einen digitalen Professional!',
    description:
      'Als Pro-Member bekommst du exklusiven Zugang zu ausführlichen, interaktiven Pro-Talks und tauscht dich mit den stärksten Köpfen der digitalen Wirtschaft aus.',
    imageSrc:
      'https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '5',
    name: 'Welcome-Package',
    headline: 'Zeig deinen Pioniergeist!',
    description:
      'Mit dem Abschluss deiner Pro-Membership erhältst du ein persönliches Welcome-Package, mit dem du der Welt zeigen kannst, dass dein Herz digital schlägt.',
    imageSrc:
      'https://images.unsplash.com/photo-1559284957-298b8b225576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '6',
    name: 'Beispiel-Text',
    headline: 'Jetzt gehen mir die Texte aus',
    description:
      'Macht nix, dann schreibe ich selbst was. Auf einer Skala von 1 bis mega dolle, wie süß findest du die Hundebilder? ... Ich brauche noch mehr Text, lalelu.',
    imageSrc:
      'https://images.unsplash.com/photo-1582068955580-dcc6c0812b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: '7',
    name: 'Mehr Text',
    headline: 'Mach einen Handstand!',
    description:
      'Wenn du keinen Handstand kannst, macht das nix! Dann kannst du dich ja immerhin noch über die komischen Texte wundern. Aber ein Handstand wär jetzt schon cool.',
    imageSrc:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
];

export const defaultStory = () => {
  return (
    <Carousel
      slidesAmount={number('Wie viele Slides gibt es?', defaultData.length)}
      slidesToShow={number(
        'Wie viele Slides sollen gleichzeitig gezeigt werden?',
        1
      )}
      slidesToScroll={number(
        'Wie viele Slides sollen bei einmal klicken gescrollt werden?',
        1
      )}
      speed={number('Geschwindigkeit', 500)}
      prevArrowLabel={text('Zurück-Label', 'Zurück')}
      nextArrowLabel={text('Weiter-Label', 'Nächste')}
    >
      {defaultData.map((el) => (
        <Box key={el.id} mb={8}>
          <Image
            m="0 auto"
            height={['165px', '180px', '150px', '200px', '250px']}
            src={el.imageSrc}
            alt={el.headline}
            title={el.headline}
          />

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

export const infiniteStory = () => {
  return (
    <Carousel slidesAmount={defaultData.length} infinite>
      {defaultData.map((el) => (
        <Box key={el.id} mb={8}>
          <Image
            m="0 auto"
            height={['165px', '180px', '150px', '200px', '250px']}
            src={el.imageSrc}
            alt={el.headline}
            title={el.headline}
          />

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

infiniteStory.story = {
  name: 'Infinite',
};

export const autoplayStory = () => {
  return (
    <Carousel
      slidesAmount={defaultData.length}
      infinite
      autoplay
      autoplaySpeed={number('Autoplay Geschwindigkeit', 2000)}
    >
      {defaultData.map((el) => (
        <Box key={el.id} mb={8}>
          <Image
            m="0 auto"
            height={['165px', '180px', '150px', '200px', '250px']}
            src={el.imageSrc}
            alt={el.headline}
            title={el.headline}
          />

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

autoplayStory.story = {
  name: 'Autoplay',
};

export const responsiveStory = () => {
  return (
    <Carousel
      slidesAmount={defaultData.length}
      slidesToShow={5}
      slidesToScroll={5}
      infinite
      responsive={[
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]}
    >
      {defaultData.map((el) => (
        <Box key={el.id} mb={8}>
          <Image
            m="0 auto"
            height={['165px', '180px', '150px', '200px', '250px']}
            src={el.imageSrc}
            alt={el.headline}
            title={el.headline}
          />

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

responsiveStory.story = {
  name: 'Responsive',
};

export const sliderInModalStory = () => {
  const [showOnboardingModal, setShowOnboardingModal] = useState(true);

  return (
    <>
      <Button onClick={() => setShowOnboardingModal(true)}>
        Slider im Modal anzeigen
      </Button>

      {showOnboardingModal && (
        <StyledBox>
          <Modal headline="" onClose={() => setShowOnboardingModal(false)}>
            <Carousel
              slidesAmount={defaultData.length}
              nextArrowFunction={() => setShowOnboardingModal(false)}
            >
              {defaultData.map((el) => (
                <Box key={el.id} mb={8}>
                  <Image
                    m="0 auto"
                    height={['165px', '180px', '150px', '200px', '250px']}
                    src={el.imageSrc}
                    alt={el.headline}
                    title={el.headline}
                  />

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
          </Modal>
        </StyledBox>
      )}
    </>
  );
};

sliderInModalStory.story = {
  name: 'In Modal',
};
