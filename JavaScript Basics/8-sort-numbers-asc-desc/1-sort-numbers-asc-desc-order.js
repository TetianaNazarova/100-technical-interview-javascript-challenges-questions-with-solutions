// Sort numbers in ascending and descending order

const sortNumbersAsc = (arr) => {
    return [...arr].sort((a,b) => a - b);
}

console.log(sortNumbersAsc([1, -4, 5, 7, 98, 3, 3, 2, 56, -32]))

const sortNumbersDesc = (arr) => {
    return [...arr].sort((a,b) => b - a);
}

console.log(sortNumbersDesc([1, -4, 5, 7, 98, 3, 3, 2, 56, -32]))
