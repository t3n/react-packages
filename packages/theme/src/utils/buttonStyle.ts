import { css, StyledComponent } from 'styled-components';
import { color, system } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { ThemeProps } from '../index';

interface ButtonProps extends ThemeProps {
  secondary?: boolean;
  color?: 'light' | 'dark';
  inverse?: boolean;
  iconComponent?: StyledComponent<(props: any) => JSX.Element, any>;
  loaderComponent?: StyledComponent<(props: any) => JSX.Element, any>;
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
  inverse,
  iconComponent,
  loaderComponent
}: ButtonProps) => {
  const base = secondary
    ? theme.buttonStyles.secondary
    : theme.buttonStyles.primary[colorProp];

  const buttonStyles = base[inverse ? 'inverse' : 'regular'];
  const borderColor = themeGet(
    `colors.${buttonStyles.default.borderColor}`,
    'rgba(0,0,0,0)'
  )({
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

    ${
      iconComponent
        ? css`
            ${iconComponent} {
              ${system({
                fill: {
                  property: 'fill',
                  scale: 'colors'
                }
              })}
              fill: ${themeGet(`colors.${buttonStyles.default.color}`)};
            }
          `
        : ''
    }

    &:hover, &:focus {
      ${() =>
        color({
          bg: buttonStyles.hover.bg,
          color: buttonStyles.hover.color,
          theme
        })}
      ${() => border(borderColor)}

      ${
        iconComponent
          ? css`
              ${iconComponent} {
                fill: ${themeGet(`colors.${buttonStyles.hover.color}`)};
              }
            `
          : ''
      }
    }

    ${
      loaderComponent
        ? css`
            ${loaderComponent} {
              > div {
                ${() => color({ bg: buttonStyles.default.color, theme })}
              }
            }
          `
        : ''
    }
  `;
};

export default composeButtonStyle;
