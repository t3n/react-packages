import React, { useCallback, useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { height, HeightProps, width, WidthProps } from 'styled-system';

import { Theme } from '@t3n/theme';

import useInViewport from '../hooks/useInViewport';

// TODO:
// - Finalize prop namings
// - Add lazy offset prop

export interface OptimizationClassMapping {
  [key: string]: string;
}

export interface FastlyHostnameMapping {
  [key: string]: string;
}

export interface ImageProps
  extends Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    'placeholder' | 'sizes'
  > {
  src: string;
  sizes?: string | Array<string | number>;
  placeholder?: boolean;
  lazy?: boolean;
  optimizationClass?: string;
  classMapping?: OptimizationClassMapping;
  displayWidth?: WidthProps['width'];
  displayHeight?: HeightProps['height'];
}

const defaultOptimizationClassMapping: OptimizationClassMapping = {
  '240': 'responsive-extrasmall',
  '420': 'responsive-small',
  '640': 'responsive-medium',
  '980': 'responsive-default',
  '1280': 'responsive-large',
  '1620': 'responsive-extralarge',
};

const fastlyHostnameMapping = {
  'storage.googleapis.com': 'assets.t3n.de',
  't3n.de': 'images.t3n.de',
};

const generateFastlySrc = (src: string, imageClass: string) => {
  const [baseSrc, urlParams] = src.split('?');

  const fastlyOrigins = Object.keys(fastlyHostnameMapping);
  const fastlyDestinations = Object.values(fastlyHostnameMapping);

  if (fastlyDestinations.find((destination) => src.includes(destination))) {
    return `${baseSrc}?class=${imageClass}${urlParams ? `&${urlParams}` : ''}`;
  }

  const origin = fastlyOrigins.find((destination) => src.includes(destination));

  if (!origin) return src;

  const index = fastlyOrigins.indexOf(origin);
  const destination = fastlyDestinations[index];
  const destinationSrc = baseSrc.replace(origin, destination);

  return `${destinationSrc}?class=${imageClass}${
    urlParams ? `&${urlParams}` : ''
  }`;
};

const generateSrcSet = (
  src: string,
  optimizationClassMapping: OptimizationClassMapping
): string =>
  Object.keys(optimizationClassMapping)
    .map((k) => {
      const key = Number(k);

      if (`${key}` !== k)
        throw new Error('Key must be a string that contains only numbers!');

      return key;
    })
    .sort((a, b) => a - b)
    .map((w) => {
      const optimizationClassName = optimizationClassMapping[w.toString()];

      return `${generateFastlySrc(src, optimizationClassName)} ${w}w`;
    })
    .join(', ');

const NativeImage = styled.img<Omit<ImageProps, 'sizes'> & { sizes?: string }>`
  ${({ displayWidth, theme }) => width({ width: displayWidth, theme })}
  ${({ displayHeight, theme }) => height({ height: displayHeight, theme })}
`;

const Image: React.FC<ImageProps> = ({
  placeholder = true,
  lazy = true,
  optimizationClass = 'default',
  classMapping = defaultOptimizationClassMapping,
  src,
  srcSet,
  sizes,
  ...props
}) => {
  const [initialized, setInitialized] = useState(false);
  const [imageNode, setImageNode] = useState<HTMLImageElement | null>(null);
  const { wasInViewport } = useInViewport(imageNode);
  const theme = useTheme() as Theme;

  useEffect(() => {
    setInitialized(true);
  }, []);

  const getImageNode = useCallback((node: HTMLImageElement) => {
    setImageNode(node);
  }, []);

  const defaultSrc = generateFastlySrc(src, optimizationClass);
  const isFastlyImage = src !== defaultSrc;

  const placeholderSrc = isFastlyImage
    ? `${src}?class=blur`
    : 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  const mappedSrcSet = isFastlyImage
    ? generateSrcSet(src, classMapping)
    : undefined;

  const showPlaceholder =
    (lazy && placeholder && !wasInViewport) ||
    (!lazy && placeholder && !initialized);

  const imgSizes = Array.isArray(sizes)
    ? sizes
        .map((size, i) => {
          if (i < 1) return size;

          const breakpoint = theme.breakpoints[i - 1];

          return `(min-width: ${breakpoint}) ${size}`;
        })
        .reverse()
        .join(', ')
    : sizes;

  return (
    <NativeImage
      ref={getImageNode}
      src={showPlaceholder ? placeholderSrc : defaultSrc}
      data-src={defaultSrc}
      srcSet={!sizes || showPlaceholder ? undefined : srcSet || mappedSrcSet}
      sizes={showPlaceholder ? undefined : imgSizes}
      {...props}
    />
  );
};

export default Image;
