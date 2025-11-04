// 1. Reverse a string without using built-in .reverse().
const reverseString = (str) => {
    return str.split('').map((_, index) => str[str.length - index - 1]).join('');
}

console.log(reverseString('hello'));
