import React, { PropsWithChildren } from 'react';
import { ButtonProps } from '../Button';
export type SocialNetworkType = 'email' | 'facebook' | 'flipboard' | 'github' | 'google' | 'instagram' | 'linkedin' | 'slack' | 'twitter' | 'whatsapp' | 'xing' | 'youtube';
export type SocialButtonProps = ButtonProps & PropsWithChildren<{
    network: SocialNetworkType;
    $textBefore?: string;
    $alternativeText?: string;
}>;
export type SocialNetworksProps = Record<string, {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    iconScale?: number;
}>;
export declare const socialNetworksConfig: SocialNetworksProps;
declare const SocialButton: (props: SocialButtonProps) => import("react/jsx-runtime").JSX.Element;
export default SocialButton;
