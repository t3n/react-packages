import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import {
  MaterialAdd,
  MaterialLocalPostOffice,
  MaterialNotifications,
  MaterialRssFeed,
  SocialFlipboard,
  SocialInstagram,
  SocialLinkedin,
  SocialPocket,
  SocialTwitter,
  SocialXing,
} from '@t3n/icons';
import { getThemeColor } from '@t3n/theme';

import Box from '../Box';
import Icon from '../Icon';

export type SocialNetworkType =
  | 'facebook'
  | 'flipboard'
  | 'linkedin'
  | 'pocket'
  | 'twitter'
  | 'xing'
  | 'instagram'
  | 'newsletter'
  | 'notifications'
  | 'rssfeed'
  | 'socialmedia';

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

export interface LegacyArticleSocialShareProps {
  url: string;
  title: string;
}

const OldFacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="#8F8F8F"
    width="18px"
    height="18px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
  </svg>
);

const LegacySocialConfig: SocialNetworksProps = {
  facebook: {
    name: 'Facebook',
    icon: OldFacebookIcon,
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
  instagram: {
    name: 'Instagram',
    icon: SocialInstagram,
    iconScale: 0.9,
  },
  newsletter: {
    name: 'Newsletter',
    icon: MaterialLocalPostOffice,
    iconScale: 1.1,
  },
  notifications: {
    name: 'Notifications',
    icon: MaterialNotifications,
    iconScale: 1.1,
  },
  rssfeed: {
    name: 'RSS-Feed',
    icon: MaterialRssFeed,
    iconScale: 1.1,
  },
  socialmedia: {
    name: 'Social-Media',
    icon: MaterialAdd,
    iconScale: 1.4,
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

const SocialIcon = styled(LegacySocialIcon).attrs(
  socialIconAttributes
)<SocialIconProps>`
  ${({ theme }) => space({ theme, mr: 2 })}
  width: 24px;
  height: 24px;
  ${Icon} {
    ${({ network }) =>
      LegacySocialConfig[network].iconScale
        ? `transform: scale(${LegacySocialConfig[network].iconScale});`
        : ''}
    fill: ${getThemeColor(`shades.grey143`)};

    &:hover {
      fill: ${({ network }) => getThemeColor(`social.${network}`)};
    }

    &::last-child {
      margin-right: 0;
    }
  }
`;

export const LegacyHeaderSocialShare: React.FC = () => (
  <Box mt="5px" display="flex" justifyContent="flex-end">
    <SocialIcon url="https://facebook.com/t3nMagazin" network="facebook" />
    <SocialIcon url="https://instagram.com/t3n_magazin/" network="instagram" />
    <SocialIcon url="https://twitter.com/t3n" network="twitter" />
    <SocialIcon
      url="https://xing.com/news/pages/t3n-magazin-67"
      network="xing"
    />
    <SocialIcon
      url="https://linkedin.com/company/t3n-magazin-yeebase-media-gmbh/"
      network="linkedin"
    />
    <SocialIcon url="/info/t3n-newsletter/" network="newsletter" />
    <SocialIcon url="/info/push-notifications/" network="notifications" />
    <SocialIcon
      url="/social-media#RSS-Feeds:_Immer_up_to_date"
      network="rssfeed"
    />
    <SocialIcon url="/social-media/" network="socialmedia" />
  </Box>
);

const LegacyArticleSocialShare: React.FC<LegacyArticleSocialShareProps> = ({
  url,
  title,
}) => (
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

export default LegacyArticleSocialShare;
