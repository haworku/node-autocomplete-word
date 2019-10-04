const { isAutocompletable, isWord } = require('../autocomplete.js');

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

describe('isAutocompletable', () => {
  test('true for latin words that autocomplete a fragment', () => {
    expect(isAutocompletable('tom', 'tomorrow')).toBe(true);
    expect(isAutocompletable('mañ', 'mañana')).toBe(true);
    expect(isAutocompletable('100th', '100th')).toBe(true);
  });

  test('false for text that does not contain the fragment', () => {
    expect(isAutocompletable('zol', 'tomorrow')).toBe(false);
    expect(isAutocompletable('tom', 'today')).toBe(false);
  });

  test('false for text that is not a word', () => {
    expect(isAutocompletable('1990-1993', '1990-1993')).toBe(false);
  });
});

describe('isAutocompletable', () => {
  test('true for latin words that autocomplete a fragment', () => {
    expect(isAutocompletable('tom', 'tomorrow')).toBe(true);
    expect(isAutocompletable('mañ', 'mañana')).toBe(true);
    expect(isAutocompletable('100th', '100th')).toBe(true);
  });

  test('false for text that does not contain the fragment', () => {
    expect(isAutocompletable('zol', 'tomorrow')).toBe(false);
    expect(isAutocompletable('tom', 'today')).toBe(false);
  });

  test('false for text that is not a word', () => {
    expect(isAutocompletable('1990-1993', '1990-1993')).toBe(false);
  });
});
