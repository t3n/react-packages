import React, { createContext, ReactNode, use } from 'react';

export interface CdnComponentsConfiguration {
  hostname: string;
  originHostnames: string[];
}

export interface ComponentsConfiguration {
  cdn: CdnComponentsConfiguration;
}

export interface ComponentsConfigurationProviderProps {
  children: ReactNode;
  configuration: ComponentsConfiguration;
}

export const defaultComponentsConfiguration: ComponentsConfiguration = {
  cdn: {
    hostname: 'cdn.t3n.de',
    originHostnames: [
      'storage.googleapis.com',
      'images.t3n.de',
      'assets.t3n.de',
    ],
  },
};

export const ComponentsConfigurationContext =
  createContext<ComponentsConfiguration>(defaultComponentsConfiguration);

export const ComponentsConfigurationProvider = ({
  children,
  configuration,
}: ComponentsConfigurationProviderProps) => {
  return (
    <ComponentsConfigurationContext value={configuration}>
      {children}
    </ComponentsConfigurationContext>
  );
};

const useComponentsConfiguration = () => use(ComponentsConfigurationContext);

export default useComponentsConfiguration;
