// Remove duplicates from an array
const removeDuplicates = (arr) => {
    const seenItems = {}
    const result = []

    for (const item of arr) {
        if (!seenItems[item]) {{
            seenItems[item] = true;
            result.push(item);
        }}
    }

    return result
}

console.log(removeDuplicates([1, 2, 3, 1, 1, 4, 5, 3, 2]));