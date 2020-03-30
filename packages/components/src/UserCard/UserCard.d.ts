import React from 'react';
export declare type SocialLinkType = 'TWITTER' | 'GITHUB' | 'XING' | 'HOMEPAGE' | 'LINKEDIN';
export declare type UserCardProps = {
    user: {
        id: number;
        name: string;
        avatarUrl: string;
        email?: string;
        position?: string;
        flag?: string;
        phone?: string;
        profile: string;
        socialLinks: {
            url: string;
            type: SocialLinkType;
        }[];
    };
    compact: boolean;
};
export declare const UserCard: React.FC<UserCardProps>;
