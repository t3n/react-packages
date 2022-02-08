import React, { ReactNode } from 'react';
export declare type SocialNetworkType = 'facebook' | 'flipboard' | 'linkedin' | 'pocket' | 'twitter' | 'xing' | 'instagram' | 'newsletter' | 'notifications' | 'rssfeed' | 'socialmedia';
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
export declare type SocialNetworksProps = {
    [key in SocialNetworkType]: SocialNetworkProps;
};
export declare const LegacyHeaderSocialShare: React.FC;
declare const LegacyArticleSocialShare: React.FC<{
    url: string;
    title: string;
}>;
export default LegacyArticleSocialShare;
