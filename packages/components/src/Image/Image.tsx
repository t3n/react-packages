import React from 'react';
import Imgix, { SharedImgixAndSourceProps } from 'react-imgix';
import styled from 'styled-components';
import {
  HeightProps,
  layout,
  margin,
  MarginProps,
  WidthProps,
} from 'styled-system';

type FitTypes = 'crop' | 'faces' | 'facearea';

export interface BaseImageProps
  extends Pick<React.HTMLAttributes<HTMLImageElement>, 'onLoad'> {
  alt: string;
  src: string;
  sizes?: string;
  disableSrcSet?: boolean;
  className?: string;
  processConfiguration?: {
    fit?: FitTypes;
    facepad?: number;
    quality?: number;
    aspectRatio?: string;
    crop?: string;
    width?: number;
    height?: number;
  };
  style?: React.CSSProperties;
}

const BaseImage = ({
  src,
  alt,
  processConfiguration,
  onLoad,
  ...props
}: BaseImageProps) => {
  const params: SharedImgixAndSourceProps['imgixParams'] = {};

  if (processConfiguration?.fit) {
    params.fit = processConfiguration.fit;
  }

  if (processConfiguration?.quality) {
    params.q = processConfiguration.quality;
  }

  if (processConfiguration?.crop) {
    params.crop = processConfiguration.crop;
  }

  if (processConfiguration?.facepad) {
    params.facepad = processConfiguration.facepad;
  }

  if (processConfiguration?.aspectRatio) {
    params.ar = processConfiguration.aspectRatio;
  }

  if (processConfiguration?.width) {
    params.w = processConfiguration.width;
  }

  if (processConfiguration?.height) {
    params.h = processConfiguration.height;
  }

  return (
    <Imgix
      src={src}
      imgixParams={params}
      htmlAttributes={{
        alt,
        onLoad,
      }}
      {...props}
    />
  );
};

BaseImage.defaultProps = {
  disableSrcSet: false,
  sizes: '100vw',
};

export interface ImageProps
  extends BaseImageProps,
    MarginProps,
    WidthProps,
    HeightProps {}

export const Image = styled(({ width, height, ...props }) => (
  <BaseImage {...props} />
))<ImageProps>`
  ${margin}
  ${layout}
`;
