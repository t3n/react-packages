import React, { createContext, ReactNode, useContext } from 'react';

export type CdnComponentsConfiguration = {
  hostname: string;
  originHostnames: string[];
};

export type ComponentsConfiguration = { cdn: CdnComponentsConfiguration };

export type ComponentsConfigurationProviderProps = {
  children: ReactNode;
  configuration: ComponentsConfiguration;
};

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
    <ComponentsConfigurationContext.Provider value={configuration}>
      {children}
    </ComponentsConfigurationContext.Provider>
  );
};

const useComponentsConfiguration = () =>
  useContext(ComponentsConfigurationContext);

export default useComponentsConfiguration;
