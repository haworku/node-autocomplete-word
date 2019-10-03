const { generateWordList } = require('./autocomplete.js');

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
    const list = generateWordList(fileName);

    const message = list.length
      ? `${fileName}: ${printList(list)}`
      : `${fileName}: \nNO MATCHES\n\n`;
    console.log(`RESULTS: \n\n${message}`);
  });
}
