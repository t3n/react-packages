import React from 'react';
export declare type SocialNetworkType = 'email' | 'facebook' | 'flipboard' | 'github' | 'google' | 'instagram' | 'linkedin' | 'pocket' | 'slack' | 'twitter' | 'whatsapp' | 'xing' | 'youtube';
export interface SocialButtonProps {
    network: SocialNetworkType;
    textBefore?: string;
}
export interface SocialNetworksProps {
    [key: string]: {
        name: string;
        icon: React.FunctionComponent<React.SVGProps<SVGElement>>;
        iconScale?: number;
    };
}
export declare const socialNetworksConfig: SocialNetworksProps;
export declare const SocialButton: (props: SocialButtonProps) => JSX.Element;
