import { boolean, text, number } from '@storybook/addon-knobs';

const mapPropToKnob = (name = '', value = '', groupId = '') => {
  const propType = typeof value;

  console.log(propType);

  switch (propType) {
    case 'boolean':
      return boolean(name, value, groupId);
    case 'string':
      return text(name, value, groupId);
    case 'number':
      return number(name, value, {}, groupId);
    default:
      return value;
  }
};

export const knobsFromProps = c => (
  props = {},
  groupId = '',
  filterPropNames = []
) =>
  Object.keys(c.defaultProps)
    .filter(propName => !filterPropNames.includes(propName))
    .map(propName => {
      const defaultProp = c.defaultProps[propName];
      const prop = Object.prototype.hasOwnProperty.call(props, propName)
        ? props[propName]
        : defaultProp;
      const knob = mapPropToKnob(propName, prop, groupId);

      return {
        propName,
        knob
      };
    })
    .reduce(
      (knobs, { propName, knob }) => ({ ...knobs, [propName]: knob }),
      {}
    );
