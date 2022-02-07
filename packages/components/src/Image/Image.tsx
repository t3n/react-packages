import React, { useCallback, useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import {
  height as styledHeight,
  HeightProps,
  space,
  SpaceProps,
  width as styledWidth,
  WidthProps,
} from 'styled-system';

import { Theme } from '@t3n/theme';

import useInViewport from '../hooks/useInViewport';

export interface OptimizationClassMapping {
  [key: string]: string;
}

export interface FastlyHostnameMapping {
  [key: string]: string;
}

export interface ImageProps
  extends Omit<
      React.ImgHTMLAttributes<HTMLImageElement>,
      'placeholder' | 'sizes' | 'width' | 'height'
    >,
    SpaceProps {
  src: string;
  sizes?: string | number | Array<string | number>;
  placeholder?: boolean;
  lazy?: boolean;
  optimizationClass?: string;
  classMapping?: OptimizationClassMapping;
  width?: WidthProps['width'];
  height?: HeightProps['height'];
  imageWidth?: number;
  imageHeight?: number;
}

export const defaultOptimizationClassMapping: OptimizationClassMapping = {
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

// Try to resolve fastly url from image src
const generateFastlySrc = (src: string, imageClass: string) => {
  const [baseSrc, urlParams] = src.split('?');

  const fastlyOrigins = Object.keys(fastlyHostnameMapping);
  const fastlyDestinations = Object.values(fastlyHostnameMapping);

  // If if already is a fastly url, simply apply optimization class name
  // and reapply all possible url params
  if (fastlyDestinations.find((destination) => src.includes(destination))) {
    return `${baseSrc}?class=${imageClass}${urlParams ? `&${urlParams}` : ''}`;
  }

  const origin = fastlyOrigins.find((destination) => src.includes(destination));

  // If it's not a fastly compatible url, simply return the original src
  if (!origin) return src;

  const index = fastlyOrigins.indexOf(origin);
  const destination = fastlyDestinations[index];
  const destinationSrc = baseSrc.replace(origin, destination);

  // Resolve fastly origin for url and return url with optimization class
  // and original url params applied
  return `${destinationSrc}?class=${imageClass}${
    urlParams ? `&${urlParams}` : ''
  }`;
};

// Takes a raw src and a fastly image optimization class mapping and
// automatically generates srcSet for responsive images
const generateSrcSet = (
  src: string,
  optimizationClassMapping: OptimizationClassMapping
): string =>
  // Keys from class mapping always describe the size of the optimized image
  //
  // Take keys and transform output for each size
  Object.keys(optimizationClassMapping)
    .map((k) => {
      const key = Number(k);

      if (`${key}` !== k)
        throw new Error('Key must be a string that contains only numbers!');

      return key;
    })
    // We need to make sure the array is sorted from smallest size to largest
    .sort((a, b) => a - b)
    .map((w) => {
      // Get value for size from class mapping
      const optimizationClassName = optimizationClassMapping[w.toString()];

      // Return value that looks like 'http://t3n.de/image?class=optimized 640w'
      return `${generateFastlySrc(src, optimizationClassName)} ${w}w`;
    })
    .join(', ');

const NativeImage = styled.img<
  Omit<ImageProps, 'sizes' | 'width' | 'height'> & {
    sizes?: string;
    displayWidth: WidthProps['width'];
    displayHeight: HeightProps['height'];
  }
>`
  ${({ displayWidth, theme }) => styledWidth({ width: displayWidth, theme })}
  ${({ displayHeight, theme }) =>
    styledHeight({ height: displayHeight, theme })}
  ${space}
`;

const Image: React.FC<ImageProps> = ({
  placeholder = true,
  lazy = true,
  optimizationClass = 'default',
  classMapping = defaultOptimizationClassMapping,
  src,
  srcSet,
  sizes,
  width,
  height,
  imageWidth,
  imageHeight,
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

  // Resolve url and translate to fastly url if possible
  const defaultSrc = generateFastlySrc(src, optimizationClass);
  const isFastlyImage = src !== defaultSrc;

  // Use transparent image as placeholder if image can't be served via fastly
  const placeholderSrc = isFastlyImage
    ? `${src}?class=blur`
    : 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  // If image comes from fastly, resolve srcSet based on classMapping
  const mappedSrcSet = isFastlyImage
    ? generateSrcSet(src, classMapping)
    : undefined;

  const showPlaceholder =
    (lazy && placeholder && !wasInViewport) ||
    (!lazy && placeholder && !initialized);

  // If sizes is passed as array via props, resolve entries based on breakpoints
  // from theme and construct valid html sizes attribute value
  //
  // eslint-disable-next-line no-nested-ternary
  const imgSizes = Array.isArray(sizes)
    ? sizes
        .map((size, i) => {
          const parsedSize = typeof size === 'number' ? `${size}px` : size;

          if (i < 1) return parsedSize;

          const breakpoint = theme.breakpoints[i - 1];

          return `(min-width: ${breakpoint}) ${parsedSize}`;
        })
        .reverse()
        .join(', ')
    : typeof sizes === 'number'
    ? `${sizes}px`
    : sizes;

  return (
    <NativeImage
      ref={getImageNode}
      src={showPlaceholder ? placeholderSrc : defaultSrc}
      data-src={defaultSrc}
      srcSet={!sizes || showPlaceholder ? undefined : srcSet || mappedSrcSet}
      sizes={showPlaceholder ? undefined : imgSizes}
      width={imageWidth}
      height={imageHeight}
      displayWidth={width}
      displayHeight={height}
      {...props}
    />
  );
};

export default Image;
