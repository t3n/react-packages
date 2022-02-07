import React, { useState } from 'react';

// import { boolean, number, text } from '@storybook/addon-knobs';
import { Box, Image, Text } from '@t3n/components';

import { storyContainerDecorator } from '../../../utils/decorators';

// TODO: Add knobs

export default {
  title: 'Components/Content/Image',
  component: Image,
  decorators: [storyContainerDecorator],
};

const exampleImageSrc =
  'https://images.t3n.de/news/wp-content/uploads/2021/11/shutterstock-1453899434-Internationale-Raumstation-ISS.jpg';

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

// All props customizable
export const defaultStory = () => (
  <Image
    src={exampleImageSrc}
    width="80%"
    height="auto"
    imageWidth={1100}
    imageHeight={685}
    sizes="calc(80vw - 4rem)"
  />
);

// Simple image without responsive sizes
export const SimpleImage = () => (
  <Image src={exampleImageSrc} imageWidth={800} imageHeight={450} />
);

// External image
export const ExternalImage = () => (
  <Image
    src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    imageWidth={840}
    imageHeight={560}
  />
);

// Simple image without responsive sizes
export const OptimizationClass = () => (
  <Image
    src={exampleImageSrc}
    optimizationClass="hero-wide"
    imageWidth={800}
    imageHeight={367}
  />
);

// Lazy demonstration
export const Lazy = () => {
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
        onLoad={(e) => setLoadedSrc(e.currentTarget.currentSrc)}
      />
    </Box>
  );
};

// Responsive image
export const Responsive = () => {
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
        onLoad={(e) => setLoadedSrc(e.currentTarget.currentSrc)}
      />
    </Box>
  );
};

// Responsive image with custom class mapping
export const CustomClassMapping = () => {
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
        onLoad={(e) => setLoadedSrc(e.currentTarget.currentSrc)}
      />
    </Box>
  );
};
