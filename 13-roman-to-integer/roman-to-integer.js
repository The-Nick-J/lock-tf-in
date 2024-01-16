/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let splitRoman = s.split('');
    let result = 0;
    for (let i = 0; i < splitRoman.length; i++) {
        if (splitRoman[i] === 'I' && (splitRoman[i + 1] === 'V' || 
        splitRoman[i + 1] === 'X')) {
            result -= 1;
        } else if (splitRoman[i] === 'X' && (splitRoman[i + 1] === 'L' || 
        splitRoman[i + 1] === 'C')) {
            result -= 10;
        } else if (splitRoman[i] === 'C' && (splitRoman[i + 1] === 'D' || 
        splitRoman[i + 1] === 'M')) {
            result -= 100;
        } else if (splitRoman[i] === 'I') {
            result += 1;
        } else if (splitRoman[i] === 'V') {
            result += 5;
        } else if (splitRoman[i] === 'X') {
            result += 10;
        } else if (splitRoman[i] === 'L') {
            result += 50;
        } else if (splitRoman[i] === 'C') {
            result += 100;
        } else if (splitRoman[i] === 'D') {
            result += 500;
        } else if (splitRoman[i] === 'M') {
            result += 1000;
        }
    }
    return result;
};