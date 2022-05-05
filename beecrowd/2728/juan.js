var input = require('fs').readFileSync('./stdin.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const cobol = 'cobol';

lines.forEach(line => {
    const words = (line.trim()).split('-');
    
    let wordFormed = '';
    let invalidWord = false;
    let letterNotFound = false;
    
    words.forEach((word, index) => {
        if(letterNotFound) {
            return
        }
        if(!word) {
            invalidWord = true;
            return
        }
        word = word.trim();
        const wordLastLetter = (word.length - 1);
        
        if (
            word[0].toLowerCase() == cobol[index] || word[wordLastLetter].toLowerCase() == cobol[index]) {
            wordFormed += cobol[index]
        } else {
            letterNotFound = true
        }
    })
    
    if (wordFormed == 'cobol') {
        console.log('GRACE HOPPER')
    } else if (!invalidWord) {
        console.log('BUG')
    }
})
