/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Image, Text } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'Components/Content/Image',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    src: 'https://t3n.de/news/wp-content/uploads/2021/11/shutterstock-1453899434-Internationale-Raumstation-ISS.jpg',
    width: '80%',
    height: 'auto',
    imageWidth: 1100,
    imageHeight: 685,
    optimizationClass: 'default',
    classMapping: {
      '240': 'responsive-extrasmall',
      '420': 'responsive-small',
      '640': 'responsive-medium',
      '980': 'responsive-default',
      '1280': 'responsive-large',
      '1620': 'responsive-extralarge',
    },
    sizes: 'calc(80vw - 4rem)',
    placeholder: true,
    lazy: true,
  },
  argTypes: {
    src: {
      description: 'The image source url',
    },
    width: {
      description: 'Display width of image set on styles',
    },
    height: {
      description: 'Display height of image set on styles',
    },
    imageWidth: {
      description: 'Native width of image element',
    },
    imageHeight: {
      description: 'Native height of image element',
    },
    optimizationClass: {
      description: 'Fastly image optimization class to apply by default',
    },
    classMapping: {
      description: 'Optional class mapping to automatically generate srcSet',
    },
    sizes: {
      description:
        'Sizes configuration for responsive images, can be string or array of strings or numbers. Must be set for a srcSet to be applied to the image.',
    },
    placeholder: {
      description:
        'Displays blur placeholder image as long as image is not loaded',
    },
    lazy: {
      description: 'Displays placeholder image until image is in viewport',
    },
  },
};

export default meta;

const getFastlyClassFormSrc = (src: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, fastlyClass] = src.split('?class=');

  return fastlyClass;
};

const CurrentFastlyClassText = ({ src }: { src: string }) => (
  <Text>
    Currently used image optimization class:{' '}
    <strong>
      <code>{getFastlyClassFormSrc(src)}</code>
    </strong>
  </Text>
);

const ResponsiveImageHint = ({ src }: { src: string }) => (
  <Box>
    <Text>
      Resize the window from smallest to largest to see the best otimized image
      src being used depending on viewport width
    </Text>
    <CurrentFastlyClassText src={src} />
    <Text>
      💡{' '}
      <em>
        Hint: if you always see the same image class being used, reload the page
        with cache disabled, because the largest option might be cached already
      </em>
    </Text>
  </Box>
);

type Story = StoryObj<typeof Image>;

export const image: Story = {};

export const externalImage: Story = {
  args: {
    src: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
};

export const optimizationClass: Story = {
  args: {
    optimizationClass: 'hero-wide',
  },
};

export const lazy: Story = {
  render: (args) => {
    const [loadedSrc, setLoadedSrc] = useState('');

    return (
      <Box
        height="200vh"
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-end"
        position="relative"
      >
        <Box position="fixed" top="2rem" left="2rem">
          <Text>
            Scroll down to see the image. Once the image passes the viewport
            threshold, the full image will be loaded instead of the blur
            placeholder.
          </Text>
          <CurrentFastlyClassText src={loadedSrc} />
        </Box>
        <Image
          {...args}
          onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
            setLoadedSrc(e.currentTarget.currentSrc)
          }
          lazy
        />
      </Box>
    );
  },
};

export const responsive: Story = {
  render: (args) => {
    const [loadedSrc, setLoadedSrc] = useState('');

    return (
      <Box>
        <ResponsiveImageHint src={loadedSrc} />
        <Image
          {...args}
          width={['100%', '80%', '80%']}
          sizes={[
            'calc(100vw - 4rem)',
            'calc(80vw - 4rem)',
            'calc(80vw - 4rem)',
          ]}
          onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
            setLoadedSrc(e.currentTarget.currentSrc)
          }
        />
      </Box>
    );
  },
};

export const relative: Story = {
  render: () => {
    return (
      <Box>
        <Text>Das Bild hier rendert nicht, da es eine relative URL ist!</Text>
        <Image src="/static/pro/pro-badge.svg" height="13px" alt="Pro Badge" />
      </Box>
    );
  },
};
