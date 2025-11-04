// Check if a string is a palindrome.
// Write a function that checks if a given string (case insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads
// the same backwards as forwards, such as madam or racecar.
const isPalindrome = (str) => {
    const stringArray = str.toLowerCase().split('');
    const firstPartArr = [];
    const secondPartArr = [];

    for (let i = 0; i < stringArray.length / 2; i++) {
        firstPartArr.push(stringArray[i]);
    }


    for (let i = stringArray.length - 1; i > stringArray.length / 2 - 1; i--) {
        secondPartArr.push(stringArray[i]);
    }

    console.log('firstPartArr', firstPartArr);
    console.log('secondPartArr', secondPartArr);

    return firstPartArr.join('') === secondPartArr.join('');
};

console.log(isPalindrome('madam'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('A man, a plan, a canal. Panama'));
console.log(isPalindrome('12321'));
console.log(isPalindrome('1234567890'));
console.log(isPalindrome('abcdefghiklm'));
