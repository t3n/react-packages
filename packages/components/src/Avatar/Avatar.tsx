/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  border,
  color,
  color as styledColor,
  space,
  TextColorProps,
} from 'styled-system';

import Box from '../Box';
import Image from '../Image';
import Placeholder from '../Placeholder';
import Text from '../Text';

export interface AvatarImageProps {
  optimizeSrc?: boolean;
  src?: string;
  size?: number;
  className?: string;
  alt?: string;
  loading?: boolean;
  children?: ReactNode;
}

export interface AvatarProps extends Omit<AvatarImageProps, 'className'> {
  label?: string;
  textColor?: TextColorProps['color'];
}

const AvatarPlaceholder = styled((props) => (
  <Placeholder as="span" {...props} />
))`
  ${({ theme }) =>
    border({
      theme,
      borderWidth: 2,
      borderColor: 'shades.white',
      borderStyle: 'solid',
      borderRadius: '50%',
    })};
`;

const DefaultAvatar = styled((props) => <Box as="span" {...props} />)`
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

const AvatarImage = ({
  src,
  optimizeSrc = true,
  size = 40,
  className,
  alt,
  loading,
}: AvatarImageProps) => {
  const parts = alt?.split(' ').filter(Boolean);
  const initials =
    parts && parts.length
      ? `${parts[0][0]}${parts.length > 1 ? parts[parts.length - 1][0] : ''}`
      : '?';

  if (loading)
    return <AvatarPlaceholder height={`${size}px`} width={`${size}px`} />;

  if (!src)
    return (
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

  if (optimizeSrc)
    return (
      <Image
        src={src}
        className={className}
        width={size}
        height={size}
        alt={alt || 'Avatar'}
      />
    );

  return (
    <img
      src={src}
      className={className}
      width={size}
      height={size}
      alt={alt || 'Kein Avatar'}
    />
  );
};

const StyledAvatarImage = styled(AvatarImage)<{ src?: string }>`
  border-radius: 50%;
  border: 2px solid white;
  box-sizing: border-box;
`;

const StyledAvatar = styled.span`
  display: flex;
  align-items: center;
`;

const AvatarLabel = styled.span<Pick<AvatarProps, 'textColor'>>`
  ${({ theme }) => space({ pl: 2, theme })}
  ${({ textColor, theme }) => styledColor({ color: textColor, theme })}
`;

const Avatar: React.FC<AvatarProps> = ({
  label = '',
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

export default Avatar;
