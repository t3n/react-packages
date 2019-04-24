import { fontSize, fontFamily, lineHeight } from 'styled-system';

interface Theme {
  textStyles: {
    [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  };
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface System {
  [key: string]: (...args: any[]) => any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const composeTextStyle = ({
  textStyle,
  theme
}: {
  textStyle: string;
  theme: Theme;
}) => {
  const styles = theme.textStyles[textStyle];
  const system: System = {
    fontFamily,
    fontSize,
    lineHeight
  };

  return Object.keys(styles).map(propName =>
    system[propName]({ [propName]: styles[propName], theme })
  );
};

export default composeTextStyle;
