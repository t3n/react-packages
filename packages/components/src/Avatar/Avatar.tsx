/* eslint-disable react/require-default-props */
import React from 'react';
import Imgix from 'react-imgix';
import styled from 'styled-components';
import {
  border,
  color,
  color as styledColor,
  space,
  TextColorProps,
} from 'styled-system';

import { Box } from '../Box/Box';
import { Placeholder } from '../Placeholder/Placeholder';
import { Text } from '../Text/Text';

const AvatarPlaceholder = styled((props) => <Placeholder {...props} />)`
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 2,
      borderColor: 'shades.white',
      borderStyle: 'solid',
      borderRadius: '50%',
    })};
`;

const DefaultAvatar = styled((props) => <Box {...props} />)`
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 2,
      borderColor: 'shades.white',
      borderStyle: 'solid',
      borderRadius: '50%',
    })};

  ${({ theme }) =>
    color({
      theme,
      bg: 'brand.red',
      color: 'text.inverse',
    })};
`;

const StyledText = styled((props) => <Text {...props} />)`
  user-select: none;
  text-transform: uppercase;
`;

interface AvatarImageProps {
  optimizeSrc?: boolean;
  src?: string;
  size?: number;
  className?: string;
  alt?: string;
  loading?: boolean;
}

const AvatarImage = ({
  src,
  optimizeSrc = true,
  size,
  className,
  alt,
  loading,
}: AvatarImageProps) => {
  const parts = alt?.split(' ').filter(Boolean);
  const initials =
    parts && parts.length
      ? `${parts[0][0]}${parts.length > 1 ? parts[parts.length - 1][0] : ''}`
      : '?';

  return loading ? (
    <AvatarPlaceholder height={`${size}px`} width={`${size}px`} />
  ) : src ? (
    optimizeSrc ? (
      <Imgix
        src={src}
        className={className}
        imgixParams={{ fit: 'crop', h: size, w: size }}
        width={size}
        height={size}
        htmlAttributes={{ alt: alt || 'Kein Avatar' }}
        disableSrcSet
      />
    ) : (
      <img
        src={src}
        className={className}
        width={size}
        height={size}
        alt={alt || 'Kein Avatar'}
      />
    )
  ) : (
    <DefaultAvatar
      display="flex"
      alignItems="center"
      height={`${size}px`}
      width={`${size}px`}
    >
      {alt ? (
        <StyledText bold p={1} mx="auto" my={0} small>
          {initials}
        </StyledText>
      ) : (
        <StyledText bold p={1} mx="auto" my={0} small>
          ?
        </StyledText>
      )}
    </DefaultAvatar>
  );
};

AvatarImage.defaultProps = {
  size: '40',
};

const StyledAvatarImage = styled(AvatarImage)<{ src?: string }>`
  border-radius: 50%;
  border: 2px solid white;
  box-sizing: border-box;
`;

export interface AvatarProps extends Omit<AvatarImageProps, 'className'> {
  label?: string;
  textColor?: TextColorProps['color'];
}

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarLabel = styled.span<Pick<AvatarProps, 'textColor'>>`
  ${({ theme }) => space({ pl: 2, theme })}
  ${({ textColor, theme }) => styledColor({ color: textColor, theme })}
`;

export const Avatar: React.FC<AvatarProps> = ({
  label,
  textColor,
  children,
  ...rest
}) => (
  <StyledAvatar>
    <StyledAvatarImage {...rest} />
    {label && label.length > 0 && (
      <AvatarLabel textColor={textColor}>{label}</AvatarLabel>
    )}
    {children}
  </StyledAvatar>
);

Avatar.defaultProps = {
  label: '',
};
