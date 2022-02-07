import React from 'react';
import Imgix, { SharedImigixAndSourceProps } from 'react-imgix';
import styled from 'styled-components';
import {
  HeightProps,
  layout,
  margin,
  MarginProps,
  WidthProps,
} from 'styled-system';

type FitTypes = 'crop' | 'faces' | 'facearea';

export interface BaseImgixImageProps
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

const BaseImgixImage = ({
  src,
  alt,
  processConfiguration,
  onLoad,
  ...props
}: BaseImgixImageProps) => {
  const params: SharedImigixAndSourceProps['imgixParams'] = {};

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

BaseImgixImage.defaultProps = {
  disableSrcSet: false,
  sizes: '100vw',
};

export interface ImgixImageProps
  extends BaseImgixImageProps,
    MarginProps,
    WidthProps,
    HeightProps {}

export const ImgixImage = styled(({ width, height, ...props }) => (
  <BaseImgixImage {...props} />
))<ImgixImageProps>`
  ${margin}
  ${layout}
`;
