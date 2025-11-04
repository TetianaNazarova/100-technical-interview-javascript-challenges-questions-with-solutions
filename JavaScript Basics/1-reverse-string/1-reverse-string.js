// 1. Reverse a string without using built-in .reverse().
const reverseString = (str) => {
    let reversedStr = [];
    let strCopy = str;
    let strCopyToArray = strCopy.split('');
    let strCopyToArray2 = strCopy.split('');


    strCopyToArray.forEach(() => {
        reversedStr.push(strCopyToArray2.pop());
    });

    console.log(reversedStr.join(''));
    return reversedStr.join('');
}

console.log(reverseString('hello'));
