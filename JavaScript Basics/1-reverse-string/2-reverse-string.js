// 1. Reverse a string without using built-in .reverse().
const reverseString = (str) => {
    const reversedString = [];
    const copyStrToArray = str.split('');

    for (let i = 0; i < copyStrToArray.length; i++) {
        reversedString[i] = copyStrToArray[copyStrToArray.length - i - 1]
    }

    return reversedString.join('');
}

console.log(reverseString('hello'));
