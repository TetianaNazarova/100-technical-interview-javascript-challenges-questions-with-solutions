// Remove duplicates from an array
const removeDuplicates = (arr) => {
    return arr.reduce((acc, currentItem) => {
        return acc.includes(currentItem) ? acc : [...acc, currentItem];
    }, [])
}

console.log(removeDuplicates([1, 2, 3, 1, 1, 4, 5, 3, 2]));