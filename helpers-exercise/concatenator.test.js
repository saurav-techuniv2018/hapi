const concatenator = require('./helpers/concatenator');

describe('concatenator', () => {
  describe('should return \'\'', () => {
    test('when name or suffix parameter is missing', () => {
      expect(concatenator({
        data: {
          root: {
            name: 'test',
          },
        },
      })).toBe('');
    });
  });
  describe('should return concatenated string', () => {
    test('when both name or suffix parameters are passed', () => {
      expect(concatenator({
        data: {
          root: {
            name: 'hello',
            suffix: '!',
          },
        },
      })).toBe('hello!');
    });
  });
});

