import React, { ReactNode } from 'react';
export type CdnComponentsConfiguration = {
    hostname: string;
    originHostnames: string[];
};
export type ComponentsConfiguration = {
    cdn: CdnComponentsConfiguration;
};
export type ComponentsConfigurationProviderProps = {
    children: ReactNode;
    configuration: ComponentsConfiguration;
};
export declare const defaultComponentsConfiguration: ComponentsConfiguration;
export declare const ComponentsConfigurationContext: React.Context<ComponentsConfiguration>;
export declare const ComponentsConfigurationProvider: React.FC<ComponentsConfigurationProviderProps>;
declare const useComponentsConfiguration: () => ComponentsConfiguration;
export default useComponentsConfiguration;
