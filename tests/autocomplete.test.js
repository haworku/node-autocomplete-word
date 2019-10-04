const { isWord } = require('../autocomplete.js');

// toEqual for objects

describe('isWord', () => {
  test('true for latin words', () => {
    expect(isWord('tomorrow')).toBe(true);
    expect(isWord('mañana')).toBe(true);
    expect(isWord('100th')).toBe(true);
    expect(isWord("can't")).toBe(true);
  });

  test('false for numbers', () => {
    expect(isWord('1')).toBe(false);
    expect(isWord('1990-1993')).toBe(false);
  });

  test('false for symbols', () => {
    expect(isWord('&')).toBe(false);
    expect(isWord('"')).toBe(false);
    expect(isWord('A)')).toBe(false);
  });
});
