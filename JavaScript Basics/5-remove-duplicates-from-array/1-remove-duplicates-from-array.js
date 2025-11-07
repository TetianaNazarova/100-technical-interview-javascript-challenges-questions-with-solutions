// Remove duplicates from an array
const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 3, 1, 1, 4, 5, 3, 2]));