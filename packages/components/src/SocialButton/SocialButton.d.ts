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
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        iconScale?: number;
    };
}
export declare const socialNetworksConfig: SocialNetworksProps;
declare const SocialButton: (props: SocialButtonProps) => import("react/jsx-runtime").JSX.Element;
export default SocialButton;
