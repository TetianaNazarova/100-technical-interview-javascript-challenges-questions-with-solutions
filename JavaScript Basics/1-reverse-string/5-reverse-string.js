// 1. Reverse a string without using built-in .reverse() - Recursive approach
function reverseString(str) {
    if (str === '') return '';
    return reverseString(str.substring(1)) + str[0];
}
console.log(reverseString('hello'));
