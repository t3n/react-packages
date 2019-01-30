import { boolean, text, number } from '@storybook/addon-knobs';

const knobTypes = {
  string: text,
  boolean,
  number
};

export const knobsFromProps = c => (
  props = {},
  groupId = '',
  filterProps = []
) =>
  Object.keys(c.defaultProps)
    .filter(propName => !filterProps.includes(propName))
    .map(propName => {
      const defaultProp = c.defaultProps[propName];
      const prop = Object.prototype.hasOwnProperty.call(props, propName)
        ? props[propName]
        : defaultProp;

      return {
        propName,
        knob: knobTypes[typeof defaultProp](propName, prop, groupId)
      };
    })
    .reduce(
      (knobs, { propName, knob }) => ({ ...knobs, [propName]: knob }),
      {}
    );
