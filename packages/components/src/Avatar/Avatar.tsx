import React from 'react';
import styled from 'styled-components';
import Imgix from 'react-imgix';
import {
  space,
  color as styledColor,
  TextColorProps,
  border,
  color,
} from 'styled-system';
import { Placeholder, Box, Text } from '..';

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
`;

interface AvatarImageProps {
  src?: string;
  size?: number;
  className?: string;
  alt?: string;
  loading?: boolean;
}

const AvatarImage = ({
  src,
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
    <AvatarPlaceholder height="40px" width="40px" />
  ) : src ? (
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
    <DefaultAvatar
      display="flex"
      alignItems="center"
      height="40px"
      width="40px"
    >
      {alt ? (
        <StyledText bold p={1} mx="auto" my={0}>
          {initials}
        </StyledText>
      ) : (
        <StyledText bold p={1} mx="auto" my={0}>
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
}) => {
  return (
    <StyledAvatar>
      <StyledAvatarImage {...rest} />
      {label && label.length > 0 && (
        <AvatarLabel textColor={textColor}>{label}</AvatarLabel>
      )}
      {children}
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
  label: '',
};
