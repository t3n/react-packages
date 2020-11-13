import React from 'react';
export interface SocialNetworksProps {
    [key: string]: {
        name: string;
        icon: React.FC<React.SVGProps<SVGSVGElement>>;
        iconScale?: number;
    };
}
export declare const ArticleSocialSharing: React.FC<{
    url: string;
    title: string;
}>;
