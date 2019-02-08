import { fontSize, fontFamily, lineHeight, util } from 'styled-system';

const system = {
  fontFamily,
  fontSize,
  lineHeight
};

const composeTextStyle = ({ textStyle: textStyleName, theme }) => {
  const styles = theme.textStyles[textStyleName];

  return Object.keys(styles)
    .map(propName => system[propName]({ [propName]: styles[propName], theme }))
    .reduce(util.merge, {});
};

export default composeTextStyle;
