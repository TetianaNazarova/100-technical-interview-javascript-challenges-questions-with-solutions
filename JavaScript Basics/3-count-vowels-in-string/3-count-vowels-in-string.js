// Count vowels in a string.
const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const strArr = str.toLowerCase().split('');
    let result = '';
    strArr.forEach((char) => {
        if (vowels.includes(char)) {
            result += char;
        }
    });
    return result.length;
}

console.log(countVowels("hello"));
console.log(countVowels("world"));
console.log(countVowels("javascript"));
