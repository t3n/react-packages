import { PropsWithChildren } from 'react';
export type SocialLinkType = 'TWITTER' | 'GITHUB' | 'XING' | 'HOMEPAGE' | 'LINKEDIN';
export interface SocialLink {
    url: string;
    type: SocialLinkType;
}
export interface UserCardProps extends PropsWithChildren {
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
}
declare const UserCard: ({ user, optimizeAvatar, link, compact, secondary, children, }: UserCardProps) => import("react/jsx-runtime").JSX.Element;
export default UserCard;
