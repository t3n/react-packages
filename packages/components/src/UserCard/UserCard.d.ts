import React from 'react';
export declare type SocialLinkType = 'TWITTER' | 'GITHUB' | 'XING' | 'HOMEPAGE' | 'LINKEDIN';
declare type SocialLinks = {
    url: string;
    type: SocialLinkType;
}[];
export declare type UserCardProps = {
    user: {
        id: number;
        name: string;
        avatarUrl: string;
        email?: string;
        position?: string;
        flag?: string;
        phone?: string;
        profileUrl: string;
        socialLinks: SocialLinks;
    };
    compact: boolean;
};
declare type SocialLinksProps = {
    links: SocialLinks;
};
declare const SocialLinks: React.FC<SocialLinksProps>;
export declare const UserCard: React.FC<UserCardProps>;
export {};
