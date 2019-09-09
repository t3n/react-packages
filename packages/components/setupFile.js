/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

require('jsdom-global')();

global.window.Date = Date;

jest.mock('@t3n/theme/src/utils/color', () => {
  return {
    getThemeColor: jest.fn(),
    getColorForBackground: jest.fn()
  };
});
