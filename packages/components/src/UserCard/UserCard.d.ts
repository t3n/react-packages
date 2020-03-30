import React from 'react';
export declare type SocialLinkType = 'TWITTER' | 'GITHUB' | 'XING' | 'HOMEPAGE' | 'LINKEDIN';
declare type SocialLink = {
    url: string;
    type: SocialLinkType;
};
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
        socialLinks: SocialLink[];
    };
    compact: boolean;
};
export declare const UserCard: React.FC<UserCardProps>;
export {};