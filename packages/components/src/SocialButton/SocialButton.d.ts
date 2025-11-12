import React, { ReactNode } from 'react';
export type SocialNetworkType = 'email' | 'facebook' | 'flipboard' | 'github' | 'google' | 'instagram' | 'linkedin' | 'slack' | 'twitter' | 'whatsapp' | 'xing' | 'youtube';
export interface SocialButtonProps {
    network: SocialNetworkType;
    $textBefore?: string;
    $alternativeText?: string;
    children?: ReactNode;
}
export interface SocialNetworksProps {
    [key: string]: {
        name: string;
        icon: React.FC<React.SVGProps<SVGSVGElement>>;
        iconScale?: number;
    };
}
export declare const socialNetworksConfig: SocialNetworksProps;
declare const SocialButton: React.FC<SocialButtonProps>;
export default SocialButton;
