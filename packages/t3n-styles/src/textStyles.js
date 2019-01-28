import font from './font';

export const h1 = `normal bold ${font.sizes[7]}/1.25 ${font.family}`;
export const h2 = `normal bold ${font.sizes[6]}/1.285 ${font.family}`;
export const h3 = `normal bold ${font.sizes[5]}/1.333 ${font.family}`;
export const h4 = `normal bold ${font.sizes[4]}/1.4 ${font.family}`;
export const h5 = `normal bold ${font.sizes[3]}/1.5 ${font.family}`;
export const h6 = `normal bold ${font.sizes[3]}/1.5 ${font.family}`;

const textStyles = {
  h1: {
    font: h1
  },
  h2: {
    font: h2
  },
  h3: {
    font: h3
  },
  h4: {
    font: h4
  },
  h5: {
    font: h5
  },
  h6: {
    font: h6
  }
};

export default textStyles;
