/*
Write two functions:

- One to retrieve all unique substrings that start and end with a vowel.
- One to retrieve all unique substrings that start and end with a consonant.
The resulting array should be sorted in lexicographic ascending order (same order as a dictionary). 
*/

function getVowelSubstrings(input) {
    const regEx = /[aeiou]/gi,
          vowels = input.match(regEx);
    let result = []
        arr = [];

    for (let i in input.split('')) {
        if (vowels.includes(input[i])) {
            arr.push(i);
        }
    }

    for (let i in arr) {
        result.push(input[arr[i]]);
        for (let x = +i+1; x < arr.length; x++) {
            const subStr = input.slice(+arr[i], +arr[x]+1);
          	if (subStr != '') result.push(subStr);
        }
    }

    return result.sort((a, b) => [a.toLowerCase(), b.toLowerCase()].sort()[0]===b?1:-1);
}

function getConsonantSubstrings(input) {
    const regEx = /[^aeiou\W]/gi,
          vowels = input.match(regEx);
    let result = []
        arr = [];

    for (let i in input.split('')) {
        if (vowels.includes(input[i])) {
            arr.push(i);
        }
    }

    for (let i in arr) {
        result.push(input[arr[i]]);
        for (let x = +i+1; x < arr.length; x++) {
            const subStr = input.slice(+arr[i], +arr[x]+1);
          	if (subStr != '') result.push(subStr);
        }
    }

    return result.sort((a, b) => [a.toLowerCase(), b.toLowerCase()].sort()[0]===b?1:-1);
}