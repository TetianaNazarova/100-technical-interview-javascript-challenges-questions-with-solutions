// Find the longest word in a sentence.

const findLongestWordInSentence = (str) => {
   return str
        .split(' ')
        .reduce((longest, word) => longest.length < word.length ? word : longest, '')
}

console.log(findLongestWordInSentence("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordInSentence("I love programming"));
console.log(findLongestWordInSentence("The coffee in coffee shop is not tastier than at home"));