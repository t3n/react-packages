import { boolean, text, number } from '@storybook/addon-knobs';

const mapPropToKnob = (name = '', value: any = '', groupId = '') => {
  const propType = typeof value;

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

// eslint-disable-next-line import/prefer-default-export
export const knobsFromProps = (c: any) => (
  props: any = {},
  groupId = '',
  filterPropNames: string[] = []
) =>
  Object.keys({ ...c.defaultProps, ...props })
    .filter((propName) => !filterPropNames.includes(propName))
    .map((propName) => {
      const defaultProp = c.defaultProps[propName];
      const prop = Object.prototype.hasOwnProperty.call(props, propName)
        ? props[propName]
        : defaultProp;
      const knob = mapPropToKnob(propName, prop, groupId);

      return {
        propName,
        knob,
      };
    })
    .reduce(
      (knobs, { propName, knob }) => ({ ...knobs, [propName]: knob }),
      {}
    );
