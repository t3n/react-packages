import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

import {
  SocialEmail,
  SocialFacebook,
  SocialInstagram,
  SocialLinkedin,
  SocialTwitter,
  SocialWhatsapp,
  SocialXing,
  SocialFlipboard,
  SocialGithub,
  SocialGoogle,
  SocialPocket,
  SocialSlack,
  SocialYoutube
} from '@t3n/icons';
import { getThemeColor } from '@t3n/theme';

import { Button } from '../Button';
import { Icon } from '../Icon';

export type SocialNetworkType =
  | 'email'
  | 'facebook'
  | 'flipboard'
  | 'github'
  | 'google'
  | 'instagram'
  | 'linkedin'
  | 'pocket'
  | 'slack'
  | 'twitter'
  | 'whatsapp'
  | 'xing'
  | 'youtube';

export interface SocialButtonProps {
  network: SocialNetworkType;
  textBefore?: string;
}

export interface SocialNetworksProps {
  [key: string]: {
    name: string;
    icon: React.FunctionComponent<React.SVGProps<SVGElement>>;
    iconScale?: number;
  };
}

export const socialNetworksConfig: SocialNetworksProps = {
  email: {
    name: 'E-Mail',
    icon: SocialEmail
  },
  facebook: {
    name: 'Facebook',
    icon: SocialFacebook
  },
  flipboard: {
    name: 'Flipboard',
    icon: SocialFlipboard
  },
  github: {
    name: 'Github',
    icon: SocialGithub
  },
  google: {
    name: 'Google',
    icon: SocialGoogle,
    iconScale: 1.4
  },
  instagram: {
    name: 'Instagram',
    icon: SocialInstagram
  },
  linkedin: {
    name: 'Linkedin',
    icon: SocialLinkedin,
    iconScale: 0.8
  },
  pocket: {
    name: 'Pocket',
    icon: SocialPocket
  },
  slack: {
    name: 'Slack',
    icon: SocialSlack
  },
  twitter: {
    name: 'Twitter',
    icon: SocialTwitter
  },
  whatsapp: {
    name: 'Whatsapp',
    icon: SocialWhatsapp
  },
  xing: {
    name: 'Xing',
    icon: SocialXing
  },
  youtube: {
    name: 'Youtube',
    icon: SocialYoutube
  }
};

const StyledSocialButton = styled(Button).attrs(
  ({ network, textBefore }: SocialButtonProps) => ({
    iconLeft: socialNetworksConfig[network].icon,
    children: `${textBefore ? `${textBefore} ` : ''}${
      socialNetworksConfig[network].name
    }`
  })
)<SocialButtonProps>`
  &:hover,
  &:focus {
    ${({ network, theme }) => color({ bg: `social.${network}`, theme })}

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

export const SocialButton = (props: SocialButtonProps) => (
  <StyledSocialButton {...props} />
);
