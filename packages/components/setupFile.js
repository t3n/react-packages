jest.mock('@t3n/theme/src/utils/color', () => {
  return {
    getThemeColor: jest.fn(),
    getColorForBackground: jest.fn()
  };
});
