import React from 'react';
import { select, withKnobs, text } from '@storybook/addon-knobs';

import {
  Grid,
  GridItem,
  SocialButton,
  socialNetworksConfig,
} from '@t3n/components';
import { SocialNetworkType } from '@t3n/components/src/SocialButton/SocialButton';

import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Inputs/SocialButton',
  component: SocialButton,
  decorators: [withKnobs, storyContainerDecorator],
};

export const defaultStory = () => {
  const socialNames = Object.keys(socialNetworksConfig);

  const selectedNetwork = select('Network', socialNames, socialNames[0]);

  return (
    <SocialButton
      href="https://www.t3n.de"
      target="_blank"
      network={selectedNetwork as SocialNetworkType}
      textBefore={text('Text vor Label', '')}
    />
  );
};

defaultStory.story = {
  name: 'Default',
};

export const networks = () => (
  <Grid>
    {Object.keys(socialNetworksConfig).map((network) => (
      <GridItem width="auto" mb={2} key={network}>
        <SocialButton network={network as SocialNetworkType} />
      </GridItem>
    ))}
  </Grid>
);
