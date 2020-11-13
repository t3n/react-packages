import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import {
  SocialFacebook,
  SocialFlipboard,
  SocialLinkedin,
  SocialPocket,
  SocialTwitter,
  SocialXing,
} from '@t3n/icons';
import { getThemeColor } from '@t3n/theme';
import { space } from 'styled-system';
import { Icon } from '../Icon';
import { Box } from '../Box';

export type SocialNetworkType =
  | 'facebook'
  | 'flipboard'
  | 'linkedin'
  | 'pocket'
  | 'twitter'
  | 'xing';

export interface SocialIconProps {
  network: SocialNetworkType;
  url: string;
}

export interface SocialLinkProps {
  url: string;
  children: ReactNode;
}

export interface SocialNetworkProps {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconScale?: number;
}

export type SocialNetworksProps = {
  [key in SocialNetworkType]: SocialNetworkProps;
};

const LegacySocialConfig: SocialNetworksProps = {
  facebook: {
    name: 'Facebook',
    icon: SocialFacebook,
    iconScale: 0.9,
  },
  flipboard: {
    name: 'Flipboard',
    icon: SocialFlipboard,
  },
  linkedin: {
    name: 'Linkedin',
    icon: SocialLinkedin,
    iconScale: 0.9,
  },
  pocket: {
    name: 'Pocket',
    icon: SocialPocket,
  },
  twitter: {
    name: 'Twitter',
    icon: SocialTwitter,
  },
  xing: {
    name: 'Xing',
    icon: SocialXing,
  },
};

const SocialLink = styled(
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  ({ url, ...rest }: SocialLinkProps) => <a href={url} {...rest} />
)<SocialLinkProps>``;

const LegacySocialIcon: React.FC<{
  url: string;
  component: React.FC<React.SVGProps<SVGSVGElement>>;
}> = ({ url, component, ...rest }) => (
  <SocialLink url={url} {...rest}>
    <Icon height="1.25rem" fill="shades.grey143" component={component} />
  </SocialLink>
);

const socialIconAttributes = ({ network }: SocialIconProps) => ({
  component: LegacySocialConfig[network].icon,
});

const SocialIcon = styled(LegacySocialIcon).attrs(socialIconAttributes)<
  SocialIconProps
>`
  ${({ theme }) => space({ theme, mr: 2 })}
  ${Icon} {
    ${({ network }) =>
      LegacySocialConfig[network].iconScale
        ? `transform: scale(${LegacySocialConfig[network].iconScale});`
        : ''}
    fill: ${getThemeColor(`shades.grey143`)};

    &:hover {
      fill: ${({ network }) => getThemeColor(`social.${network}`)};
    }
  }
`;

export const LegacyArticleSocialShare: React.FC<{
  url: string;
  title: string;
}> = ({ url, title }) => (
  <Box mt={3}>
    <SocialIcon
      url={`https://getpocket.com/edit.php?url=${url}?utm_source=pocket&utm_medium=social&utm_campaign=social-buttons`}
      network="pocket"
    />
    <SocialIcon
      url={`https://share.flipboard.com/bookmarklet/popout?v=2&title=${title}&url=${url}?utm_source=flipboard.com&utm_medium=social&utm_campaign=social-buttons`}
      network="flipboard"
    />
    <SocialIcon
      url={`https://www.facebook.com/sharer.php?u=${url}?utm_source=facebook.com&utm_medium=social&utm_campaign=social-buttons`}
      network="facebook"
    />
    <SocialIcon
      url={`https://twitter.com/intent/tweet?text=${title}&url=${url}&utm_medium=social&utm_campaign=social-buttons&via=t3n&lang=de`}
      network="twitter"
    />
    <SocialIcon
      url={`https://www.xing.com/spi/shares/new?url=${url}?utm_source=xing.com&utm_medium=social&utm_campaign=social-buttons`}
      network="xing"
    />
    <SocialIcon
      url={`https://www.linkedin.com/shareArticle?mini=true&url=${url}?utm_source=linkedin.com&utm_medium=social&utm_campaign=social-buttons`}
      network="linkedin"
    />
  </Box>
);
