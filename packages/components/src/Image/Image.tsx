import React from 'react';
import Imgix from 'react-imgix';
import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';

type FitTypes = 'crop' | 'faces' | 'facearea';
export interface ImageProps extends MarginProps {
  alt: string;
  src: string;
  sizes?: string;
  width?: number;
  height?: number;
  disableSrcSet?: boolean;
  className?: string;
  processConfiguration?: {
    fit?: FitTypes;
    facepad?: number;
    quality?: number;
    aspectRatio?: string;
    crop?: string;
  };
}

const StyledImage = styled(Imgix)`
  ${margin}
`;

export const Image = ({
  width,
  height,
  src,
  alt,
  disableSrcSet = false,
  processConfiguration,
  className,
  ...rest
}: ImageProps) => {
  const params: { [key: string]: any } = {
    fit: processConfiguration && processConfiguration.fit,
    q: processConfiguration && processConfiguration.quality,
    crop: processConfiguration && processConfiguration.crop,
    facepad: processConfiguration && processConfiguration.facepad,
    ar: processConfiguration && processConfiguration.aspectRatio,
    h: height,
    w: width
  };

  Object.keys(params).forEach(key => {
    if (!params[key]) {
      delete params[key];
    }
  });

  return (
    <StyledImage
      src={src}
      imgixParams={params}
      disableSrcSet={disableSrcSet}
      width={width}
      height={height}
      htmlAttributes={{
        alt
      }}
      className={className}
      {...rest}
    />
  );
};

Image.defaultProps = {
  className: ''
};
