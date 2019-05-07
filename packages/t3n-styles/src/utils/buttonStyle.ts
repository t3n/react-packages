import { css } from 'styled-components';
import { color, themeGet } from 'styled-system';
import { ThemeProps } from '../index';

interface ButtonProps extends ThemeProps {
  secondary?: boolean;
  color?: 'light' | 'dark';
  inverse?: boolean;
}

const border = (borderColor: string) =>
  borderColor === 'transparent'
    ? ''
    : `
  box-shadow: inset 0 0 0 2px ${borderColor};
`;

const composeButtonStyle = ({
  theme,
  secondary,
  color: colorProp = 'light',
  inverse
}: ButtonProps) => {
  const base = secondary
    ? theme.buttonStyles.secondary
    : theme.buttonStyles.primary[colorProp];

  const buttonStyles = base[inverse ? 'inverse' : 'regular'];
  const borderColor = themeGet(`colors.${buttonStyles.default.borderColor}`)({
    theme
  });

  return css`
    ${() =>
      color({
        bg: buttonStyles.default.bg,
        color: buttonStyles.default.color,
        theme
      })}
    ${() => border(borderColor)}

    &:hover, &:focus {
      ${() =>
        color({
          bg: buttonStyles.hover.bg,
          color: buttonStyles.hover.color,
          theme
        })}
      ${() => border(borderColor)}
    }
  `;
};

export default composeButtonStyle;
