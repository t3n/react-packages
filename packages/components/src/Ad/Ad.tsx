import React, { forwardRef } from 'react';

import { Box, BoxProps } from '../Box';
import { Text } from '../Text';

export interface AdProps extends BoxProps {
  name: string;
  preview?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const previewAdStyles = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bg: '#894BA8',
};

export const Ad = forwardRef<HTMLDivElement, AdProps>(
  ({ name, preview, style, className, children, color, ...boxProps }, ref) => (
    <Box
      style={style}
      className={className}
      color={color as any}
      height={preview ? '250px' : undefined}
      {...boxProps}
      ref={ref}
    >
      <Box id={name} width={1} {...(preview ? previewAdStyles : {})}>
        {preview ? (
          <Text color="text.inverse">
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
