import React from 'react';
import styled from 'styled-components';
import { color, space } from 'styled-system';

import {
  MaterialAdd,
  MaterialLocalPostOffice,
  MaterialNotifications,
  MaterialRssFeed,
  SocialInstagram,
  SocialLinkedin,
  SocialTwitter,
  SocialXing,
} from '@t3n/icons';
import { ThemeProps } from '@t3n/theme';

import Box from '../Box';

export interface LegacySocialBarProps {
  className?: string;
  isInFooter?: boolean;
}

export type SocialLinkType = {
  title: string;
  url: string;
  icon: JSX.Element;
  rel?: string;
  target?: string;
}[];

const OldFacebookIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="#5f5f5f"
    width="18px"
    height="18px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
  </svg>
);

const SocialLink = styled.a`
  text-decoration: none;
  ${({ theme }) => space({ pl: '12px', theme })}
  ${({ theme }) => color({ theme, color: 'text.secondary' })};

  :last-child {
    ${({ theme }) => space({ pl: 2, theme })}
  }

  > svg:hover,
  > svg:focus {
    fill: ${({ theme }: ThemeProps) => theme.colors.text.highlight};
    text-decoration: none;
  }
`;

const legacySocialLinks: SocialLinkType = [
  {
    title: 'Facebook',
    url: 'https://facebook.com/t3nMagazin',
    icon: <OldFacebookIcon />,
    target: '_blank',
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com/t3n_magazin/',
    icon: <SocialInstagram fill="#5f5f5f" width="18px" height="18px" />,
    target: '_blank',
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/t3n',
    icon: <SocialTwitter fill="#5f5f5f" width="18px" height="18px" />,
    target: '_blank',
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/company/t3n-magazin-yeebase-media-gmbh/',
    icon: <SocialLinkedin fill="#5f5f5f" width="18px" height="18px" />,
    target: '_blank',
  },
  {
    title: 'Xing',
    url: 'https://xing.com/news/pages/t3n-magazin-67',
    icon: <SocialXing fill="#5f5f5f" width="18px" height="18px" />,
    target: '_blank',
  },
  {
    title: 't3n Newsletter',
    url: '/info/t3n-newsletter/',
    icon: <MaterialLocalPostOffice fill="#5f5f5f" width="22px" height="22px" />,
    rel: 'follow',
  },
  {
    title: 'Notifications',
    url: '/info/push-notifications/',
    icon: <MaterialNotifications fill="#5f5f5f" width="24px" height="24px" />,
    rel: 'follow',
  },
  {
    title: 't3n als RSS abonnieren',
    url: '/social-media#RSS-Feeds:_Immer_up_to_date',
    icon: <MaterialRssFeed fill="#5f5f5f" width="24px" height="24px" />,
    rel: 'follow',
  },
  {
    title: 'Folge t3n auf deinen Lieblingskanälen',
    url: '/social-media/',
    icon: <MaterialAdd fill="#5f5f5f" width="24px" height="24px" />,
    rel: 'follow',
  },
];

const LegacySocialBar: React.FC<LegacySocialBarProps> = ({
  className,
  isInFooter,
}) => (
  <Box
    display="flex"
    justifyContent={isInFooter ? 'center' : 'flex-end'}
    className={className}
    alignItems="center"
  >
    {legacySocialLinks.map((link) => (
      <SocialLink
        href={link.url}
        title={link.title}
        target={link.target ? link.target : '_self'}
        rel={link.rel ? link.rel : undefined}
        key={link.title}
      >
        {link.icon}
      </SocialLink>
    ))}
  </Box>
);

export default LegacySocialBar;
