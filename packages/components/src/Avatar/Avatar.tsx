import React from 'react';
import styled from 'styled-components';
import Imgix from 'react-imgix';
import { space, color as styledColor, TextColorProps } from 'styled-system';

interface AvatarImageProps {
  src: string;
  size?: string;
  className?: string;
}

const AvatarImage = ({ src, size, className }: AvatarImageProps) => {
  return (
    <Imgix
      src={src}
      className={className}
      imgixParams={{ fit: 'crop', h: size, w: size }}
      width={size}
      height={size}
      disableSrcSet
    />
  );
};

AvatarImage.defaultProps = {
  size: '40'
};

const StyledAvatarImage = styled(AvatarImage)<{ src: string }>`
  border-radius: 50%;
  border: 2px solid white;
  box-sizing: border-box;
`;

interface AvatarProps extends Omit<AvatarImageProps, 'className'> {
  label?: string;
  textColor?: TextColorProps['color'];
}

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarLabel = styled.span<Pick<AvatarProps, 'textColor'>>`
  ${({ theme }) => space({ pl: 1, theme })}
  ${({ textColor, theme }) => styledColor({ color: textColor, theme })}
`;

const Avatar: React.FC<AvatarProps> = ({
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
  label: ''
};

export default Avatar;
