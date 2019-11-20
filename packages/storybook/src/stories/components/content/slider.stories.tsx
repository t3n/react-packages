import React from 'react';
import {
  Slider
} from '@t3n/components';

export default {
  title: 'Components|Content/Slider',
  component: Slider
};

export const defaultStory = () => {
  return (
    <div>
      <Slider name="slider" minValue={3} maxValue={10} initialValue={5} />
    </div>
  );
};

defaultStory.story = {
  name: 'Default'
};

export const customMinMaxWithStepsStory = () => {
  return (
    <div>
      <Slider name="slider" minValue={0} maxValue={10} steps={2} initialValue={0} />
    </div>
  );
};

customMinMaxWithStepsStory.story = {
  name: 'Custom minimum and maximum values in defined steps'
};

export const withTracksStory = () => {
  return (
    <div>
      <Slider
        name="slider"
        initialValue={5}
        minValue={3}
        maxValue={20}
        tracks={
          [
            { label: '3 €', value: 3, showLabel: true },
            { label: '5 €', value: 5, showLabel: true },
            { label: '10 €', value: 10, showLabel: true },
            { label: '20 €', value: 20, showLabel: true }
          ]
        } />
    </div>
  );
};

withTracksStory.story = {
  name: 'Slider with tracks as steps'
};
