/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

jest.mock('@t3n/theme/src/utils/color', () => {
  return {
    getThemeColor: jest.fn(),
    getColorForBackground: jest.fn()
  };
});
