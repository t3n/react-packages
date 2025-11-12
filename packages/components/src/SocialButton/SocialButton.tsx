import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { border, color } from 'styled-system';

import {
  SocialEmail,
  SocialFacebook,
  SocialFlipboard,
  SocialGithub,
  SocialGoogle,
  SocialInstagram,
  SocialLinkedin,
  SocialSlack,
  SocialTwitter,
  SocialWhatsapp,
  SocialXing,
  SocialYoutube,
} from '@t3n/icons';
import { getThemeColor } from '@t3n/theme';

import Button from '../Button';
import Icon from '../Icon';

export type SocialNetworkType =
  | 'email'
  | 'facebook'
  | 'flipboard'
  | 'github'
  | 'google'
  | 'instagram'
  | 'linkedin'
  | 'slack'
  | 'twitter'
  | 'whatsapp'
  | 'xing'
  | 'youtube';

export interface SocialButtonProps {
  network: SocialNetworkType;
  $textBefore?: string;
  $alternativeText?: string;
  children?: ReactNode;
}

export interface SocialNetworksProps {
  [key: string]: {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    iconScale?: number;
  };
}

export const socialNetworksConfig: SocialNetworksProps = {
  email: {
    name: 'E-Mail',
    icon: SocialEmail,
  },
  facebook: {
    name: 'Facebook',
    icon: SocialFacebook,
  },
  flipboard: {
    name: 'Flipboard',
    icon: SocialFlipboard,
  },
  github: {
    name: 'Github',
    icon: SocialGithub,
  },
  google: {
    name: 'Google',
    icon: SocialGoogle,
    iconScale: 1.4,
  },
  instagram: {
    name: 'Instagram',
    icon: SocialInstagram,
  },
  linkedin: {
    name: 'Linkedin',
    icon: SocialLinkedin,
    iconScale: 0.8,
  },
  slack: {
    name: 'Slack',
    icon: SocialSlack,
  },
  twitter: {
    name: 'Twitter',
    icon: SocialTwitter,
  },
  whatsapp: {
    name: 'Whatsapp',
    icon: SocialWhatsapp,
  },
  xing: {
    name: 'Xing',
    icon: SocialXing,
  },
  youtube: {
    name: 'Youtube',
    icon: SocialYoutube,
  },
};

const socialButtonStyle = css<SocialButtonProps>`
  ${({ theme }) =>
    color({ color: 'text.primary', bg: 'background.secondary', theme })}
  ${({ theme }) =>
    border({
      borderColor: 'background.secondary',
      theme,
    })}

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    ${({ network, theme }) => color({ bg: `social.${network}`, theme })}
    ${({ network, theme }) =>
      border({
        borderColor: `social.${network}`,
        theme,
      })}

    ${Icon} {
      fill: ${getThemeColor(`text.inverse`)};
    }
  }

  ${Icon} {
    fill: ${({ network }) => getThemeColor(`social.${network}`)};
    ${({ network }) =>
      socialNetworksConfig[network].iconScale
        ? `transform: scale(${socialNetworksConfig[network].iconScale});`
        : ''}
  }
`;

const StyledSocialButton = styled(Button).withConfig({
  shouldForwardProp: (prop) =>
    !['network', '$textBefore', '$alternativeText'].includes(prop as string),
})<SocialButtonProps>`
  ${socialButtonStyle}
`;

const mapSocialButtonAttributes = ({
  network,
  $textBefore,
  $alternativeText,
}: SocialButtonProps) => ({
  iconLeft: socialNetworksConfig[network].icon,
  children:
    $alternativeText ||
    `${$textBefore ? `${$textBefore} ` : ''}${
      socialNetworksConfig[network].name
    }`,
});

const SocialButton: React.FC<SocialButtonProps> = (props) => {
  const { iconLeft, children } = mapSocialButtonAttributes(props);
  return (
    <StyledSocialButton iconLeft={iconLeft} {...props}>
      {children}
    </StyledSocialButton>
  );
};

export default SocialButton;
