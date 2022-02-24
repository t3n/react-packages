import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Box, Image, Text } from '@t3n/components';
import { OptimizationClassMapping } from '@t3n/components/src/Image/Image';

import { storyContainerDecorator } from '../../../utils/decorators';

const meta: Meta = {
  title: 'Components/Content/Image',
  component: Image,
  decorators: [storyContainerDecorator],
  argTypes: {
    src: {
      description: 'The image source url',
      type: { name: 'string', required: true },
    },
    width: {
      description: 'Display width of image set on styles',
    },
    height: {
      description: 'Display height of image set on styles',
    },
    imageWidth: {
      description: 'Native width of image element',
      type: 'number',
    },
    imageHeight: {
      description: 'Native height of image element',
      type: 'number',
    },
    optimizationClass: {
      description: 'Fastly image optimization class to apply by default',
      defaultValue: 'default',
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
      defaultValue: true,
      type: 'boolean',
    },
    lazy: {
      description: 'Displays placeholder image until image is in viewport',
      defaultValue: true,
      type: 'boolean',
    },
  },
};

export default meta;

const defaultOptimizationClassMapping = {
  '240': 'responsive-extrasmall',
  '420': 'responsive-small',
  '640': 'responsive-medium',
  '980': 'responsive-default',
  '1280': 'responsive-large',
  '1620': 'responsive-extralarge',
};

const exampleImageSrc =
  'https://t3n.de/news/wp-content/uploads/2021/11/shutterstock-1453899434-Internationale-Raumstation-ISS.jpg';

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

export const defaultStory: Story<{
  src: string;
  width: string;
  height: string;
  imageWidth: number;
  imageHeight: number;
  optimizationClass: string;
  classMapping: OptimizationClassMapping;
  sizes: string;
  placeholder: boolean;
  lazy: boolean;
}> = (args) => (
  <Image
    {...args}
    width={args.width.split(',').map((i) => i.trim())}
    height={args.height.split(',').map((i) => i.trim())}
  />
);

defaultStory.args = {
  src: exampleImageSrc,
  width: '80%',
  height: 'auto',
  imageWidth: 1100,
  imageHeight: 685,
  optimizationClass: 'default',
  classMapping: defaultOptimizationClassMapping,
  sizes: 'calc(80vw - 4rem)',
};

export const SimpleImage: Story = () => (
  <Image src={exampleImageSrc} imageWidth={800} imageHeight={450} />
);

export const ExternalImage: Story = () => (
  <Image
    src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    imageWidth={840}
    imageHeight={560}
  />
);

export const OptimizationClass: Story = () => (
  <Image
    src={exampleImageSrc}
    optimizationClass="hero-wide"
    imageWidth={800}
    imageHeight={367}
  />
);

export const Lazy: Story = () => {
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
        src={exampleImageSrc}
        width={['100%', '80%', '80%']}
        height="auto"
        imageWidth={1100}
        imageHeight={685}
        sizes={['calc(100vw - 4rem)', 'calc(80vw - 4rem)', 'calc(80vw - 4rem)']}
        onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
          setLoadedSrc(e.currentTarget.currentSrc)
        }
      />
    </Box>
  );
};

export const Responsive: Story = () => {
  const [loadedSrc, setLoadedSrc] = useState('');

  return (
    <Box>
      <ResponsiveImageHint src={loadedSrc} />
      <Image
        src={exampleImageSrc}
        width={['100%', '80%', '80%']}
        height="auto"
        imageWidth={1100}
        imageHeight={685}
        sizes={['calc(100vw - 4rem)', 'calc(80vw - 4rem)', 'calc(80vw - 4rem)']}
        onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
          setLoadedSrc(e.currentTarget.currentSrc)
        }
      />
    </Box>
  );
};

export const CustomClassMapping: Story = () => {
  const [loadedSrc, setLoadedSrc] = useState('');

  return (
    <Box>
      <ResponsiveImageHint src={loadedSrc} />
      <Image
        src={exampleImageSrc}
        width={['100%', '80%', '80%']}
        height="auto"
        imageWidth={1200}
        imageHeight={675}
        sizes={['calc(100vw - 4rem)', 'calc(80vw - 4rem)', 'calc(80vw - 4rem)']}
        classMapping={{
          '630': 'hero-small',
          '930': 'hero',
          '1470': 'hero-large',
        }}
        onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
          setLoadedSrc(e.currentTarget.currentSrc)
        }
      />
    </Box>
  );
};

export const Relative: Story = () => {
  return (
    <Box>
      <Image src="/static/pro/pro-badge.svg" height="13px" alt="Pro Badge" />
    </Box>
  );
};
