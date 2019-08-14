import React from 'react';
import Imgix from 'react-imgix';

interface ImageProps {
  alt: string;
  src: string;
  width?: string;
  height?: string;

  processConfiguration?: {
    fit?: 'crop';
    quality?: number;
    aspectRatio?: string;
  };
}

const Image = ({ width, height, src, processConfiguration }: ImageProps) => {
  return (
    <Imgix
      src={src}
      imgixParams={{
        fit: processConfiguration && processConfiguration.fit,
        q: processConfiguration && processConfiguration.quality,
        ar: processConfiguration && processConfiguration.aspectRatio,
        h: height,
        w: width
      }}
      disableSrcSet
      width={width}
      height={height}
    />
  );
};

Image.defaultProps = {
  width: '150',
  height: 'auto'
};

export default Image;
