// Find the longest word in a sentence.

const findLongestWordInSentence = (str) => {
    let theLongestWord = '';
    str.split(' ').reduce((accumulator, currentWord) => {
        if (currentWord.length > accumulator) {
            accumulator = currentWord.length;
            theLongestWord = currentWord;
        }
        return accumulator;
    }, 0);
    return theLongestWord;
}

console.log(findLongestWordInSentence("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordInSentence("I love programming"));
console.log(findLongestWordInSentence("The coffee in coffee shop is not tastier than at home"));