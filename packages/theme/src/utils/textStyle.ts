import { fontFamily, fontSize, lineHeight } from 'styled-system';

interface Theme {
  textStyles: {
    [key: string]: any;
  };
  [key: string]: any;
}

interface System {
  [key: string]: (...args: any[]) => any;
}

const composeTextStyle = ({
  textStyle,
  theme,
}: {
  textStyle: string;
  theme: Theme;
}) => {
  const styles = theme.textStyles[textStyle];
  const system: System = {
    fontFamily,
    fontSize,
    lineHeight,
  };

  return Object.keys(styles).map((propName) =>
    system[propName]({ [propName]: styles[propName], theme })
  );
};

export default composeTextStyle;
