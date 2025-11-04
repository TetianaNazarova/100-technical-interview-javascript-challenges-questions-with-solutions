// Check if a string is a palindrome.
// Write a function that checks if a given string (case insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads
// the same backwards as forwards, such as madam or racecar.
const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

console.log(isPalindrome('madam'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('A man, a plan, a canal. Panama'));
console.log(isPalindrome('12321'));
console.log(isPalindrome('1234567890'));
console.log(isPalindrome('abcdefghiklm'));
