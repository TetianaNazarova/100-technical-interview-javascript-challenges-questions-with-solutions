// Remove duplicates from an array
const removeDuplicates = (arr) => {
    const map = new Map();
    const result = [];

    for (const item of arr) {
        if (!map.has(item)) {
            map.set(item, true);
            result.push(item);
        }
    }

    return result;
}

console.log(removeDuplicates([1, 2, 3, 1, 1, 4, 5, 3, 2]));