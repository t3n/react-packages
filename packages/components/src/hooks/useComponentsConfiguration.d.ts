import React, { PropsWithChildren } from 'react';
export interface CdnComponentsConfiguration {
    hostname: string;
    originHostnames: string[];
}
export interface ComponentsConfiguration {
    cdn: CdnComponentsConfiguration;
}
export interface ComponentsConfigurationProviderProps extends Required<PropsWithChildren> {
    configuration: ComponentsConfiguration;
}
export declare const defaultComponentsConfiguration: ComponentsConfiguration;
export declare const ComponentsConfigurationContext: React.Context<ComponentsConfiguration>;
export declare const ComponentsConfigurationProvider: ({ children, configuration, }: ComponentsConfigurationProviderProps) => import("react/jsx-runtime").JSX.Element;
declare const useComponentsConfiguration: () => ComponentsConfiguration;
export default useComponentsConfiguration;
