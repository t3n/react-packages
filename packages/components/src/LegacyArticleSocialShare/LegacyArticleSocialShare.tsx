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

export interface SocialNetworksProps {
  [key: string]: {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    iconScale?: number;
  };
}

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

interface SocialIconProps {
  network: string;
  url: string;
}

interface AnchorProps {
  url: string;
  children: ReactNode;
}

const StyledAnchor = styled(
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  ({ url, ...rest }: AnchorProps) => <a href={url} {...rest} />
)<AnchorProps>``;

const LegacySocialIcon: React.FC<{
  url: string;
  component: React.FC<React.SVGProps<SVGSVGElement>>;
}> = ({ url, component, ...rest }) => (
  <StyledAnchor url={url} {...rest}>
    <Icon height="1.25rem" fill="shades.grey143" component={component} />
  </StyledAnchor>
);

const socialIconStyle = css<SocialIconProps>`
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

const SocialIconAttributes = ({ network }: SocialIconProps) => ({
  component: LegacySocialConfig[network].icon,
});

const SocialIcon = styled(LegacySocialIcon).attrs(SocialIconAttributes)<
  SocialIconProps
>`
  ${socialIconStyle}
`;

export const ArticleSocialSharing: React.FC<{ url: string; title: string }> = ({
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
