import React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';

import { Box, Grid, GridItem, H3, Image, Text } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components/Content/Image',
  component: Image,
  decorators: [storyContainerDecorator],
};

const options = {
  range: true,
  min: 0,
  max: 100,
  step: 5,
};

export const defaultStory = () => (
  <Image
    src={text(
      'Bild-URL',
      'https://assets.t3n.sc/news/wp-content/uploads/2019/08/tier-e-scooter-hero.jpg'
    )}
    alt={text('Alt-Text', '')}
    width={400}
    height={200}
    processConfiguration={{
      fit: boolean('Crop?', true) ? 'crop' : undefined,
      quality: number('Qualität', 65, options),
      aspectRatio: '16:9',
      crop: 'faces',
    }}
  />
);

defaultStory.story = {
  name: 'Default',
};

export const CropModes = () => {
  const directions = ['top', 'right', 'bottom', 'left'];

  return (
    <>
      <H3>Crop Mode - direktional</H3>
      <Grid>
        <GridItem width={[1, 1, 1 / 2]}>
          <Text bold>Original</Text>
          <Image
            alt="Crop directional"
            src="https://images.unsplash.com/photo-1492158244976-29b84ba93025"
            width={400}
          />
        </GridItem>
        <GridItem width={[1, 1 / 2]}>
          <Grid>
            {directions.map((direction) => (
              <GridItem key={direction} width={[1 / 2]}>
                <Text bold>{direction}</Text>
                <Image
                  alt="Crop faces example"
                  src="https://images.unsplash.com/photo-1492158244976-29b84ba93025"
                  width={100}
                  height={100}
                  processConfiguration={{
                    fit: 'crop',
                    crop: direction,
                  }}
                />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>

      <H3>Crop mode auf Gesichter</H3>
      <Grid>
        <GridItem width={1 / 2}>
          <Text bold>Original</Text>
          <Image
            alt="Crop faces example"
            src="https://images.unsplash.com/photo-1521119989659-a83eee488004"
            width={200}
          />
        </GridItem>
        <GridItem width={1 / 2}>
          <Text bold>Crop auf das Gesicht</Text>
          <Image
            alt="Crop faces example"
            src="https://images.unsplash.com/photo-1521119989659-a83eee488004"
            width={200}
            height={200}
            processConfiguration={{
              crop: 'faces',
              fit: 'facearea',
              facepad: 2.0,
            }}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export const QualityConfiguration = () => {
  const q = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  return (
    <Grid>
      {q.map((el) => (
        <GridItem width={[1 / 3]}>
          <Text>Qualität: {el}</Text>
          <Image
            alt="Crop faces example"
            src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292"
            width={300}
            disableSrcSet
            processConfiguration={{
              quality: el,
            }}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export const Responsive = () => {
  return (
    <Box>
      <Image
        src="https://images.unsplash.com/photo-1575315599174-f0c6d26625eb"
        sizes="50vw"
        width={[1, 1, 1 / 2, 1 / 3]}
        alt="Responsive Image"
      />
      <Text small secondary>
        Open the &quot;Network&quot; tab in your browser and check the
        downloaded image file size. Now resize the window and check again. The
        browser picks the appropriate size for the viewport and fetches the
        corresponding image.
      </Text>
    </Box>
  );
};
