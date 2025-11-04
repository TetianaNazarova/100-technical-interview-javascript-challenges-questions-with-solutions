// Count vowels in a string.
const countVowels = (str) => str.match(/[aeiou]/gi).length;

console.log(countVowels("hello"));
console.log(countVowels("world"));
console.log(countVowels("javascript"));
