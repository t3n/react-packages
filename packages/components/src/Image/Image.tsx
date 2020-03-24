import React from 'react';
import Imgix from 'react-imgix';
import styled from 'styled-components';
import {
  margin,
  MarginProps,
  layout,
  WidthProps,
  HeightProps,
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
  const params: { [key: string]: any } = {
    fit: processConfiguration && processConfiguration.fit,
    q: processConfiguration && processConfiguration.quality,
    crop: processConfiguration && processConfiguration.crop,
    facepad: processConfiguration && processConfiguration.facepad,
    ar: processConfiguration && processConfiguration.aspectRatio,
    w: processConfiguration && processConfiguration.width,
    h: processConfiguration && processConfiguration.height,
  };

  Object.keys(params).forEach((key) => {
    if (!params[key]) {
      delete params[key];
    }
  });

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
