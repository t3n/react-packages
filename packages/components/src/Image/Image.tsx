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

import useComponentsConfiguration, {
  CdnComponentsConfiguration,
} from '../hooks/useComponentsConfiguration';
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

export const transparentPlaceholderImageDataUrl =
  'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

export const defaultOptimizationClassMapping: OptimizationClassMapping = {
  '240': 'responsive-extrasmall',
  '420': 'responsive-small',
  '640': 'responsive-medium',
  '980': 'responsive-default',
  '1280': 'responsive-large',
  '1620': 'responsive-extralarge',
};

export const testIsFastlyUrl = (
  url: string,
  cdnConfiguration: CdnComponentsConfiguration,
) => {
  try {
    const parsedUrl = new URL(url);

    return (
      parsedUrl.hostname === cdnConfiguration.hostname ||
      !!cdnConfiguration.originHostnames.find((o) => parsedUrl.hostname === o)
    );
  } catch {
    return false;
  }
};

// Try to resolve fastly url from image src
export const generateFastlySrc = (
  src: string,
  imageClass: string,
  cdnConfiguration: CdnComponentsConfiguration,
) => {
  try {
    if (!testIsFastlyUrl(src, cdnConfiguration)) return src;

    const url = new URL(src);

    url.hostname = cdnConfiguration.hostname;
    url.searchParams.set('class', imageClass);

    return url.toString();
  } catch {
    // Simply return src if we cannot construct an url object from src
    // This might be the case for relative URLs where we don't know how to
    // map them
    return src;
  }
};

// Takes a raw src and a fastly image optimization class mapping and
// automatically generates srcSet for responsive images
export const generateSrcSet = (
  src: string,
  optimizationClassMapping: OptimizationClassMapping,
  cdnConfiguration: CdnComponentsConfiguration,
): string | undefined => {
  if (!testIsFastlyUrl(src, cdnConfiguration)) return undefined;

  /**
   * Keys from class mapping always describe the size of the optimized image
   *
   * Take keys and transform output for each size
   */
  return (
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
        return `${generateFastlySrc(src, optimizationClassName, cdnConfiguration)} ${w}w`;
      })
      .join(', ')
  );
};

export const generatePlaceholderSrc = (
  src: string,
  cdnConfiguration: CdnComponentsConfiguration,
) => {
  // Use transparent image as placeholder if image can't be served via fastly

  return testIsFastlyUrl(src, cdnConfiguration)
    ? generateFastlySrc(src, 'blur', cdnConfiguration)
    : transparentPlaceholderImageDataUrl;
};

export const generateSizesAttribute = (
  sizes: ImageProps['sizes'],
  theme: Theme,
) => {
  /**
   * If sizes is passed as array via props, resolve entries based on breakpoints
   * from theme and construct valid html sizes attribute value
   */

  if (Array.isArray(sizes)) {
    return sizes
      .map((size, i) => {
        const parsedSize = typeof size === 'number' ? `${size}px` : size;

        if (i < 1) return parsedSize;

        const breakpoint = theme.breakpoints[i - 1];

        return `(min-width: ${breakpoint}) ${parsedSize}`;
      })
      .reverse()
      .join(', ');
  }

  if (typeof sizes === 'number') return `${sizes}px`;

  return sizes;
};

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
  const { cdn: cdnConfiguration } = useComponentsConfiguration();
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
  const defaultSrc = generateFastlySrc(
    src,
    optimizationClass,
    cdnConfiguration,
  );

  const placeholderSrc = generatePlaceholderSrc(src, cdnConfiguration);

  const mappedSrcSet = generateSrcSet(src, classMapping, cdnConfiguration);

  const imgSizes = generateSizesAttribute(sizes, theme);

  const showPlaceholder =
    (lazy && placeholder && !wasInViewport) ||
    (!lazy && placeholder && !initialized);

  return (
    <NativeImage
      ref={getImageNode}
      src={showPlaceholder ? placeholderSrc : defaultSrc}
      data-src={defaultSrc}
      srcSet={!sizes || showPlaceholder ? undefined : mappedSrcSet || srcSet}
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
