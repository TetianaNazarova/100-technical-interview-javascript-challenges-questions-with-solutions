// Remove duplicates from an array
const removeDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 3, 1, 1, 4, 5, 3, 2]));