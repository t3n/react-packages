import { ReactNode } from 'react';
export type SocialLinkType = 'TWITTER' | 'GITHUB' | 'XING' | 'HOMEPAGE' | 'LINKEDIN';
export type SocialLink = {
    url: string;
    type: SocialLinkType;
};
export type UserCardProps = {
    user: {
        id: number;
        name: string;
        avatarUrl: string;
        email?: string;
        position?: string;
        flag?: string;
        phone?: string;
        socialLinks: SocialLink[];
    };
    optimizeAvatar?: boolean;
    link?: {
        fullCard?: boolean;
        url?: string;
        target?: string;
        title?: string;
    };
    compact: boolean;
    secondary?: boolean;
    children?: ReactNode;
};
export type SocialLinksProps = {
    links: SocialLink[];
    cardLinked?: boolean;
};
declare const UserCard: ({ user, optimizeAvatar, link, compact, secondary, children, }: UserCardProps) => import("react/jsx-runtime").JSX.Element;
export default UserCard;
