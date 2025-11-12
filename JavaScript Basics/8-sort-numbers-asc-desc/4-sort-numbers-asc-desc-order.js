// Sort numbers in ascending and descending order - Merge sort Divide and Conquer
const sortNumbersAsc = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = sortNumbersAsc(arr.slice(0, mid));
    const right = sortNumbersAsc(arr.slice(mid));

    return merge(left, right);
}

const merge = (left, right) => {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift());
        }
    }

    return [...result, ...left, ...right]
}

console.log(sortNumbersAsc([1, -4, 5, 7, 98, 3, 3, 2, 56, -32]))