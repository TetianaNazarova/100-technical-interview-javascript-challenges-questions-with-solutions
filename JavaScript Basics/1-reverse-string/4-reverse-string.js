// 1. Reverse a string without using built-in .reverse() - Functional approach
function reverseString(str) {
    return str.split('').reduce((reversed, char) =>  char + reversed, '');
}

console.log(reverseString('hello'));
