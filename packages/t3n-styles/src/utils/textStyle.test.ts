import composeTextStyle from './textStyle';

const theme = {
  breakpoints: ['4rem', '8rem'],
  fontSizes: ['2rem', '1rem'],
  lineHeights: ['1.2rem', '1.4rem', '1.6rem'],
  textStyles: {
    family: {
      fontFamily: 'default'
    },
    size: {
      fontSize: 1
    },
    line: {
      lineHeight: 2
    },
    text: {
      fontFamily: 'default',
      fontSize: [0, 1],
      lineHeight: [0, 1, 2]
    }
  }
};

describe('composeTextStyle', () => {
  it('composes styled-components values from textStyle name and theme', () => {
    const textStyle = composeTextStyle({ textStyle: 'text', theme });

    expect(textStyle).toEqual({
      '0': {
        fontSize: '2rem',
        lineHeight: '1.2rem'
      },
      '1': {
        '@media screen and (min-width: 4rem)': {
          fontSize: '1rem',
          lineHeight: '1.4rem'
        }
      },
      '2': {
        '@media screen and (min-width: 8rem)': {
          lineHeight: '1.6rem'
        }
      },
      fontFamily: 'default'
    });
  });

  it('returns object with correct font-family value for textStyle from styled-system', () => {
    const textStyle = composeTextStyle({ textStyle: 'family', theme });
    expect(textStyle).toEqual({
      fontFamily: 'default'
    });
  });

  it('returns object with correct font-size value for textStyle from styled-system', () => {
    const textStyle = composeTextStyle({ textStyle: 'size', theme });
    expect(textStyle).toEqual({
      fontSize: '1rem'
    });
  });

  it('returns object with correct lineHeight value for textStyle from styled-system', () => {
    const textStyle = composeTextStyle({ textStyle: 'line', theme });
    expect(textStyle).toEqual({
      lineHeight: '1.6rem'
    });
  });
});
