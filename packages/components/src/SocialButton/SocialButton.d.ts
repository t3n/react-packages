import React, { ReactNode } from 'react';
export type SocialNetworkType = 'email' | 'facebook' | 'flipboard' | 'github' | 'google' | 'instagram' | 'linkedin' | 'pocket' | 'slack' | 'twitter' | 'whatsapp' | 'xing' | 'youtube';
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
declare const SocialButton: import("styled-components").StyledComponent<React.FC<import("../Button").ButtonProps>, any, {
    iconLeft: React.FC<React.SVGProps<SVGSVGElement>>;
    children: string;
} & SocialButtonProps, "children" | "iconLeft">;
export default SocialButton;
