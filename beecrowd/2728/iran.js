var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const parsedLines = lines.filter(line => line);

const COBOL = "cobol";

parsedLines.forEach(line => {
    const words = line.split("-");
    let wordToPrint = "GRACE HOPPER";

    words.forEach((word, idx) => {
        const lowerCaseWord = word.toLowerCase();
        const firstChar = lowerCaseWord[0];
        const lastChar = lowerCaseWord.slice(-1);

        if (firstChar !== COBOL[idx] && lastChar !== COBOL[idx]) {
            wordToPrint = "BUG";
        }
    });

    console.log(wordToPrint);
});
