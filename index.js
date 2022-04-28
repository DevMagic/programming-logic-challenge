var input = require('fs').readFileSync('./stdin.txt', 'utf8');
var lines = input.split('\r\n');


let numbers = [];
let words = []
let output = [];

for (const line of lines) {
    if(line && +line >= 0){
        numbers.push(+line)
    }
    else {
        words.push(line);
    }
}
numbers.pop();
// console.log('>>> numbers', numbers);
let indexOld = 0;
for (const number of numbers) {
    // console.log('>>> number', number);
    // console.log('>>> indexOld', indexOld);
    let maxSpaces = 0;

    for (let i = indexOld; i < (number + indexOld); i++) {
        // console.log('>>> words[i]', words[i]);
        maxSpaces = maxSpaces < words[i].length ? words[i].length : maxSpaces;
    }

    

    for (let i = indexOld; i < (number + indexOld); i++) {
        if(words[i].length < maxSpaces){
            let diff = maxSpaces - words[i].length;
            let newWord = ''
            for (let index = 0; index < diff; index++) {
                newWord += ' ';
            }
            newWord += words[i];
            words[i] = newWord;
        }

        output.push(words[i]+'\n')
        
    }
    output.push('\n')
    indexOld += number;
}
output =  output.join('').substring(0, output.join('').length - 2)
// console.log('>>> numbers', numbers);
// console.log('>>> words', words);
console.log(output);


