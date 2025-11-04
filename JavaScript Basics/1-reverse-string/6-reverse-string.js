// 1. Reverse a string without using built-in .reverse() - With 2 pointers
function reverseString(str) {
    const arr = str.split('');
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        console.log('arr[left]: ', arr[left]);
        console.log('arr[right]: ', arr[right]);
        [arr[left], arr[right]] = [arr[right], arr[left]];
        console.log(' [arr[right], arr[left]]',  [arr[right], arr[left]]);
        left++;
        right--;
    }

    return arr.join('');
}

console.log(reverseString('hello'));
