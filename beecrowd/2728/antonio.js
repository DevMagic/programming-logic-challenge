var fs = require('fs');
var input = fs.readFileSync('teste.txt', 'utf8');
var lines = input.split('\r\n');

let wordContain = ['C','O','B','O','L'];

lines.forEach(line => {
  let words = line.split('-');
  if(words.length > 1) {
    let haveWordContain = words.every((word, index) => (word[0] == wordContain[index]  || word[0] == wordContain[index].toLowerCase()) || (word[word.length-1] == wordContain[index] || word[word.length-1] == wordContain[index].toLowerCase()) );
    if(haveWordContain) {
      console.log("GRACE HOPPER");
    } else {
      console.log("BUG")
    }
  }
});