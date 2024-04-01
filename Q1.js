function swapCase(string) {
    return string.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

const inputString = 'The Quick Brown Fox';
const outputString = swapCase(inputString);
console.log(outputString);