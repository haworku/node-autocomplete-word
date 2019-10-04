const { isAutocompletable, isWord, sortByFreq } = require('../autocomplete.js');
const { testWordMap } = require('../fixtures/testData.js');

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

describe('sortByFreq', () => {
  test('returns empty array if no words match fragment', () => {
    expect(sortByFreq({})).toEqual([]);
  });

  test('returns array sorted by frequency when passed valid word map ', () => {
    const testInput = {
      betwix: 12,
      between: 200,
      betwiddle: 2
    };

    const testSorted = [
      { matchingWord: 'between', frequency: 200 },
      { matchingWord: 'betwix', frequency: 12 },
      { matchingWord: 'betwiddle', frequency: 2 }
    ];

    expect(sortByFreq(testInput)).toHaveLength(3);
    expect(sortByFreq(testInput)).toEqual(testSorted);
  });

  test('returns array of 25 if passed valid word map that is larger', () => {
    expect(sortByFreq(testWordMap)).toHaveLength(25);
  });

  test('returns array of the most frequent words', () => {
    expect(sortByFreq(testWordMap)).toEqual(
      expect.arrayContaining([
        { frequency: 501, matchingWord: 'better' },
        { frequency: 500, matchingWord: 'betwiddle' }
      ])
    );

    expect(sortByFreq(testWordMap)).not.toEqual(
      expect.arrayContaining([
        { frequency: 3, matchingWord: 'betterling' },
        { frequency: 1, matchingWord: 'betooth' }
      ])
    );
  });
});
