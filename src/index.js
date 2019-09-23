const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    const letters = stringToLetters(expr);
    const dotsAndDashes = binaryToDotDash(letters);
    const decodedLetter = letterDecoding(dotsAndDashes);

    return decodedLetter;
}

function stringToLetters(expr) {
    const letters = [];

    for (let i = 0; i < expr.length; i += 10) {
        letters.push(expr.substr(i, 10));
    }

    return letters;
}

function binaryToDotDash(letters) {
    const dotAndDash = [];

    for (let i = 0; i < letters.length; i++) {
        dotAndDash.push(codeToSymbol(letters[i]));
    }

    return dotAndDash;
}

function codeToSymbol(letter) {
    let symbol = '';

    symb: for (let i = 0; i < letter.length; i+=2) {
        const temp = "" + letter[i] + letter[i+1];

        switch (temp) {
            case "00":
                break;

            case "10":
                symbol += ".";
                break;

            case "11":
                symbol += "-";
                break;

            default:
                symbol += " * ";
                break symb;
        }
    }

    return symbol;
}

function letterDecoding(dotsAndDashes) {
    let word = '';

    for (let i = 0; i < dotsAndDashes.length; i++) {
        if (dotsAndDashes[i] == " * ") {
            word += " ";
        } else {
            word += MORSE_TABLE[dotsAndDashes[i]];
        }
    }

    return word;
    }

    module.exports = {
    decode
    }