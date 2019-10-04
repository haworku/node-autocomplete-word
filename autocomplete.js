/*
 Returns bool
 True when case transformation results in unequal strings
 Removes strings that are likely numbers or punctuation
*/
isWord = str => str != str.toUpperCase();

/*
 Returns bool
 True when autocomplete standard is met - text autocompletes fragment
 Excludes non-words from consideration
*/
const isAutocompletable = (fragment, text) =>
  isWord(text) && text.includes(fragment);

/*
 Returns array of objects { matchingWord: string, frequency: number}
 Sort map of matching words by frequency in descending order, returning top 25
 If no words match fragment, returns empty array []
*/
const sortByFreq = wordsMap => {
  let finalArray = [];
  finalArray = Object.keys(wordsMap).map(function(key) {
    return {
      matchingWord: key,
      frequency: wordsMap[key]
    };
  });

  return finalArray
    .sort(function(a, b) {
      return b.frequency - a.frequency;
    })
    .slice(0, 25);
};

cleanStr = str => str.toLowerCase().normalize();

/*
  MAIN 
  Returns array of objects { matchingWord: string, frequency: number} 
  Generates list of words that contain autocomplete text fragment
*/
const generateMatchingWords = (fragment, textData) => {
  fragment = cleanStr(fragment);
  textData = cleanStr(textData);

  const textArray = textData.split(/\s+/);
  const matchingMap = {};

  textArray.forEach(function(text) {
    if (!isAutocompletable(fragment, text)) return;

    if (matchingMap.hasOwnProperty(text)) {
      matchingMap[text]++;
    } else {
      matchingMap[text] = 1;
    }
  });

  const matchingArray = sortByFreq(matchingMap);
  return matchingArray;
};

module.exports.cleanStr = cleanStr;
module.exports.generateMatchingWords = generateMatchingWords;
module.exports.isAutocompletable = isAutocompletable;
module.exports.isWord = isWord;
module.exports.sortByFreq = sortByFreq;
