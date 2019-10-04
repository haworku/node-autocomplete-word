const fs = require('fs');
const { generateMatchingWords } = require('./autocomplete.js');

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log(
    'You must pass at least two arguments [text fragment] [filepath].'
  );
} else {
  const textFragment = args[0];
  const files = args.slice(1);

  //Display results for each file
  files.forEach(fileName => {
    fs.readFile(fileName, 'utf8', function(err, data) {
      if (err) {
        console.warn(`Cannot read file: ${fileName}.`);
        throw err;
      } else if (!isWord(textFragment)) {
        throw new Error(
          `Test fragment '${textFragment}' is a non-word entity and will not evaluate for autocompletion.`
        );
      }

      const matchingArray = generateMatchingWords(textFragment, data);
      const message = matchingArray.length
        ? `${fileName}: ${JSON.stringify(matchingArray)}`
        : `${fileName}: \nNO MATCHES\n\n`;

      console.log(`RESULTS: \n\n${message}`);
    });
  });
}
