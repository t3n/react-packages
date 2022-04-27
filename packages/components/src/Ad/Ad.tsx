import React, { forwardRef } from 'react';

import Box, { BoxProps } from '../Box';
import Text from '../Text';

export interface AdProps extends BoxProps {
  name: string;
  preview?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const previewAdStyles = {
  height: '100%',
  alignItems: 'flex-start',
};

const Ad = forwardRef<HTMLDivElement, AdProps>(
  // eslint-disable-next-line react/prop-types
  ({ name, preview, style, className, children, color, ...boxProps }, ref) => (
    <Box
      style={style}
      className={className}
      color={color as any}
      height={preview ? '250px' : undefined}
      {...boxProps}
      ref={ref}
    >
      <Box
        id={name}
        width={1}
        display="flex"
        justifyContent="center"
        {...(preview ? previewAdStyles : {})}
        bg={preview ? 'background.secondary' : undefined}
      >
        {preview ? (
          <Text small color="text.secondary">
            Ad Unit ID:
            {name}
          </Text>
        ) : (
          children
        )}
      </Box>
    </Box>
  )
);

export default Ad;
