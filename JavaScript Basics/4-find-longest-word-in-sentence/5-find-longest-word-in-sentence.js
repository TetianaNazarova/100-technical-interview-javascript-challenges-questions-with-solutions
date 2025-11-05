// Find the longest word in a sentence.

const findLongestWordInSentence = (str) => {
    const words = str.split(' ');
    const sortedWords = words.sort((a, b) => b.length - a.length);
    return sortedWords[0];
}

console.log(findLongestWordInSentence("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordInSentence("I love programming"));
console.log(findLongestWordInSentence("The coffee in coffee shop is not tastier than at home"));