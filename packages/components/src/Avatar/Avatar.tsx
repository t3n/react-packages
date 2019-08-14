import React from 'react';
import styled from 'styled-components';
import Imgix from 'react-imgix';
import { space, color as styledColor, TextColorProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';

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

interface AvatarProps extends AvatarImageProps {
  label?: string;
  textColor?: TextColorProps['color'];
}

const Avatar = ({ label, className, ...rest }: AvatarProps) => {
  return (
    <div className={className}>
      <StyledAvatarImage {...rest} />
      <span>{label}</span>
    </div>
  );
};

Avatar.defaultProps = {
  label: ''
};

const paddingLeft = ({ theme }: ThemeProps) => space({ pl: 1, theme });

const StyledAvatar = styled(Avatar)<AvatarProps>`
  display: flex;
  align-items: center;

  span {
    ${paddingLeft};
    ${({ textColor, theme }: AvatarProps & ThemeProps) =>
      styledColor({ color: textColor, theme })}
  }
`;

export default StyledAvatar;
