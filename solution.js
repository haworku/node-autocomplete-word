const fs = require('fs');
const { generateMatchingWords, isWord } = require('./autocomplete.js');
const LOG = message => console.log(message);

// Pull command line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
  throw new Error(
    'You must pass at least two arguments [text fragment] [filepath].'
  );
} else {
  const textFragment = args[0];
  const files = args.slice(1);

  LOG('//// RESULTS: ////\n ');

  // Read each file and log autocomplete matching words
  files.forEach(fileName =>
    new Promise((resolve, reject) => {
      // Handle  potential run errors
      fs.readFile(fileName, 'utf8', function(err, data) {
        if (err) {
          console.warn(`Cannot read file: ${fileName}.`);
          throw err;
        } else if (!isWord(textFragment)) {
          throw new Error(
            `Test fragment '${textFragment}' is a non-word entity and will not evaluate for autocompletion.`
          );
        }

        // MAIN collect autocomplete words and frequencies-  in autocomplete.js
        const matchingArray = generateMatchingWords(textFragment, data);

        const message = matchingArray.length
          ? JSON.stringify(matchingArray)
          : '\nNO AUTOCOMPLETE MATCHES\n\n';

        resolve({ message: `${message}\n\n` });
      });
    }).then(data => LOG(`FILE: ${fileName}:\n ${data.message}`))
  );
}
