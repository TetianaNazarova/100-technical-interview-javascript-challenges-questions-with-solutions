// Find the longest word in a sentence.

const findLongestWordInSentence = (str) => {
    const words = str.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWordInSentence("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordInSentence("I love programming"));
console.log(findLongestWordInSentence("The coffee in coffee shop is not tastier than at home"));